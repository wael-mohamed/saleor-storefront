import React from "react";

import isEqual from "lodash/isEqual";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";

export const ProductTile: React.FC<IProps> = ({ product }: IProps) => {
  const price =
    product.pricing &&
    product.pricing.priceRange &&
    product.pricing.priceRange.start
      ? product.pricing.priceRange.start
      : undefined;
      const priceUndiscounted = product.pricing?.priceRangeUndiscounted?.start;

      const getProductPrice = () => {
        if (isEqual(price, priceUndiscounted)) {
          return <TaxedMoney taxedMoney={price} />;
        } else {
          return (
            <>
              <span className="product-list-item__undiscounted_price">
                <TaxedMoney taxedMoney={priceUndiscounted} />
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TaxedMoney taxedMoney={price} />
            </>
          );
        }
      };
  return (
    <S.Wrapper data-cy="product-tile">
      <S.Title>{product.translation?.name || product.name}</S.Title>
      <S.Price>
        {getProductPrice()}
      </S.Price>
      <S.Image>
        <Thumbnail source={product} />
      </S.Image>
    </S.Wrapper>
  );
};
