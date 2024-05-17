import "./Products.css";
import ProductItem from "./ProductItem";
import Card from "../UI/Card";

function Products({ productItems, productName }) {
  return (
    <Card className="products">
      {productItems.filter(p => p.title.includes(productName)).map((product, index) => (
        <ProductItem key={index} {...product} />
      ))}
    </Card>
  );
}

export default Products;
