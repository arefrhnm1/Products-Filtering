import Card from "../UI/Card";
import "./Search.css";
import { useState, useRef } from "react";

export default function Search({ setProductName, productName }) {
  const productNameRef = useRef();
  const [isSearching, setIsSearching] = useState(false);

  function handleSearchBox() {
    isSearching
      ? submitInput()
      : setIsSearching((latestIsSearchingValue) => !latestIsSearchingValue);
  }

  const timer = useRef();

  function submitInput() {
    console.log("submitInput is called!");
    if (timer) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      console.log(productNameRef.current.value);
      setProductName(productNameRef.current.value);
    }, 1000);
  }
  function remover() {
    setProductName((productNameRef.current.value = ""));
  }

  return (
    <Card className="search">
      {isSearching ? (
        <input
          type="text"
          placeholder="نام محصول مدنظر"
          ref={productNameRef}
          onChange={submitInput}
        />
      ) : null}
      <button onClick={handleSearchBox}>
        {isSearching ? "جستجو" : "جستجو نام محصول"}
      </button>
      {productName ? (
        <div className="searched">
          {productName}
          <span onClick={() => remover()}>x</span>
        </div>
      ) : null}
    </Card>
  );
}
