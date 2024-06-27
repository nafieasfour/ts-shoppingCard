interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

const productListElement = document.getElementById('product-list');

if (productListElement) {
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <h2>${product.name}</h2>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productListElement.appendChild(productElement);
  });
}

const cart: Product[] = [];

function addToCart(productId: number) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    updateCart();
  }
}

function updateCart() {
  const cartElement = document.getElementById('cart');
  if (cartElement) {
    cartElement.innerHTML = '<h2>Cart</h2>';
    cart.forEach(product => {
      const cartItemElement = document.createElement('div');
      cartItemElement.className = 'cart-item';
      cartItemElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
      `;
      cartElement.appendChild(cartItemElement);
    });
  }
}

// Ensure the addToCart function is available globally
(window as any).addToCart = addToCart;
