// pause for page load

// How to play show and hide
function openRules() {
    document.getElementById("rules").style.display = "block";
  }
  let open = document.getElementById("open-rules");
    open.addEventListener('click', openRules);
  
  
  function closeRules() {
    document.getElementById("rules").style.display = "none";
  }
  let close = document.getElementById("close-rules"); 
    close.addEventListener('click', closeRules);

// New game button and initialise game
function newGame() {
  var bankValue = 100;
  let displayBank = document.getElementById("cashbox");
  displayBank.textContent = bankValue;
  newHand();
}
let startGame = document.getElementById("new-game");
startGame.addEventListener('click', newGame);

// clears cards from table, restes hand arrays and displays buttons for placing stakes
function newHand() {
  var playerHand = [];
  var dealerHand = [];

// clears cards from table. code adapted from https://javascript.plainenglish.io/how-to-remove-html-elements-by-class-name-b0288988dd55  
  const clear = document.querySelectorAll('.card')
for (const el of clear) {
  el.parentNode.removeChild(el);
}
  document.getElementById("message-box").textContent = "Place your bet";
  document.getElementById("chip-buttons").style.display = "block";


}

// deal button and event listener

// card array and random card generator

function newCard() {
  const cards = [
    {face: '2', value: 2},
	  {face: '3', value: 3},
    {face: '4', value: 4},
    {face: '5', value: 5},
    {face: '6', value: 6},
    {face: '7', value: 7},
    {face: '8', value: 8},
    {face: '9', value: 9},
    {face: '10', value: 10},
    {face: 'J', value: 10},
    {face: 'Q', value: 10},
    {face: 'K', value: 10},
    {face: 'A', value: 11},
  ];

 let randNum = Math.floor(Math.random() * 12);

 let card = cards[randNum];

 console.log(card.face);
}


// initial deal write to DOM

// player turn, buttons, event listener, hand calculation, add card to DOM, messaging

// dealer turn, hand calculation, add card to DOM, hand comparison, messaging

// update bank

// loop back to stake placing