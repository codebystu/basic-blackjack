// pause for page load

// declare global variable hand arrays
var playerHand = [];
var dealerHand = [];
var nextCard = [];

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
  let displayBank = document.getElementById("cashbox");
  displayBank.textContent = 100;
  let displayStake = document.getElementById("stakebox");
  displayStake.textContent = 0;
  document.getElementById("player-buttons").style.display = "none";
  newHand();
}
let startGame = document.getElementById("new-game");
startGame.addEventListener('click', newGame);

// clears cards from table, resets hand arrays and displays buttons for placing stakes
function newHand() {
  playerHand.length = 0;
  dealerHand.length = 0;

// clears cards from table. code adapted from https://javascript.plainenglish.io/how-to-remove-html-elements-by-class-name-b0288988dd55  
  const clear = document.querySelectorAll('.card')
for (const el of clear) {
  el.parentNode.removeChild(el);
}
  document.getElementById("message-box").textContent = "Place your bet";
  document.getElementById("chip-buttons").style.display = "block";
  
  placeBet();
};

// staking buttons and event listener

function placeBet() {
 
let buttons = document.getElementsByClassName("chipbtn");


  for (let button of buttons) {
    button.addEventListener("click", function() {
      let oldBank = parseInt(document.getElementById("cashbox").innerText);
      let oldStake = parseInt(document.getElementById("stakebox").innerText);
      if (this.getAttribute("data-type") === "addchips" && oldBank >= 1) {
        incrementStake();
    } else if (this.getAttribute("data-type") === "addchips" && oldBank < 1) { 
      alert("Bankroll too low!")
    } else if (this.getAttribute("data-type") === "subtractchips" && oldStake >= 1) {
        reduceStake();
    } else if (this.getAttribute("data-type") === "deal" && oldStake >= 1) {
        newDeal();
    } else {
      alert("Minimum Stake is 1")
    }
  })
  }
};

function incrementStake() {

  let oldStake = parseInt(document.getElementById("stakebox").innerText);
    document.getElementById("stakebox").innerText = ++oldStake;

  let oldBank = parseInt(document.getElementById("cashbox").innerText)  
  document.getElementById("cashbox").innerText = --oldBank;
};

function reduceStake() {

  let oldStake = parseInt(document.getElementById("stakebox").innerText);
    document.getElementById("stakebox").innerText = --oldStake;

    let oldBank = parseInt(document.getElementById("cashbox").innerText)  
    document.getElementById("cashbox").innerText = ++oldBank;
};

function newDeal() {
  document.getElementById("message-box").textContent = "";
  document.getElementById("chip-buttons").style.display = "none";
  playerCard();
  dealerCard();
  playerCard();
  playerTurn();
};

function playerCard() {
  newCard();

  let playerContainer = document.getElementById('player-cards');
    let playerCard = document.createElement('div');
    playerCard.classList.add("card");
    playerContainer.appendChild(playerCard).innerText = nextCard.face;
    playerHand.push(nextCard.value);
    console.log(playerHand);
    nextCard.length = 0;
}


function dealerCard() {
  newCard();

  let playerContainer = document.getElementById('dealer-cards');
    let playerCard = document.createElement('div');
    playerCard.classList.add("card");
    playerContainer.appendChild(playerCard).innerText = nextCard.face;
    dealerHand.push(nextCard.value);
    console.log(dealerHand);
    nextCard.length = 0;
}

function playerTurn() {
  document.getElementById("player-buttons").style.display = "block";
  console.log("your move")
}

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

  nextCard = cards[randNum];

}


// initial deal write to DOM







// player turn, buttons, event listener, hand calculation, add card to DOM, messaging

// dealer turn, hand calculation, add card to DOM, hand comparison, messaging

// update bank

// loop back to newHand()