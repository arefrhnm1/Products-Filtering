import Card from "../UI/Card";
import ProductDetails from "./ProductDetails";
import "./ProductItem.css";

function ProductItem(props) {
  // const productTitle = "میز چوبی";
  // const productCategory = "میز";
  // const productPrice = "200";
  // const productDate = new Date("2024-4-20").toLocaleString("fa-IR", {dateStyle: "short"});
  return (
    <Card className="product-item">
      <h2>{props.title}</h2>
      <span>{props.category}</span>
      <ProductDetails price={props.price} date={props.date}></ProductDetails>
    </Card>
  );
}

export default ProductItem;
