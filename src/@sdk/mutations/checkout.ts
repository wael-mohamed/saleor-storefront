import gql from "graphql-tag";

import { checkoutErrorFragment, checkoutFragment } from "../fragments/checkout";
import { paymentErrorFragment, paymentFragment } from "../fragments/payment";
import { orderDetailFragment } from "../fragments/order";

export const updateCheckoutLineMutation = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation UpdateCheckoutLine(
    $checkoutId: ID!
    $lines: [CheckoutLineInput]!
    $locale: LanguageCodeEnum!
  ) {
    checkoutLinesUpdate(checkoutId: $checkoutId, lines: $lines) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const createCheckoutMutation = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation CreateCheckout(
    $checkoutInput: CheckoutCreateInput!
    $locale: LanguageCodeEnum!
  ) {
    checkoutCreate(input: $checkoutInput) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
        ...Checkout
      }
    }
  }
`;

export const updateCheckoutBillingAddressWithEmailMutation = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation UpdateCheckoutBillingAddressWithEmail(
    $checkoutId: ID!
    $billingAddress: AddressInput!
    $email: String!
    $locale: LanguageCodeEnum!
  ) {
    checkoutBillingAddressUpdate(
      checkoutId: $checkoutId
      billingAddress: $billingAddress
    ) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
        ...Checkout
      }
    }
    checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        code
        field
        message
      }
    }
  }
`;

export const updateCheckoutBillingAddressMutation = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation UpdateCheckoutBillingAddress(
    $checkoutId: ID!
    $billingAddress: AddressInput!
    $locale: LanguageCodeEnum!
  ) {
    checkoutBillingAddressUpdate(
      checkoutId: $checkoutId
      billingAddress: $billingAddress
    ) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
        ...Checkout
      }
    }
  }
`;

export const updateCheckoutShippingAddressMutation = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation UpdateCheckoutShippingAddress(
    $checkoutId: ID!
    $shippingAddress: AddressInput!
    $email: String!
    $locale: LanguageCodeEnum!
  ) {
    checkoutShippingAddressUpdate(
      checkoutId: $checkoutId
      shippingAddress: $shippingAddress
    ) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      checkout {
        ...Checkout
      }
    }
    checkoutEmailUpdate(checkoutId: $checkoutId, email: $email) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const updateCheckoutShippingMethodMutation = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation UpdateCheckoutShippingMethod(
    $checkoutId: ID!
    $shippingMethodId: ID!
    $locale: LanguageCodeEnum!
  ) {
    checkoutShippingMethodUpdate(
      checkoutId: $checkoutId
      shippingMethodId: $shippingMethodId
    ) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const addCheckoutPromoCode = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation AddCheckoutPromoCode(
    $checkoutId: ID!
    $promoCode: String!
    $locale: LanguageCodeEnum!
  ) {
    checkoutAddPromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const removeCheckoutPromoCode = gql`
  ${checkoutFragment}
  ${checkoutErrorFragment}
  mutation RemoveCheckoutPromoCode(
    $checkoutId: ID!
    $promoCode: String!
    $locale: LanguageCodeEnum!
  ) {
    checkoutRemovePromoCode(checkoutId: $checkoutId, promoCode: $promoCode) {
      checkout {
        ...Checkout
      }
      errors: checkoutErrors {
        ...CheckoutError
      }
    }
  }
`;

export const createCheckoutPaymentMutation = gql`
  ${checkoutFragment}
  ${paymentFragment}
  ${paymentErrorFragment}
  mutation CreateCheckoutPayment(
    $checkoutId: ID!
    $paymentInput: PaymentInput!
    $locale: LanguageCodeEnum!
  ) {
    checkoutPaymentCreate(checkoutId: $checkoutId, input: $paymentInput) {
      checkout {
        ...Checkout
      }
      payment {
        ...Payment
      }
      errors: paymentErrors {
        ...PaymentError
      }
    }
  }
`;

export const completeCheckoutMutation = gql`
  ${orderDetailFragment}
  ${checkoutErrorFragment}
  mutation CompleteCheckout($checkoutId: ID!, $locale: LanguageCodeEnum!) {
    checkoutComplete(checkoutId: $checkoutId) {
      errors: checkoutErrors {
        ...CheckoutError
      }
      order {
        ...OrderDetail
      }
    }
  }
`;
