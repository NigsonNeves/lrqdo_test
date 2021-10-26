import React, { ChangeEvent, FC, useState } from 'react';

import { getMultipleProductsRequest } from '../../utils/api/request/product';
import Button from '../Form/Button';
import Input from '../Form/Input';
import ProductList from '../ProductList';
import { ProductObject } from '../ProductList/interface/type';
import { SearchBarProps, SearchProductBodyRequest } from './interface/type';

import './style/search-bar.css';

const Search: FC<SearchBarProps> = () => {
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
    <div className="wrapper">
      <div>
        <Input placeholder="Search a product..." value={inputValue} type="text" onChange={(e) => handleInputChange(e)}/>
        <ProductList itemsList={productList}/>
      </div>
      <Button text="Search" onClick={() => handleOnSearch()}/>
      {error && <span>{error.message}</span>}
    </div>
  );
}

export default Search;
