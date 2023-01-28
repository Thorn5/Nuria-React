import ProductList from "./ProductList";
import Header from "./Header";
import ShoppingCart from "./ShoppingCart";

const Eshop = () => {
  const products = [
    {
      sku: 1,
      stock: 10,
      name: "iPhone 14 Pro Max",
      img:
        "https://www.interdiscount.ch/static-shops/products/720/846c8cebca69a34241dcb5d952727756e6cb.jpg",
      price: 1500
    },
    {
      sku: 2,
      stock: 10,
      name: "Macbook Air",
      img:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
      price: 1200
    },
    {
      sku: 3,
      stock: 10,
      name: "iPad Pro",
      img:
        "https://d1eh9yux7w8iql.cloudfront.net/product_images/338084_7fcba852-8e68-44da-97d1-a10b74a1349f.jpg",
      price: 1300
    }
  ];

  const cart = [
    {
      sku: 1,
      qty: 2,
      name: "iPhone 14 Pro Max",
      price: 1500
    },
    {
      sku: 3,
      qty: 1,
      name: "iPad Pro",
      price: 1300
    }
  ];

  return (
    <>
      <Header cart={cart} />
      <ProductList products={products} cart={cart} />
      <ShoppingCart cart={cart} />
    </>
  );
};

export default Eshop;
