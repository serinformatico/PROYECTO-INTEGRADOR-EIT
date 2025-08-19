let cart = [];

export function addToCart(product) {
  cart.push(product);
  console.log("Carrito:", cart);
}

export function removeFromCart(id) {
  const index = cart.findIndex((item) => item.id === id);
  if (index !== -1) cart.splice(index, 1);
  console.log("Carrito:", cart);
}

// Devuelve una función closure que mantiene el estado del contador
export function getCountClosure() {
  let count = 0;
  return function (step) {
    count = Math.max(0, count + step);
    return count;
  };
}
