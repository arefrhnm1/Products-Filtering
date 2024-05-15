import Card from "../UI/Card";
import ProductDetails from "./ProductDetails";
import "./ProductItem.css";

function ProductItem(props) {
  return (
    <Card className="product-item">
      <h2>{props.title}</h2>
      <span>{props.category}</span>
      <ProductDetails price={props.price} date={props.date}></ProductDetails>
    </Card>
  );
}

export default ProductItem;
