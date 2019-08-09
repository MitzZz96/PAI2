import React, { Component } from "react";
import ProductItem from "../Product/ProductItem";

const ItemList = props => {
  let products = props.filtredProducts.map(product => {
    return (
      <ProductItem
        key={product.idProduct}
        product={product}
        category_name={product.category_name}
      />
    );
  });
  return <React.Fragment>{products}</React.Fragment>;
};

export default ItemList;
