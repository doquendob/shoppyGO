import React, {useState, useEffect} from 'react';
import './App.css';
import withDataFetching from './hoc/withDataFetching';
import ProductsList from './components/pages/ProductsList';
import dataFetch from './fetching/dataFetch';

function App() {
  const options = {
    url: "https://dummyjson.com/product",
    method: "GET"
  };

  const DataFetchingComponent = withDataFetching(ProductsList, dataFetch);
  console.log(DataFetchingComponent);

  return (
    <div className="App">
      <DataFetchingComponent httpOptions={options} />
      {/* <ProductsList products={getProducts}/> */}
    </div>
  );
}

export default App;
