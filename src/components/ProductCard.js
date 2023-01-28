import { decrease, increase } from "../utils";

const ProductCard = ({ product, cart }) => {
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={product.img} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <div className="card-buttons">
        <button onClick={() => decrease(cart, product)}>-</button>
        <div>{parseFloat(product.price).toFixed(2)} €</div>
        <button onClick={() => increase(cart, product)}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;
