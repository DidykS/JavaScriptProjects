let btn = document.getElementById("random");
let quoteText = document.getElementById("quote");
let authortext = document.getElementById("author");

// Creating an array with quotes and authors
let quotes = [
  ['“Never let the fear of striking out keep you from playing the game.”','Babe Ruth'],
  ['“Money and success don’t change people; they merely amplify what is already there.”', 'Will Smith'],
  ['“Get busy living or get busy dying.”', 'Stephen King'],
  ['“Life is what happens when you’re busy making other plans.”', 'John Lennon'],
  ['“Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.”', 'Steve Jobs'],
  ['“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”', ' Henry Ford'],
  ['“Live for each second without hesitation.”', ' Elton John'],
  ['“Life would be tragic if it weren’t funny.”', 'Stephen Hawking'],
  ['“I believe every human has a finite number of heartbeats. I don’t intend to waste any of mine.”', 'Neil Armstrong ']
]

// The listener hung a click on the button
btn.addEventListener("click", getQuote)

// Function getQuote
// In this function, I randomly select a quote from the array and the author's name and add it to the page.
function getQuote() {
  let random = Math.floor(Math.random() * quotes.length + 1)
  
  quoteText.innerHTML = quotes[random][0]
  authortext.innerHTML = "-" + quotes[random][1]
}

