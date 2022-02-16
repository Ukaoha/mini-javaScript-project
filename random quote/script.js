"use strict";
const displayQuotes = document.querySelector(".quote_display");
const backgroundColor = document.querySelector("body");
const btnQuote = document.querySelector(".btn--quote");
let quotes = [
  '"If you want to achieve greatness stop asking for permission." --Anonymous',
  ' "Things work out best for those who make the best of how things work out." --John Wooden',
  ' "To live a creative life, we must lose our fear of being wrong." --Anonymous',
  ' "If you are not willing to risk the usual you will have to settle for the ordinary." --Jim Rohn',
  ' "Trust because you are willing to accept the risk, not because it\'s safe or certain." --Anonymous',
  ' "Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success." --Swami Vivekananda',
  ' "All our dreams can come true if we have the courage to pursue them." --Walt Disney',
  '"Good things come to people who wait, but better things come to those who go out and get them." --Anonymous',
  ' "If you do what you always did, you will get what you always got." --Anonymous',
  ' "Success is walking from failure to failure with no loss of enthusiasm." --Winston Churchill',
];

btnQuote.addEventListener("click", function () {
  const randomQuotes = Math.floor(Math.random() * quotes.length);
  displayQuotes.textContent = quotes[randomQuotes];
  backgroundColor.style.backgroundColor = randomColors();
});
function randomColors() {
  const randomColors = "#" + Math.trunc(Math.random() * 16777215).toString(16);
  return randomColors;
} b 
