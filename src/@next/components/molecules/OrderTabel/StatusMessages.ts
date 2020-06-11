import { defineMessages } from "react-intl";

export const orderStatusMessages = defineMessages({
  canceled: {
    defaultMessage: "Canceled",
  },
  draft: {
    defaultMessage: "Draft",
  },
  fulfilled: {
    defaultMessage: "Fulfilled",
  },
  partiallyFulfilled: {
    defaultMessage: "Partially fulfilled",
  },
  unfulfilled: {
    defaultMessage: "Unfulfilled",
  },
});
export const paymentChargeStatusMessages = defineMessages({
  fullyCharged: {
    defaultMessage: "Fully charged",
  },
  fullyRefunded: {
    defaultMessage: "Fully refunded",
  },
  notCharged: {
    defaultMessage: "Not charged",
  },
  partiallyCharged: {
    defaultMessage: "Partially charged",
  },
  partiallyRefunded: {
    defaultMessage: "Partially refunded",
  },
});
