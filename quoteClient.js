var quoteClient = {
  PROXY_URL: "https://cors-anywhere.herokuapp.com/",
  QUOTE_URL: "https://type.fit/api/quotes",
  quotes: [],
  init: function getRandomQuote() {
    return fetch(this.PROXY_URL + this.QUOTE_URL)
      .then((response) => response.json())
      .then((quotes) => (this.quotes = quotes));
  },
  getNewQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  },
};

export default quoteClient;
