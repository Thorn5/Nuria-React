export const decrease = (cart, product) => {
    console.log(`Decrease product with sku ${product.sku}`);
  };
  
  export const increase = (cart, product) => {
    console.log(`Increase product with sku ${product.sku}`);
  };
  
  export const getTotalPrice = (cart) => parseFloat(4300).toFixed(2);
  
  export const getTotalItems = (cart) => 0;
  