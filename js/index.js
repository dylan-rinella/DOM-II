// Your code goes here
const html = document.querySelector('html')

const busPic = document.querySelector('header img')

busPic.addEventListener('click', (event) =>{
  event.target.style.border = 'solid red';
})

const logoHeading = document.querySelector('.logo-heading')

logoHeading.addEventListener('click', (event) => {
  event.target.style.color = 'orange'
})

const backgroundColorSwap = document.querySelector('body');

backgroundColorSwap.addEventListener('click', (event) => {
  event.target.style.color = 'green'
})

document.addEventListener('keydown', function(event){
  if(event.key === 'Escape'){
    backgroundColorSwap.style.color = 'purple'
  }
})

document.addEventListener('keydown', function(event){
  if(event.key === '~'){
    html.style.border = 'solid green'
  }
})