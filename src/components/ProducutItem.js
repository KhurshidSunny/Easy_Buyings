import { Link } from "react-router-dom";
import { useProducts } from "../contexts/ProductContext";

function ProducutItem({ item }) {
  const id = item.productID;
  <span className="label sale">Sale</span>;
  return (
    <li className="card">
      <Link to={`${id}`}>
        <div className="image-container">
          <img src={item.productImageLink} alt={item.productTitle} />
          <div className="labels-container">
            {item.productIsNew && <span className="label new">New</span>}
            {item.productSale && <span className="label sale">Sale</span>}
          </div>
        </div>
        <div className="content-container">
          <h2 className="product-title">{item.productTitle}</h2>
          <p className="product-price">${item.productPrice.toFixed(2)}</p>

          <button className="add-to-cart">Add to Cart</button>
        </div>
      </Link>
    </li>
  );
}

export default ProducutItem;
