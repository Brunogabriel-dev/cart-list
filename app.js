let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');

let listProducts = [];

iconCart.addEventListener('click', () => {
  body.classList.toggle('showCart')
})
closeCart.addEventListener('click', () => {
  body.classList.toggle('showCart')
})


const initApp = () => {
  // get data from json
  fetch('products.json')
  .then(response => response.json())
  .then(data => {
    listProducts = data;

    console.log(listProducts);
  })
}
initApp();