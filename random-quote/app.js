let btn = document.getElementById("random");
let quoteText = document.getElementById("quote");
let authortext = document.getElementById("author");

// Creating an array with quotes and authors
let quotes = [
  ['"Життя – як коробка шоколадних цукерок. Ніколи не знаєш, що всередині."','Форест Гамп'],
  ['"Їсти подано, сідайте жерти, будь ласка!"', 'Джентельмени удачі'],
  ['"Якщо умієш щось, не роби цього безкоштовно."', 'The Dark Knight'],
  ['"Час, втрачений із задоволенням, не вважається втраченим."', 'Джон Леннон'],
  ['"Я більше не беру участь у війнах. Я спостерігаю за бджілками."', 'Надприродне'],
  ['"Подорожуй тільки з тими, кого любиш."', 'Ернест Хумінгуей'],
  ['"Все можна пережити, якщо підібрати потрібну пісню."', 'Курт Кобейн'],
  ['"Краса в очах того, хто дивиться."', 'Оскар Уальд'],
  ['"Серце матері – глибока прірва, на дні якої ви завжди знайдете прощення."', 'Оноре де Бальзак']
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

