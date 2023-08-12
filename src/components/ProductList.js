
import { useProducts } from "../contexts/ProductContext";
import ProducutItem from "./ProducutItem";

function ProductList() {
  const { products } = useProducts();
  

  return (
    <ul className="allItems">
      {products.map((item) => (
        <ProducutItem item={item} key={item.productID} />
      ))}
    </ul>
  );
}

export default ProductList;
