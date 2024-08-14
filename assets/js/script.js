// declare global variable hand arrays
var playerHand = [];
var dealerHand = [];
var nextCard = [];
var playerBlackjack = false;
var dealerBlackjack = false;

/** open game rules */
function openRules() {
    document.getElementById("rules").style.display = "block";
  }
  let open = document.getElementById("open-rules");
    open.addEventListener('click', openRules);

/** close game rules */
function closeRules() {
    document.getElementById("rules").style.display = "none";
  }
let close = document.getElementById("close-rules");
    close.addEventListener('click', closeRules);

/** New game button and initialise game */
function newGame() {
  let displayBank = document.getElementById("cashbox");
  displayBank.textContent = 20;
  let displayStake = document.getElementById("stakebox");
  displayStake.textContent = 0;
  document.getElementById("player-buttons").style.display = "none";
  document.getElementById("player-score").innerText = 0;
  document.getElementById("dealer-score").innerText = 0;
  newHand();
}
let startGame = document.getElementById("new-game");
startGame.addEventListener('click', newGame);

/** clears cards from table, resets hand arrays and displays buttons for placing stakes*/
function newHand() {
  playerBlackjack = false;
  dealerBlackjack = false;
  playerHand.length = 0;
  dealerHand.length = 0;
  nextCard.length = 0;
  document.getElementById("stakebox").innerText = 0;
  clearCards();
}
/** clears cards from table. then displays staking buttons and prompts player with message
 * code adapted from
 * https://javascript.plainenglish.io/how-to-remove-html-elements-by-class-name-b0288988dd55 */
function clearCards() {
  let clear = document.querySelectorAll('.card');
  for (let el of clear) {
  el.parentNode.removeChild(el);
  }
  document.getElementById("message-box").textContent = "Place your bet";
  document.getElementById("chip-buttons").style.display = "block";
  placeBet();
}

/** Handles player choice of button */
function placeBet() {
  let dealbutton = document.getElementById("deal");
  let addchip = document.getElementById("addchip");
  let removechip = document.getElementById("removechip");

  dealbutton.addEventListener("click", newDeal);
  addchip.addEventListener("click", incrementStake);
  removechip.addEventListener("click", reduceStake);
}

/** increments stake and reduces bank */
function incrementStake() {
  let oldStake = parseInt(document.getElementById("stakebox").innerText);
  let oldBank = parseInt(document.getElementById("cashbox").innerText);
  if( oldBank >= 1) {
    document.getElementById("cashbox").innerText = --oldBank;
    document.getElementById("stakebox").innerText = ++oldStake;
  } else {
    alert("Bankroll too low!");
  }
}

/** reduces stake and increments bank */
function reduceStake() {
  let oldStake = parseInt(document.getElementById("stakebox").innerText);
  let oldBank = parseInt(document.getElementById("cashbox").innerText);
  if ( oldStake > 1) {
    document.getElementById("cashbox").innerText = ++oldBank;
    document.getElementById("stakebox").innerText = --oldStake;
  } else {
    alert("minimum stake is 1");
  }
}

/** checks stake has been made and calls functions for initial deal */
function newDeal() {
  let oldStake = parseInt(document.getElementById("stakebox").innerText);
  if (oldStake >= 1) {
    document.getElementById("message-box").textContent = "";
    document.getElementById("chip-buttons").style.display = "none";
    playerCard();
  } else {
    alert("minimum stake is 1");
  }
}

/** Adds player card and handles result */
function playerCard() {
  newCard();
    let playerContainer = document.getElementById('player-cards');
    let playerCard = document.createElement('div');
    playerCard.classList.add("card");
    playerContainer.appendChild(playerCard).innerText = nextCard.face;
    playerHand.push(nextCard.value);
    let sum = playerHand.reduce((accumulator, current) => accumulator + current);
    if (playerHand.includes(11) && sum < 21) {
      document.getElementById("player-score").innerText = `${sum - 10} / ${sum}`;
    } else {
      document.getElementById("player-score").innerText = sum;
    }
    if (dealerHand.length < 1) {
      setTimeout(dealerCard, 500);
    } else if ( sum > 21 && playerHand.includes(11)) {
      changeAce();
    } else if ( sum > 21) {
      playerBust();
    } else if ( sum === 21) {
      dealerTurn();
    } else {
      playerTurn();
    }
}

/** Adds the second card to player hand */
function playerSecondcard() {
  newCard();
  let playerContainer = document.getElementById('player-cards');
  let playerCard = document.createElement('div');
  playerCard.classList.add("card");
  playerContainer.appendChild(playerCard).innerText = nextCard.face;
  playerHand.push(nextCard.value);
  let sum = playerHand.reduce((accumulator, current) => accumulator + current);
  if ( sum === 22 ) {
    changeAce();
  } else if (playerHand.includes(11) && sum < 21) {
    document.getElementById("player-score").innerText = `${sum - 10} / ${sum}`;
    playerTurn();
  } else if (sum != 21) {
    document.getElementById("player-score").innerText = sum;
    playerTurn();
  } else {
    document.getElementById("player-score").innerText = sum;
    document.getElementById("message-box").innerText = "Blackjack!";
    playerBlackjack = true;
    setTimeout(dealerTurn, 2000);
  }
}
/** Handles player Ace value of 1/11 */
function changeAce(){
  let index = playerHand.indexOf(11);
  playerHand.splice(index, 1);
  playerHand.push(1);
  let sum = playerHand.reduce((accumulator, current) => accumulator + current);
  document.getElementById("player-score").innerText = sum;
  playerTurn();
}

/** displays message when player bust */
function playerBust() {
  document.getElementById("player-buttons").style.display = "none";
  document.getElementById("message-box").textContent = "Bust!";
  setTimeout(youLose, 2000);
}

/** resets stake value after losing hand and calls newHand function */
function youLose() {
  let loss = document.getElementById("stakebox").innerText;
  document.getElementById("message-box").innerText = `You lost ${loss}`;
  let bank = document.getElementById("cashbox").innerText;
  if (bank >= 1){
  setTimeout(newHand, 2000);
  } else {
  alert("You lost all your chips");
  }
}

/** Adds card to dealer hand and handles result */
function dealerCard() {
  newCard();
  let playerContainer = document.getElementById('dealer-cards');
  let playerCard = document.createElement('div');
  playerCard.classList.add("card");
  playerContainer.appendChild(playerCard).innerText = nextCard.face;
  dealerHand.push(nextCard.value);
  let sum = dealerHand.reduce((accumulator, current) => accumulator + current);
  document.getElementById("dealer-score").innerText = sum;
  if (dealerHand.includes(11) && sum <= 16) {
    document.getElementById("dealer-score").innerText = `${sum - 10} / ${sum}`;
  } else {
  document.getElementById("dealer-score").innerText = sum;
  }
  if (playerHand.length === 1) {
    setTimeout(playerSecondcard, 500);
  } else if (dealerHand.includes(11) && sum >= 22) {
    dealerAce();
  }else if (sum > 21) {
    dealerBust();
  } else if (sum >= 17 && sum <= 21) {
    setTimeout(compareHands, 500);
  } else {
    dealerTurn();
  }
}

/** Adds the second card to dealer hand */
function dealerSecondcard() {
  newCard();
    let playerContainer = document.getElementById('dealer-cards');
    let playerCard = document.createElement('div');
    playerCard.classList.add("card");
    playerContainer.appendChild(playerCard).innerText = nextCard.face;
    dealerHand.push(nextCard.value);
    let sum = dealerHand.reduce((accumulator, current) => accumulator + current);
    document.getElementById("dealer-score").innerText = sum;
    if (sum === 22) {
    dealerAce();
    } else if (sum <= 16) {
    setTimeout(dealerTurn, 500);
    } else if (sum >= 17 && sum <= 20) {
    setTimeout(compareHands, 1000);
    } else {
    dealerBlackjack = true;
    document.getElementById("message-box").innerText = "dealer Blackjack!";
    setTimeout(compareHands, 1000);
    }
}

/** Handles dealer Ace value of 1/11 */
function dealerAce(){
  let index = dealerHand.indexOf(11);
  dealerHand.splice(index, 1);
  dealerHand.push(1);
  let sum = dealerHand.reduce((accumulator, current) => accumulator + current);
  document.getElementById("dealer-score").innerText = sum;
  dealerTurn();
}

/** displays message when dealer bust */
function dealerBust() {
  document.getElementById("message-box").textContent = "Dealer Bust!";
  setTimeout(youWin, 2000);
}

/** compares final hands and calls corresponding function */
function compareHands() {
  let player = document.getElementById("player-score").innerText;
  let dealer = document.getElementById("dealer-score").innerText;
  if (playerBlackjack === true && dealerBlackjack === false) {
  youWin();
  } else if (playerBlackjack === false && dealerBlackjack === true) {
  youLose();
  } else if (playerBlackjack === true && dealerBlackjack === true) {
  resultPush();
  } else if (player > dealer) {
  youWin();
  } else if (player < dealer) {
  youLose();
  } else {
  resultPush();
  }
}

/** displays win message and adds winnings to bankroll */
function youWin() {
  let playerReturn = 0;
  let stake = document.getElementById("stakebox").innerText;
  if (playerBlackjack === true) {
  playerReturn = stake * 3;
  } else {
  playerReturn = stake *2;
  }
  document.getElementById("message-box").innerText = `You Win ${playerReturn}`;
  setTimeout(addtoBank, 1000);
}

/** displays message for push (draw) and returns stake to bankroll and calls new hand*/
function resultPush() {
  document.getElementById("message-box").innerText = "Push, stake returned";
  let stake = parseInt(document.getElementById("stakebox").innerText);
  let oldBank = parseInt(document.getElementById("cashbox").innerText);
  document.getElementById("cashbox").innerText = oldBank + stake;
  setTimeout(newHand, 2000);
}

/** adds winnings to bankroll and calls new hand */
function addtoBank() {
  let playerReturn = 0;
  let stake = document.getElementById("stakebox").innerText;
  if (playerBlackjack === true) {
  playerReturn = stake * 3;
  } else {
  playerReturn = stake *2;
  }
  let oldBank = parseInt(document.getElementById("cashbox").innerText);
  document.getElementById("cashbox").innerText = oldBank + playerReturn;
  setTimeout(newHand, 2000);
}

/** handles player choice on extra card or stand */
function playerTurn() {
  document.getElementById("player-buttons").style.display = "block";
  let extracard = document.getElementById("hit");
  let endturn = document.getElementById("stand");

  extracard.addEventListener("click", playerCard);
  endturn.addEventListener("click", dealerTurn);
}

/** Handles player blackjack comparison and calls more dealer cards */
function dealerTurn() {
  document.getElementById("player-buttons").style.display = "none";
  let sum = playerHand.reduce((accumulator, current) => accumulator + current);
  document.getElementById("player-score").innerText = sum;
  if (dealerHand.length === 1) {
  setTimeout(dealerSecondcard, 500);
  } else if (playerBlackjack === true && dealerHand.length === 2) {
  setTimeout(compareHands, 1000);
  } else {
  setTimeout(dealerCard, 500);
  }
}


/** creates new card by using random number to index the array */
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