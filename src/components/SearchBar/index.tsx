import React, { ChangeEvent, FC, useEffect, useState } from 'react';

import { getMultipleProductsRequest } from '../../utils/api/request/product';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import Input from '../Form/Input';
import ProductList from './product-list';
import { SearchBarProps, SearchProductBodyRequest, ProductObject } from './interface/type';
import ErrorMessage from '../ErrorMessage';

import './style/search-bar.css';


const Search: FC<SearchBarProps> = ({ placeHolder }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<any | null>(null);
  const [productList, setProductList] = useState<ProductObject[]>([]);
  
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  }

  const handleCleanSearchBar = (): void => {
    setInputValue('');
    setProductList([]);
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") handleOnSearch();
  }

  const handleOnSearch = async (): Promise<void> => {
    try {
      let response: SearchProductBodyRequest = await getMultipleProductsRequest(inputValue);

      setProductList(response.products);
      setError(null);
    } catch(error: unknown) {
      setError(error);
    }
  }

  useEffect(() => {
    if (!inputValue) setProductList([]);
  }, [inputValue])

  return (
    <div className="search-wrapper">
      <div className="search">
        <div className="search-inputs">
          <Input 
            onKeyPress={(e) => handleKeyPress(e)} 
            placeholder={placeHolder}
            value={inputValue} type="text" 
            onChange={(e) => handleInputChange(e)}
          />
          <div className="search-icon">
            {
              (productList.length && inputValue) ?
                <DeleteIcon onClick={() => handleCleanSearchBar()}/>
              :
                <SearchIcon onClick={() => handleOnSearch()}/>
            }
          </div>
        </div>
        {
          (productList.length > 0) && 
            <ProductList itemsList={productList}/>
        }
      </div>
      {error && <ErrorMessage error={error.toString()} />}
    </div>
  );
}

export default Search;
