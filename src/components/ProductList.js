import ProductCard from "./ProductCard";

const ProductList = ({ products, cart }) => {
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.sku} product={product} cart={cart} />
      ))}
    </div>
  );
};

export default ProductList;
