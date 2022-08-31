const button = document.querySelector(".dice-bg");
const dice = document.querySelector(".dice");
const quoteP = document.querySelector(".quote");

const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
    return fetch(url).then(resp => resp.json())
}

const API = { get }

function getQuotes() {
    API.get(API_URL).then(data => addQuote(data['slip']['advice']))
}

function addQuote(quote) {
    quoteP.innerText = '"' + quote + '"';
}

const counter = document.querySelector(".counter");

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

let count = 0;

function countQuotes() {
    count++;
    counter.textContent = count;
  }
  
let enabled = true;

button.addEventListener("click", function() {
  if(enabled === true) {
    hide.restart();
    getQuotes();
    tween.restart();
    countQuotes();
    show.restart();
  }
  enabled = false;
}) 

function enable() {
  enabled = true;
} 

setInterval(enable, 3000);
 
 window.addEventListener("load", setUp, true);
 
 function setUp() {
   countQuotes();
   getQuotes();
 }