// pause for page load


// declare global variable hand arrays
var playerHand = [];
var dealerHand = [];
var nextCard = [];
var playerBlackjack = false;

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
  document.getElementById("player-score").innerText = 0;
  document.getElementById("dealer-score").innerText = 0;
  newHand();
}
let startGame = document.getElementById("new-game");
startGame.addEventListener('click', newGame);

// clears cards from table, resets hand arrays and displays buttons for placing stakes
function newHand() {
  playerHand.length = 0;
  dealerHand.length = 0;
  nextCard.length = 0;

// clears cards from table. code adapted from https://javascript.plainenglish.io/how-to-remove-html-elements-by-class-name-b0288988dd55  
  const clear = document.querySelectorAll('.card')
for (const el of clear) {
  el.parentNode.removeChild(el);
}
  document.getElementById("message-box").textContent = "Place your bet";
  document.getElementById("chip-buttons").style.display = "block";
  
  placeBet();
};

function placeBet() {
  let dealbutton = document.getElementById("deal");
  let addchip = document.getElementById("addchip");
  let removechip = document.getElementById("removechip");

  dealbutton.addEventListener("click", newDeal);
  addchip.addEventListener("click", incrementStake);
  removechip.addEventListener("click", reduceStake);
}


// staking buttons and event listener

// function placeBet() {
// let buttons = document.getElementsByClassName("chipbtn");
//   for (let button of buttons) {
//     button.addEventListener("click", function() {
//       let oldBank = parseInt(document.getElementById("cashbox").innerText);
//       let oldStake = parseInt(document.getElementById("stakebox").innerText);
//       if (this.getAttribute("data-type") === "addchips" && oldBank >= 1) {
//         incrementStake();
//     } else if (this.getAttribute("data-type") === "addchips" && oldBank < 1) { 
//       alert("Bankroll too low!");
//     } else if (this.getAttribute("data-type") === "subtractchips" && oldStake >= 1) {
//         reduceStake();
//     } else if (this.getAttribute("data-type") === "deal" && oldStake >= 1) {
//         newDeal();
//     } else {
//       alert("Minimum Stake is 1");
//     }
//   });
// }
// }



function incrementStake() {

  let oldStake = parseInt(document.getElementById("stakebox").innerText);
  let oldBank = parseInt(document.getElementById("cashbox").innerText);  

  if( oldBank >= 1) { 
  document.getElementById("cashbox").innerText = --oldBank;
  document.getElementById("stakebox").innerText = ++oldStake;
  } else {
    alert("Bankroll too low!");
  }
};

function reduceStake() {

  let oldStake = parseInt(document.getElementById("stakebox").innerText);
  let oldBank = parseInt(document.getElementById("cashbox").innerText)  
  if ( oldStake > 1) {
    document.getElementById("cashbox").innerText = ++oldBank;
    document.getElementById("stakebox").innerText = --oldStake;
  } else {
    alert("minimum stake is 1");
  }
};

function newDeal() {
  let oldStake = parseInt(document.getElementById("stakebox").innerText);
  if (oldStake >= 1) {
  document.getElementById("message-box").textContent = "";
  document.getElementById("chip-buttons").style.display = "none";
  playerCard();
  playerCard();
  } else {
    alert("minimum stake is 1");
  }
};

function playerCard() {
  newCard();
  let playerContainer = document.getElementById('player-cards');
    let playerCard = document.createElement('div');
    playerCard.classList.add("card");
    playerContainer.appendChild(playerCard).innerText = nextCard.face;
    playerHand.push(nextCard.value);
    let sum = playerHand.reduce((accumulator, current) => accumulator + current);
    document.getElementById("player-score").innerText = sum;

  if (dealerHand.length < 1) {
    dealerCard();
  } else if ( sum === 21 && playerHand.length === 2 ) {
    playerBlackjack = true;
    dealerTurn();
  } else if ( sum > 21 && playerHand.includes(11)) {
    changeAce();
  } else if ( sum > 21) {
    playerBust();
  } else {
    playerTurn();
  }
}


function dealerCard() {
  newCard();

  let playerContainer = document.getElementById('dealer-cards');
    let playerCard = document.createElement('div');
    playerCard.classList.add("card");
    playerContainer.appendChild(playerCard).innerText = nextCard.face;
    dealerHand.push(nextCard.value);
    let sum = dealerHand.reduce((accumulator, current) => accumulator + current);
    document.getElementById("dealer-score").innerText = sum;
   
}
function playerTurn() {
  document.getElementById("player-buttons").style.display = "block";
let extracard = document.getElementById("hit");
let endturn = document.getElementById("stand");

extracard.addEventListener("click", playerCard);
endturn.addEventListener("click", dealerTurn);
}

// function playerTurn() {
//     document.getElementById("player-buttons").style.display = "block";
//     let buttons = document.getElementsByClassName("playerbtn");
//     for (let button of buttons) {
//     button.addEventListener("click", function() {
//       if (this.getAttribute("data-type") === "hit") {
//         playerCard();
//     } else if (this.getAttribute("data-type") === "stand") {
//       dealerTurn();
//     }
//     })
//   }
// }

function dealerTurn() {

}

// card array and random card generator

function newCard() {
  nextCard.length = 0;
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

 let randNum = Math.floor(Math.random() * 13);

  nextCard = cards[randNum];
}