import './App.css';
import Products from './component/Product/Products';
import Filter from './component/Filter/Filter';
import { PRODUCT_DATA } from './ProductItems';
import { useState } from 'react';
import SortedByPrice from './component/SortedByPrice/SortedByPrice';

const App = () => {
  const [selectedTab, setSelectedTab] = useState("همه");
  const [selectedPrice, setSelectedPrice] = useState(null);
  return (
    <>
      <Filter 
        productItems = {PRODUCT_DATA}
        setSelectedTab = {setSelectedTab}
        selectedTab = {selectedTab}
      />
      <SortedByPrice
        selectedPrice ={selectedPrice}
        setSelectedPrice ={setSelectedPrice}
      />
      <Products
        productItems = {PRODUCT_DATA}
        selectedTab = {selectedTab}
        selectedPrice = {selectedPrice}
      />
    </>
  )
};

export default App;
