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
}
let startGame = document.getElementById("new-game");
startGame.addEventListener('click', newGame);

// stake placing inc comparison with bank

// deal button and event listener

// card array and random card generator

// initial deal write to DOM

// player turn, buttons, event listener, hand calculation, add card to DOM, messaging

// dealer turn, hand calculation, add card to DOM, hand comparison, messaging

// update bank

// loop back to stake placing