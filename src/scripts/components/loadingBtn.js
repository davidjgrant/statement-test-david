const loadingBtn = (btn) => {
  btn.classList.add('loading')
  btn.innerText = 'loading'
  setTimeout(() => {
    btn.classList.remove('loading')
    btn.innerText = 'Added To Bag!'
  }, 1000)
}

export default loadingBtn