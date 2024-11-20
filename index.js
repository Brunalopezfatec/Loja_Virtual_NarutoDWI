// Array para armazenar os itens do carrinho
let cart = [];

// Função para adicionar um item ao carrinho
function addToCart(name, price) {
  // Verifica se o item já existe no carrinho
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCartCount();
  saveCart();
  alert(`${name} foi adicionado ao carrinho!`);
}

// Atualiza o contador de itens no carrinho
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = totalItems;
}

// Exibe os itens no modal do carrinho
function viewCart() {
  const cartModal = document.getElementById("cart-modal");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = ""; // Limpa os itens exibidos

  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
      <p>${item.name} - R$${item.price.toFixed(2)} x ${item.quantity}</p>
      <button onclick="removeFromCart('${item.name}')">Remover</button>
    `;
    cartItems.appendChild(cartItem);
  });

  cartTotal.textContent = total.toFixed(2);
  cartModal.classList.remove("hidden");
}

// Remove um item do carrinho
function removeFromCart(name) {
  cart = cart.filter((item) => item.name !== name);
  updateCartCount();
  saveCart();
  viewCart();
}

// Fecha o modal do carrinho
function closeCart() {
  document.getElementById("cart-modal").classList.add("hidden");
}

// Salva o carrinho no LocalStorage
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Carrega o carrinho do LocalStorage ao carregar a página
function loadCart() {
  const storedCart = JSON.parse(localStorage.getItem("cart"));
  if (storedCart) {
    cart = storedCart;
    updateCartCount();
  }
}

// Inicializa o carrinho ao carregar a página
document.addEventListener("DOMContentLoaded", loadCart);
