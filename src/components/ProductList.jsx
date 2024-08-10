import React from "react";
import Product from "./Product";
import ProductListStyle from "./ProductList.module.css";
export default function ProductList(props) {
  return (
    <div className={ProductListStyle.productList}>
      <div className={ProductListStyle.productcontainer}>
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
