import React from "react";
import Product from "./Product";
import "./ProductList.modules.css";
export default function ProductList(props) {
  return (
    <div className="productList">
      <div className="product-container">
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />


        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
        <Product props={props} />
      </div>
    </div>
  );
}
