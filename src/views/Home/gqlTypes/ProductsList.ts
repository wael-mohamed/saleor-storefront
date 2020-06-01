/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductsList
// ====================================================

export interface ProductsList_shop_homepageCollection_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsList_shop_homepageCollection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage | null;
  name: string;
  translation: ProductsList_collection_edges_node_translation | null;
}

export interface ProductsList_shop {
  __typename: "Shop";
  /**
   * Shop's description.
   */
  description: string | null;
  /**
   * Shop's name.
   */
  name: string;
  /**
   * Collection displayed on homepage.
   */
  homepageCollection: ProductsList_shop_homepageCollection | null;
}

export interface ProductsList_categories_edges_node_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface ProductsList_categories_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  backgroundImage: ProductsList_categories_edges_node_backgroundImage | null;
  translation: ProductsList_categories_edges_node_translation | null;
}

export interface ProductsList_categories_edges_node_translation {
  __typename: "CategoryTranslation";
  name: string;
}

export interface ProductsList_categories_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductsList_categories_edges_node;
}

export interface ProductsList_categories {
  __typename: "CategoryCountableConnection";
  edges: ProductsList_categories_edges[];
}

export interface ProductsList {
  /**
   * Return information about the shop.
   */
  shop: ProductsList_shop;
  /**
   * List of the shop's categories.
   */
  categories: ProductsList_categories | null;
  collections: ProductsList_shop_Collections | null;
}
export interface ProductsList_shop_Collections {
  __typename: "CollectionCountableConnection";
  /**
   * Pagination data for this connection.
   */
  edges: ProductsList_collections_edges[];
}

export interface ProductsList_collections_edges {
  __typename: "CollectionCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductsList_collections_edges_node;
}
export interface ProductsList_collections_edges_node {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage | null;
  name: string;
  translation: ProductsList_collection_edges_node_translation | null;
}
export interface ProductsList_collection_edges_node_translation {
  __typename: "CollectionTranslation";
  name: string;
}
export interface ProductsListVariables {
  locale: string;
}
