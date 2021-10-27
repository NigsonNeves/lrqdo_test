import React, { FC } from "react";
import { RightColumnProps } from "./interface/type";

import './style/product-details.css';

const RightColumn: FC<RightColumnProps> = ({product}) => {
  return (
    <div className="product-details-right-column" >
      <div className="product-description-header">
        <span>{product.categories}</span>
        <h1>{product.product_name}</h1>
      </div>
      <div className="product-description-body">
        <h3>Ingredients</h3>
        <p>{product.ingredients_text}</p>
      </div>
      <div className="product-description-body">
        <h3>Hallergens</h3>
        {
          product.allergens_hierarchy.length ?
            product.allergens_hierarchy.map((element, key) => (
              <p key={key}>{element}</p>
            ))
          :
            <p>No hallergen</p>
        }
      </div>
    </div>
  );
}

export default RightColumn;