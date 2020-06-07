import React, { useEffect, useState } from "react";

import { TextField } from "@components/molecules";

interface QuantityTextFieldProps {
  quantity: number;
  maxQuantity: number;
  disabled: boolean;
  onQuantityChange: (value: number) => void;
  hideErrors: boolean;
}

import { useIntl } from "react-intl";

export const QuantityTextField: React.FC<QuantityTextFieldProps> = ({
  disabled,
  quantity,
  maxQuantity,
  onQuantityChange,
  hideErrors,
}: QuantityTextFieldProps) => {
  const intl = useIntl();

  const [isTooMuch, setIsTooMuch] = useState(false);

  useEffect(() => {
    setIsTooMuch(!isNaN(quantity) && quantity > maxQuantity);
  }, [quantity, maxQuantity]);

  const handleQuantityChange = (evt: React.ChangeEvent<any>) => {
    const newQuantity = parseInt(evt.target.value, 10);

    if (quantity !== newQuantity) {
      onQuantityChange(newQuantity);
    }
    setIsTooMuch(!isNaN(newQuantity) && newQuantity > maxQuantity);
  };

  const quantityErrors =
    !hideErrors && isTooMuch
      ? [
          {
            message: intl.formatMessage(
              {
                defaultMessage: "Maximum quantity is {maxQuantity}",
              },
              { maxQuantity }
            ),
          },
        ]
      : undefined;

  return (
    <TextField
      type="number"
      label={intl.formatMessage({
        defaultMessage: "Quantity",
      })}
      min="1"
      value={quantity.toString()}
      disabled={disabled}
      onChange={handleQuantityChange}
      errors={quantityErrors}
    />
  );
};
