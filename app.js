document.addEventListener('DOMContentLoaded', () => {
  const cartItems = document.querySelector('#cart-items');
  const cartTotal = document.querySelector('#cart-total');

  // Atualiza o total do carrinho
  const updateCartTotal = () => {
    let total = 0;
    const items = document.querySelectorAll('.cart-item');
    items.forEach(item => {
      const quantity = parseInt(item.querySelector('.quantity').value) || 0;
      const price = parseFloat(item.dataset.price) || 0;
      total += quantity * price;
    });
    cartTotal.textContent = `R$${total.toFixed(2)}`;
  };

  // Ações de incremento e decremento
  cartItems.addEventListener('click', (e) => {
    const target = e.target;
    const cartItem = target.closest('.cart-item');
    if (!cartItem) return;

    const quantityInput = cartItem.querySelector('.quantity');
    let quantity = parseInt(quantityInput.value);

    if (target.classList.contains('increment')) {
      quantityInput.value = quantity + 1;
    } else if (target.classList.contains('decrement') && quantity > 0) {
      quantityInput.value = quantity - 1;
    }
    updateCartTotal();
  });

  // Remove item do carrinho
  cartItems.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
      const cartItem = e.target.closest('.cart-item');
      cartItem.remove();
      updateCartTotal();
    }
  });

  // Atualiza o total ao alterar manualmente a quantidade
  cartItems.addEventListener('input', (e) => {
    if (e.target.classList.contains('quantity')) {
      updateCartTotal();
    }
  });
});
