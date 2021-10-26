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
    <div className="wrapper">
      {
        product ?
        <div>
          <h1>Details</h1>
          <span>{product.product_name}</span>
          <span>{product.categories}</span>
          <span>{product.image_front_url}</span>
          <span>{product.ingredients_text}</span>
          {
            product.allergens_hierarchy.map((element, key) => (
              <span key={key}>{element}</span>
            ))
          }
        </div>
        :
        <span>No Data</span>
      }
    </div>
  );
}

export default ProductDetails;
