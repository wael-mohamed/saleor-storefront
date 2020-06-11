import * as React from "react";
import { Link } from "react-router-dom";

import { TaxedMoney } from "@components/containers";
import {
  OrderDetail,
  OrderDetail_lines,
} from "@sdk/fragments/gqlTypes/OrderDetail";

import { AddressSummary, CartTable, NotFound } from "../../../components";
import { ILine } from "../../../components/CartTable/ProductRow";

import { orderHistoryUrl } from "../../../app/routes";

import { useIntl } from "react-intl";

import {
  orderStatusMessages,
  paymentChargeStatusMessages,
} from "@temp/@next/components/molecules/OrderTabel/StatusMessages";

const extractOrderLines = (lines: OrderDetail_lines[]): ILine[] => {
  return lines
    .map(line => ({
      quantity: line.quantity,
      totalPrice: {
        ...line.unitPrice,
        currency: line.unitPrice.currency,
        gross: {
          amount: line.quantity * line.unitPrice.gross.amount,
          ...line.unitPrice.gross,
        },
        net: {
          amount: line.quantity * line.unitPrice.net.amount,
          ...line.unitPrice.net,
        },
      },
      ...line.variant,
      name: line.productName,
    }))
    .sort((a, b) => b.id.toLowerCase().localeCompare(a.id.toLowerCase()));
};

const Page: React.FC<{
  guest: boolean;
  order: OrderDetail;
}> = ({ guest, order }) => {
  const intl = useIntl();
  const getOrderStatusMessage = (status?: string) => {
    switch (status) {
      case "Draft":
        return intl.formatMessage(orderStatusMessages.draft);
      case "Fulfilled":
        return intl.formatMessage(orderStatusMessages.fulfilled);
      case "Canceled":
        return intl.formatMessage(orderStatusMessages.canceled);
      case "Partially fulfilled":
        return intl.formatMessage(orderStatusMessages.partiallyFulfilled);
      case "Unfulfilled":
        return intl.formatMessage(orderStatusMessages.unfulfilled);
      default:
        return "";
    }
  };
  const getPaymentChargeStatusMessage = (status?: string) => {
    switch (status) {
      case "Not charged":
        return intl.formatMessage(paymentChargeStatusMessages.notCharged);
      case "Partially charged":
        return intl.formatMessage(paymentChargeStatusMessages.partiallyCharged);
      case "Fully charged":
        return intl.formatMessage(paymentChargeStatusMessages.fullyCharged);
      case "Partially refunded":
        return intl.formatMessage(
          paymentChargeStatusMessages.partiallyRefunded
        );
      case "Fully refunded":
        return intl.formatMessage(paymentChargeStatusMessages.fullyRefunded);
      default:
        return "";
    }
  };
  return order ? (
    <>
      {!guest && (
        <Link className="order-details__link" to={orderHistoryUrl}>
          {intl.formatMessage({
            defaultMessage: "Go back to Order History",
            description: "return to order history link",
          })}
        </Link>
      )}
      <h3>
        {intl.formatMessage(
          {
            defaultMessage: "Your order nr: {number}",
            description: "order number order history",
          },
          {
            number: order.number,
          }
        )}
      </h3>
      <p className="order-details__status">
        {getPaymentChargeStatusMessage(order.paymentStatusDisplay)} /{" "}
        {getOrderStatusMessage(order.statusDisplay)}
      </p>
      <CartTable
        lines={extractOrderLines(order.lines)}
        totalCost={<TaxedMoney taxedMoney={order.total} />}
        deliveryCost={<TaxedMoney taxedMoney={order.shippingPrice} />}
        subtotal={<TaxedMoney taxedMoney={order.subtotal} />}
      />
      <div className="order-details__summary">
        <div>
          <h4>
            {intl.formatMessage({
              defaultMessage: "Shipping Address",
              description: "Shipping Address order history",
            })}
          </h4>
          <AddressSummary
            address={order.shippingAddress}
            email={order.userEmail}
            paragraphRef={this.shippingAddressRef}
          />
        </div>
      </div>
    </>
  ) : (
    <NotFound />
  );
};

export default Page;
