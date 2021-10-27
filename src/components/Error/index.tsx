import React, { FC } from 'react';
import { RouteComponentProps, useHistory, withRouter } from 'react-router-dom';

import { ProductListProps } from './interface/type';

import './style/product-list.css';

const ProductList: FC<ProductListProps & RouteComponentProps> = ({ itemsList }) => {
  const history = useHistory();

  const handleProductClick = (productId: number): void => {
    history.push({ // Redirect on product page
      pathname:'/product',
      search: `?code=${productId}`,
      state: {
        code: productId
      }
    })
  }

  return (
    <div className="data-result">
      <ul>
        {
          itemsList.map((element, key) => (
            <li key={key} onClick={() => handleProductClick(element.id)}>
              <div className="data-item">
                <img src={element.image_front_small_url} alt={element.product_name ? element.product_name : 'Product'}/>
                <div className="data-property">
                  <span>
                    {element.product_name ? element.product_name : "No name"}
                  </span>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default withRouter(ProductList);
