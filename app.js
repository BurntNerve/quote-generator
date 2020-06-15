"use strict";

import quoteClient from "./quoteClient";

quoteClient.init().then(appendNewQuote);

var newQuoteButton = document.querySelector("#new-quote");
var quoteText = document.querySelector("#text");
var quoteAuthor = document.querySelector("#author");
var tweetQuoteButton = document.querySelector("#tweet-quote");

var currentQuote = "";

newQuoteButton.addEventListener("click", appendNewQuote);
tweetQuoteButton.addEventListener("click", tweetQuote);

// FUNCTIONS ------------------------------------------

function appendNewQuote() {
  currentQuote = quoteClient.getNewQuote();
  quoteText.textContent = `"${currentQuote.text}"`;
  quoteAuthor.textContent = `- ${currentQuote.author || "Anonymous"}`;
}

function tweetQuote() {
  tweetQuoteButton.setAttribute(
    "href",
    `https://twitter.com/intent/tweet?text=${currentQuote.text}`
  );
  return false;
}
