"use strict";
var products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];
var productListElement = document.getElementById('product-list');
if (productListElement) {
    products.forEach(function (product) {
        var productElement = document.createElement('div');
        productElement.innerHTML = "\n        <h2>".concat(product.name, "</h2>\n        <p>Price: $").concat(product.price, "</p>\n        <button onclick=\"addToCart(").concat(product.id, ")\">Add to Cart</button>\n      ");
        productListElement.appendChild(productElement);
    });
}
var cart = [];
function addToCart(productId) {
    var product = products.find(function (p) { return p.id === productId; });
    if (product) {
        cart.push(product);
        updateCart();
    }
}
function updateCart() {
    var cartElement = document.getElementById('cart');
    if (cartElement) {
        cartElement.innerHTML = '<h2>Cart</h2>';
        cart.forEach(function (product) {
            var cartItemElement = document.createElement('div');
            cartItemElement.innerHTML = "\n          <h3>".concat(product.name, "</h3>\n          <p>Price: $").concat(product.price, "</p>\n        ");
            cartElement.appendChild(cartItemElement);
        });
    }
}
