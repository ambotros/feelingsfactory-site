// Simple localStorage-backed cart shared across all pages.

const CART_KEY = "tff_cart";

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(item) {
  // item: { slug, name, price, size, color, image }
  const cart = getCart();
  const existing = cart.find(
    (c) => c.slug === item.slug && c.size === item.size && c.color === item.color
  );
  if (existing) {
    existing.qty += item.qty || 1;
  } else {
    cart.push({ ...item, qty: item.qty || 1 });
  }
  saveCart(cart);
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateQty(index, qty) {
  const cart = getCart();
  if (qty <= 0) {
    cart.splice(index, 1);
  } else {
    cart[index].qty = qty;
  }
  saveCart(cart);
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal() {
  return getCart().reduce((sum, item) => sum + item.qty * item.price, 0);
}

function updateCartBadge() {
  const badge = document.querySelector("[data-cart-badge]");
  if (badge) {
    const count = cartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  }
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
