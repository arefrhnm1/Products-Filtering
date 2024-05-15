import "./Products.css";
import ProductItem from "./ProductItem";
import Card from "../UI/Card";

function Products({ productItems, selectedTab, selectedPrice }) {
  return (
    <Card className="products">
      {selectedTab === "همه" && selectedPrice === null
        ? productItems.map((product, index) => (
            <ProductItem key={index} {...product} />
          ))
        : productItems
            .filter(
              (product) =>
                (selectedTab === product.category || selectedTab === "همه") &&
                (selectedPrice <= parseInt(product.price) ||
                  selectedPrice === null)
            )
            .map((product, index) => <ProductItem key={index} {...product} />)}
    </Card>
  );
}

export default Products;