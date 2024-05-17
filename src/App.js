import "./App.css";
import Products from "./component/Product/Products";
import Search from "./component/Search/Search";
import { PRODUCT_DATA } from "./ProductItems";
import { useState } from "react";

const App = () => {
  const [productName, setProductName] = useState("");
  return (
    <>
      <Search setProductName={setProductName} productName={productName} />
      <Products productItems={PRODUCT_DATA} productName={productName} />
    </>
  );
};

export default App;
