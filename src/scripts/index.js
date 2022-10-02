import closeCart from './components/closeCart'
import loadingBtn from './components/loadingBtn'
import openCart from './components/openCart'
import '../styles/index.scss'

const cart = document.querySelector('[data-cart]')
const addToCartBtn = document.querySelector('[data-add-to-cart]')
const openCartBtns = document.querySelectorAll('[data-open-cart]')
const closeCartBtns = document.querySelectorAll('[data-close-cart]')

closeCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    closeCart(cart)
  })
})

openCartBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    openCart(cart)
  })
})

addToCartBtn.addEventListener('click', () => {
  loadingBtn(addToCartBtn)
  setTimeout(() => {
    openCart(cart)
  }, 1000)
})