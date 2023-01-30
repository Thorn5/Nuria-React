export const decrease = (cart, product) => {
    const article = cart.find((item) => item.sku === product.sku);
    return article && article.qty === 1 
    ? cart.filter((item) => item.sku !== article.sku)
    : cart.map((item) => item.sku === product.sku
    ? {...item, qty: item.qty - 1}
    : item)
};
  
export const increase = (cart, product) => {
    const item = {...product};
    delete item.stock;
    const article = cart.find((cartItem) => cartItem.sku === item.sku);
    return !article 
    ?[{...item, qty: 1}, ...cart]
    : cart.map((cartItem) => cartItem.sku === item.sku
    ? {...cartItem, qty: cartItem.qty + 1}
    : cartItem
    )
};
  
export const getTotalPrice = (cart) => parseFloat(cart.reduce((p, c) => p + c.qty * c.price, 0)).toFixed(2);

export const getTotalItems = (cart) => cart.reduce((p, c) => p + c.qty, 0);
  