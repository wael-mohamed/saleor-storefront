import "./scss/index.scss";

import classNames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";

import { Button, Loader, ProductsFeatured } from "../../components";
import { generateCollectionUrl } from "../../core/utils";

import {
  ProductsList_categories,
  ProductsList_shop,
  ProductsList_shop_Collections,
  ProductsList_shop_homepageCollection_backgroundImage,
} from "./gqlTypes/ProductsList";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

import noPhotoImg from "../../images/no-photo.svg";

import { FormattedMessage, useIntl } from "react-intl";

const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
  shop: ProductsList_shop;
  collections: ProductsList_shop_Collections;
}> = ({ loading, categories, backgroundImage, shop, collections }) => {
  // const categoriesExist = () => {
  //   return categories && categories.edges && categories.edges.length > 0;
  // };
  const collectionsExist = () => {
    return collections && collections.edges && collections.edges.length > 0;
  };
  const homeCollectionExist = () => {
    return (
      shop &&
      shop.homepageCollection &&
      shop.homepageCollection.id &&
      shop.homepageCollection.name
    );
  };
  const intl = useIntl();

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>

      {/* <span className="home-page__hero__title home-page__hero__title__red">
        {">>> "}
        <FormattedMessage defaultMessage="Shipping cost: 500DZD" />
      </span>
      <br /> */}
      <span className="home-page__hero__title home-page__hero__title">
        <FormattedMessage defaultMessage="Contact us: 0778334917" />
      </span>

      <div
        className="home-page__hero"
        style={
          backgroundImage
            ? { backgroundImage: `url(${backgroundImage.url})` }
            : null
        }
      >
        <div className="home-page__hero-text">
          <div>
            <span className="home-page__hero__title">
              {loading && !shop ? (
                <Loader />
              ) : (
                homeCollectionExist() && (
                  <h1>
                    {shop.homepageCollection.translation?.name ||
                      shop.homepageCollection.name}
                  </h1>
                )
              )}
            </span>
          </div>
        </div>
        <div className="home-page__hero-action">
          {loading && !shop ? (
            <Loader />
          ) : (
            homeCollectionExist() && (
              <Link
                to={generateCollectionUrl(
                  shop.homepageCollection.id,
                  shop.homepageCollection.name
                )}
              >
                <Button>
                  <FormattedMessage
                    description="button discover home page collection"
                    defaultMessage="discover"
                  />
                </Button>
              </Link>
            )
          )}
        </div>
      </div>
      <ProductsFeatured
        title={intl.formatMessage({
          defaultMessage: "Featured",
          description: "ProductsFeatured home page section name",
        })}
      />
      {collectionsExist() && (
        <div className="home-page__categories">
          <div className="container">
            <h3>
              <FormattedMessage
                description="title home page shop by collection"
                defaultMessage="Shop by collection"
              />
            </h3>
            <div className="home-page__categories__list">
              {collections.edges.map(
                ({ node: collection }) =>
                  collection.id !== shop.homepageCollection?.id &&
                  collection.backgroundImage?.url && (
                    <div key={collection.id}>
                      <Link
                        to={generateCollectionUrl(
                          collection.id,
                          collection.name
                        )}
                        key={collection.id}
                      >
                        <div
                          className={classNames(
                            "home-page__categories__list__image",
                            {
                              "home-page__categories__list__image--no-photo": !collection.backgroundImage,
                            }
                          )}
                          style={{
                            backgroundImage: `url(${
                              collection.backgroundImage
                                ? collection.backgroundImage.url
                                : noPhotoImg
                            })`,
                          }}
                        />
                        <h3>
                          {collection.translation?.name || collection.name}
                        </h3>
                      </Link>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
