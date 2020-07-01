import React, {
  forwardRef,
  RefForwardingComponent,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { RouteComponentProps, useHistory } from "react-router";

import { CheckoutShipping } from "@components/organisms";
import { useCheckout } from "@sdk/react";
import { CHECKOUT_STEPS } from "@temp/core/config";
import { IFormError } from "@types";

import { getShippingMethod } from "./Cities";
export interface ICheckoutShippingSubpageHandles {
  submitShipping: () => void;
}

interface IProps extends RouteComponentProps<any> {
  changeSubmitProgress: (submitInProgress: boolean) => void;
}

const CheckoutShippingSubpageWithRef: RefForwardingComponent<
  ICheckoutShippingSubpageHandles,
  IProps
> = ({ changeSubmitProgress, ...props }: IProps, ref) => {
  const checkoutShippingFormId = "shipping-form";
  const checkoutShippingFormRef = useRef<HTMLFormElement>(null);

  const [errors, setErrors] = useState<IFormError[]>([]);

  const history = useHistory();
  const {
    checkout,
    availableShippingMethods,
    setShippingMethod,
  } = useCheckout();
  const possibleShippingMethod = getShippingMethod(
    checkout?.shippingAddress?.city
  );
  const shippingMethods = availableShippingMethods
    ? availableShippingMethods.filter(sm => sm.id === possibleShippingMethod)
    : [];

  useImperativeHandle(ref, () => ({
    submitShipping: () => {
      checkoutShippingFormRef.current?.dispatchEvent(
        new Event("submit", { cancelable: true })
      );
    },
  }));

  const handleSetShippingMethod = async (shippingMethodId: string) => {
    changeSubmitProgress(true);
    const { dataError } = await setShippingMethod(shippingMethodId);
    const errors = dataError?.error;
    changeSubmitProgress(false);
    if (errors) {
      setErrors(errors);
    } else {
      setErrors([]);
      history.push(CHECKOUT_STEPS[1].nextStepLink);
    }
  };

  return (
    <CheckoutShipping
      {...props}
      shippingMethods={shippingMethods}
      selectedShippingMethodId={checkout?.shippingMethod?.id}
      errors={errors}
      selectShippingMethod={handleSetShippingMethod}
      formId={checkoutShippingFormId}
      formRef={checkoutShippingFormRef}
    />
  );
};

const CheckoutShippingSubpage = forwardRef(CheckoutShippingSubpageWithRef);

export { CheckoutShippingSubpage };
