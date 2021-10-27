import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { getProductDetailsRequest } from '../../utils/api/request/product';
import useQuery from '../../utils/hooks/useQuery';
import { ProductDetailsBodyRequest, ProductDetailsObject, ProductDetailsProps } from './interface/type';

import './style/product-details.css';

interface LocationState {
  code: string
}

const ProductDetails: FC<ProductDetailsProps> = () => {
  const [product, setProduct] = useState<ProductDetailsObject | null>(null);
  const [error, setError] = useState<any>(null);

  const query: URLSearchParams = useQuery();
  const location = useLocation();

  const getProductDetails = async (code: string) => { // Retrieve product details
    try {
      let response: ProductDetailsBodyRequest = await getProductDetailsRequest(code)

      setProduct(response.product)
    } catch (error) {
      setError(error)
    }
  }

  useEffect(() => { // onMount
    let locationState = location.state as LocationState // get history state provided by previous component
    let code = query.get("code") // get url parameter

    if (locationState && locationState.code) {
      getProductDetails(locationState.code)
    } else if (code && !locationState) {
      getProductDetails(code)
    }
  }, [])

  return (
    <div className="product-details-wrapper">
      {
        product ?
        <>
          <div className="product-details-left-column" >
            <img src={product.image_front_url} alt={product.product_name} />
          </div>
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
        </>
        :
          <span>No Data</span>
      }
    </div>
  );
}

export default ProductDetails;
