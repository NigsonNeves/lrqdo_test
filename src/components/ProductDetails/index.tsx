import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import { getProductDetailsRequest } from '../../utils/api/request/product';
import useQuery from '../../utils/hooks/useQuery';
import ErrorMessage from '../ErrorMessage';
import { ProductDetailsBodyRequest, ProductDetailsObject, ProductDetailsProps } from './interface/type';
import LeftColumn from './left-column';
import RightColumn from './right-column';

import './style/product-details.css';

interface LocationState {
  code: string
}

const ProductDetails: FC<ProductDetailsProps> = () => {
  const [product, setProduct] = useState<ProductDetailsObject | null>(null);
  const [error, setError] = useState<any | null>(null);

  const query: URLSearchParams = useQuery();
  const location = useLocation();

  const getProductDetails = async (code: string): Promise<void> => { // Retrieve product details
    try {
      let response: ProductDetailsBodyRequest = await getProductDetailsRequest(code);

      setProduct(response.product);
      setError(null);
    } catch (error) {
      setError(error);
    }
  }

  useEffect((): void => { // onMount
    let locationState = location.state as LocationState; // get history state provided by previous component
    let code = query.get("code"); // get url parameter

    if (locationState && locationState.code) {
      getProductDetails(locationState.code);
    } else if (code && !locationState) {
      getProductDetails(code);
    }
  }, [])

  return (
    <div className="product-details-wrapper">
      {
        product &&
        <>
          <LeftColumn  product={product}/>
          <RightColumn  product={product}/>
        </>
      }
      {error && <ErrorMessage error={error.toString()} />}
    </div>
  );
}

export default ProductDetails;
