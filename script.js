const quote = document.querySelector(".wrapper p");
const btn = document.querySelector("button");
const author = document.querySelector(".author")
const API_KEY = 'IxFRBPYtj8/LwpLwMFJifQ==He0MYCj0RKqoxS0s';

const url = `https://api.quotable.io/random`;

function getQuote() {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerHTML = item.content;
      author.innerHTML = item.author
    });
}

btn.addEventListener("click", () => {
  getQuote()
});

getQuote()