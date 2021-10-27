import React, { FC } from "react";
import { LeftColumnProps } from "./interface/type";

import './style/product-details.css';

const LeftColumn: FC<LeftColumnProps> = ({product}) => {
  return (
    <div className="product-details-left-column" >
      <img src={product.image_front_url} alt={product.product_name} />
    </div>
  );
}

export default LeftColumn;