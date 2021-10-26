import React, { ChangeEvent, FC, useState } from 'react';

import { getMultipleProductsRequest } from '../../utils/api/request/product';
import Button from '../Form/Button';
import Input from '../Form/Input';
import ProductList from '../ProductList';
import { ProductObject } from '../ProductList/interface/type';
import { SearchBarProps, SearchProductBodyRequest } from './interface/type';

import './style/search-bar.css';

const Search: FC<SearchBarProps> = ({ placeHolder }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<any | null>(null);
  const [productList, setProductList] = useState<ProductObject[]>([]);
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  }

  const handleOnSearch = async (): Promise<void> => { //Utiliser useMemo() pour la valeur de l'input
    try {
      let response: SearchProductBodyRequest = await getMultipleProductsRequest(inputValue);

      setProductList(response.products);
    } catch(error) {
      setError(error);
    }
  }

  return (
    <div className="search-wrapper">
      <div className="search-header">
        <h1>Search for your favorite product</h1>
      </div>
      <div className="search">
        <div className="search-inputs">
          <Input placeholder={placeHolder} value={inputValue} type="text" onChange={(e) => handleInputChange(e)}/>
          <div className="search-icon">
            <Button text="Search" onClick={() => handleOnSearch()}/>
          </div>
        </div>
        {
          (productList.length > 0) && 
            <ProductList itemsList={productList}/>
        }
      </div>
    </div>
  );
}

export default Search;
