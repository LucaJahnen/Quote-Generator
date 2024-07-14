const button = document.querySelector(".dice-bg");
const dice = document.querySelector(".dice");
const quoteElement = document.querySelector(".quote");
const counter = document.querySelector(".counter");

const API_URL = "https://api.adviceslip.com/advice";

const quotes = async () => {
  const url = "https://api.adviceslip.com/advice";
  fetch(url).then(response => {
    if(!response.ok) {
      throw new Error(response.status)
    }
    return response.json()
  }).then(data => {
    quoteElement.innerText = '"' + data.slip.advice + '"'
    counter.innerText = data.slip.id
  }).catch(error => {
    console.log(error)
  })
}
quotes()

const tween = gsap.to(".dice", {
  rotate: '360deg',
  duration: 1,
  ease: 'back.out'
})

let hide = gsap.set(".counter", {
  opacity: 0
})
let show = gsap.to(".counter", {
  opacity: 1
})
  
let enabled = true;
button.addEventListener("click", function() {
  if(enabled) {
    hide.restart();
    quotes()
    tween.restart();
    show.restart();
  }
  enabled = false;
}) 

function enable() {
  enabled = true;
} 

setInterval(enable, 3000);