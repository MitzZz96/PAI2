import React from "react";
import ProductItem from "../Product/ProductItem";

const ItemList = props => {
  let products = props.filtredProducts.map(product => {
    return (
      <ProductItem
        key={product.idProduct}
        product={product}
        category_name={product.category_name}
        user={props.user}
        filtredProducts={props.filtredProducts}
      />
    );
  });
  return <React.Fragment>{products}</React.Fragment>;
};

export default ItemList;
