import React, { useState } from "react";

import { Icon } from "@components/atoms";
import { TaxedMoney } from "@components/containers";
import { CartSummaryRow } from "@components/molecules";

import * as S from "./styles";
import { ICostLine, ICosts, IProps } from "./types";

import { FormattedMessage, useIntl } from "react-intl";

const CostLine = ({
  name,
  cost,
  last = false,
  negative = false,
}: ICostLine) => (
  <S.CostLine last={last}>
    <span>{name}</span>
    <span data-cy={`cartSummaryCost${name.replace(/\s/g, "")}`}>
      {negative && "- "}
      <TaxedMoney taxedMoney={cost} />
    </span>
  </S.CostLine>
);

/**
 * Cart summary displayed in checkout page
 */
const CartSummary: React.FC<IProps> = ({
  subtotal,
  total,
  shipping,
  promoCode,
  products,
}: IProps) => {
  const intl = useIntl();
  const [mobileCartOpened, setMobileCartOpened] = useState(false);
  const Costs = ({ subtotal, promoCode, shipping, total }: ICosts) => (
    <S.Costs>
      {subtotal && (
        <CostLine
          name={intl.formatMessage({ defaultMessage: "Subtotal" })}
          cost={subtotal}
        />
      )}
      {shipping && (
        <CostLine
          name={intl.formatMessage({ defaultMessage: "Shipping" })}
          cost={shipping}
        />
      )}
      {promoCode && promoCode.gross.amount > 0 && (
        <CostLine
          name={intl.formatMessage({ defaultMessage: "Promo Code" })}
          cost={promoCode}
          negative={true}
        />
      )}
      {total && (
        <CostLine
          name={intl.formatMessage({ defaultMessage: "Total" })}
          cost={total}
          last={true}
        />
      )}
    </S.Costs>
  );
  return (
    <S.Wrapper mobileCartOpened={mobileCartOpened}>
      <S.Title
        data-cy="cartSummaryTitle"
        onClick={() => setMobileCartOpened(!mobileCartOpened)}
      >
        <FormattedMessage defaultMessage={"Cart Summary"} />
        <S.ArrowUp mobileCartOpened={mobileCartOpened}>
          <Icon name="arrow_up" size={24} />
        </S.ArrowUp>
      </S.Title>
      <S.Content>
        <S.HR />
        <S.CartSummaryProductList>
          {products?.map((product, index) => (
            <div key={product.sku}>
              <S.ProductLine>
                <CartSummaryRow
                  index={index}
                  sku={product.sku}
                  quantity={product.quantity}
                  name={product.name}
                  price={product.price}
                  thumbnail={product.thumbnail}
                />
              </S.ProductLine>
              <S.HR />
            </div>
          ))}
        </S.CartSummaryProductList>
        <Costs
          subtotal={subtotal}
          total={total}
          shipping={shipping}
          promoCode={promoCode}
        />
      </S.Content>
    </S.Wrapper>
  );
};

export { CartSummary };
