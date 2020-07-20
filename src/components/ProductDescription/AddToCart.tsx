import React from "react";

import AddToCartButton from "./AddToCartButton";

import { useIntl } from "react-intl";

import { useAlert } from "react-alert";

const AddToCart: React.FC<{
  disabled: boolean;
  onSubmit: () => void;
}> = ({ onSubmit, disabled }) => {
  const intl = useIntl();
  const alert = useAlert();

  return (
    <AddToCartButton
      className="product-description__action"
      onClick={() => {
        onSubmit();
        alert.success(
          {
            title: "Item added to cart!",
          },
          {
            timeout: 5000,
          }
        );
      }}
      disabled={disabled}
    >
      {intl.formatMessage({
        defaultMessage: "Add to basket",
      })}
    </AddToCartButton>
  );
};

export default AddToCart;
