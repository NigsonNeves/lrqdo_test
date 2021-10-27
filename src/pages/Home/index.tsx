import React, { FC } from 'react';

import SearchBar from '../../components/SearchBar';
import Title from '../../components/Title';

const Home: FC = () => {
  return (
    <>
      <Title title="Search your favorite product" />
      <SearchBar placeHolder="Search product..."/>
    </>
  );
}

export default Home;
