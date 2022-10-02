const closeCart = (cart) => {
  cart.classList.remove('open')
  document.body.style.overflow = 'auto'
}

export default closeCart