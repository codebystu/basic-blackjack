# Basic Blackjack
This is an interactive front end website using HTML CSS and Javascript, it is a basic blackjack game simulator where a single player takes on a computer controlled dealer and tries to increase their bankroll by betting on the outcome of the hand and deciding whether to stand on their current hand or hit and take an additional card in an attempt to be closer to a score of 21, without going over.
The live site can be found [here](https://codebystu.github.io/basic-blackjack/)

![Responsive Mockup](documents/responsive.png)
## UX

### Colour Scheme
The starting point for the colour scheme choice was the green beize type color, reminiscent of a card table in a casino, i selected this from the colour picker on [color space](https://mycolor.space/) and fed that colour through the pallette generator on the same site, then chose the switch pallette from the suggestions and used the blue for the header, footer and rules overlay.  For maximum contrast all text is in either black or white. ![Colour Pallette](documents/colourpallette.png).

### Typography

I used [Google Fonts](https://fonts.google.com/) to select "Oswald" as the main font, this was an homage to my grandfather who taught me to play blackjack when I was a kid. For the card faces I wanted something similar but chunkier in appearance and settled on Bebas Neue, I also used this font to create the favicon.


### User Stories
1.  First time visitors and users who don't know how to play blackjack, will want to be informed of the rules and how to play, they may wish to refer back to the rules during gameplay to check on something they have forgotten or do not understand
2.   Users will want to be able to start a new game, with all parameters reset to the initial state of gameplay at any time.
3.   Users will want to see a prompt message at key points in the development of a round, so that they know either what they need to do, or what the resulting outcome of gameplay is.
4.   Users will need to be able to see their current bankroll number to assess the level of stake they can afford, they will want to be able to see their current level of stake and to be able to increase and decrease their stake as they wish.
5.   Users will need to be able to initiate the dealing of the cards once they are happy with their level of stake.
6.   If the user fails to select a stake or tries to stake more than they have in their bankroll, they need to be informed of the error, so they can change their course of action.
7.   During the card dealing phase the user will want to see the cards revealed one at a time as this adds anticipation and excitement to the game,
8.   The user will want to see a numerical display of their score, which accounts for the value of non numerical cards (J,Q,K,A) and will need to see the variable score with the A representing a value of either 1 or 11, this will aid in the decision of whether or not to "hit" and take an extra card.
9.   Users will want to choose the point at which they end their turn.
10.   During the dealers turn phase of the game users will want to see the cards play out one at a time and the dealers score to increment accordingly.
11.   At the point where the dealer hand reaches its end the user will want to receive messaging as to the outcome of the hand, whether they have won or lost and also the amount they have won or lost.
12.   At the end of the hand users will expect their bankroll to be updated if they have won and prompted to play another hand.
13.   If the user misses the final win/push/lose messaging for any reason (such as if they are playing whilst doing something else) thay may still wish to know if they won or lost the previous hand.
14.   When the player has no funds left in their bankroll, they will need to receive a message that they have lost all their money.
15.   As the creator of the site, I want to be able to play blackjack without annoying adverts intruding on gameplay which you get on all commercially available apps.
    

### Original wireframe design
The simple gameplay area is small enough that it will not require any change for smaller screens apart from text size.
![visual wireframe](documents/bbjscreenwire.png)
![javascript functions wireframe](documents/jsmodelwire.png)

## Features
### Existing Features
- Header
    - The header bar features the logo on the left hand side and the How To Play button on the right. When the logo is clicked this reloads the page. when the user hovers over the how to play button, the background turns white amd the text turns black to alert the user that it is a clickable button. On clicking the button, the rules of the game are displayed to inform the user how to play. 
![how to play](documents/headerbar.png)
- Rules overlay
    - The rules overlay is displayed at the discretion of the user, it can be accessed at any time and does not effect gameplay.  It describes the objective of the game and what the user must do to play through the different phases of the game.
    At the end of the text is the close button. When the user hovers over it the button reacts in the same way as the How To Play button in the header for consistency and usability. When clicked, it closes the rules overlay so the user can continue on their gameplay.
![rules overlay](documents/rules.png)
- Gameboard
    - The gameboard is the main part of index.html and is visible upon loading the webpage. It shows the features which are always visible, Dealer Score, Player Score, Current Stake amount (this isn't labelled and simply shows 0), Bankroll and the New Game button.
    It also shows 2 cards below the dealer score and 2 above the player score, both hands of cards show a 10 and an Ace which represents a score of Blackjack (21 in 2 cards). Showing this layout upon load makes the page quite intuitive.  Anyone who has played blackjack will online or at a live table will recognise this layout and understand what the sections represent.  The only clickable button in the game area at this phase is the New Game button at the bottom. When the user hovers over it turns blue to highlight that it is clickable.  Upon clicking the user is taken to the staking phase of the game.
![gameboard](documents/gameboard.png)
- Staking game phase
    - After pressing the new game button the cards from the previous hand are cleared from the table, a message is displayed beneath PLayer Score, prompting the user to "Place your bet" the 3 stake selection buttons appear beneath the stake-box and the bankroll is credited with an initial amount of 20. THe buttons all highlight in blue when the user hovers over them, + and - will increment the stake up and down by 1 at a time on each click and have the inverse effect on bankroll i.e stake increases by 1 and bankroll decreases by 1.  If the user has selected a stake and clicks on the Deal button they will be taken to the initial deal phase of the game.

![staking](documents/placebet.png)
![increment stake](documents/incrementstake.png)
- Player warning alerts
    - THere are two alerts in the staking phase which are triggered if the user tries to do something which prevents them from moving through the game.  If the user tries to reduce stake below 1 or clicks deasl without selecting a stake, the minimum stake alert is shown.  If the user tries to increase their stake to a higher amount than their bankroll, the bankroll too low alert is triggered.

![minimum stake alert](documents/minimumstake.png)
![bankroll low alert](documents/bankrolltoolow.png)
- Initial deal screen
    - Once Deal has been correctly the staking buttons disappear, two cards are dealt to the player and one to the dealer.  The dealer and player score values are calculated and displayed iun the corresponding areas on the screen, and the player buttons Hit and Stand are displayed where the staking buttons used to be.  The buttons highlight blue when hovered, in keeping with all the gameplay buttons. clicking Hit will add another card to the player hand, the player can hit as many times as they like until they go over a score of 21, which will automatically end the hand and they will lose their stake.

![initial deal](documents/initialdeal.png)
-   Handling Aces
    - The Ace card has an interchangable value of 1 or 11, unless a value of 11 will result in a hand value over 21, in which case it only has a value of 1. When a player has an ace and the value is interchangable they are shown both potential scores i.e. 7 / 17. This reverts to a single score when a value of 11 would result in the hand going bust.  For the dealer an ace will only show an interchangable value between 1 and 16 as any score between 17 and 21 automatically ends the dealer turn and the result is calculated.
![player ace](documents/playerace.png)
![Ace Value 1](documents/acerevalue.png)
![Dealer Ace](documents/dealerace.png)

- Automated Gameplay
    - In this video you can see a single hand being played. Note how the cards are dealt one at a time to add that sense of anticipation to the game, and the messaging that appears temporarily below Player Score to inform the player of the outcome of the hand.  There are a number of messages which display in this area depending on how the cards play out.  They are "Blackjack" when player gets blackjack, "Dealer blackjack" when dealer gets blackjack. "Bust" and "Dealer Bust" when either player or dealer goes over 21. When the end result is calcualted the message box will display either "you win" with amount won "you lost" with amount lost or "Push, stake rerturned" in the event of a draw. if the user won or if it was a draw the bankroll is increased accordingly after this message.  After a short delay the game cycles back to the new hand phase, the cards are cleared from the table, the "place your bet" prompt displays and the staking buttons reappear

https://github.com/user-attachments/assets/606d7e39-f08d-4086-b4ec-5b8b30bc827d

- After hand information
    - When the game cycles round and automatically starts the next hand the Dealer and Player scores from the previous hand are retained until the player has set stake and clicked Deal.  The reason for this is that in the busy world we live in people often play minigames like this whilst doing something else.  The end game messaging is only displayed for a couple of seconds and would be quite easy to miss if you are distracted for a brief moment. In the below example the player would know that they lost the previous hand.
![post play](documents/postplay.png)
- End game
    -   When the player loses all of their bankroll the game ends at the end of that hand and the "You lost all your chips" alert is displayed. On clearing the alert, the only button available to the user is "New Game"
![You lost](documents/youlost.png)
- Footer
    - The page footer contains a link to the site owners github page, it opens in a new window and allows the user to see more of the site owners work
![footer](documents/footer.png)
- Custom 404 page
    - This feature gives an error message on a page styled in the theme of the rest of the site, with a link to get the user back to the main landing page. Useful to users who follow a broken link or if they encounter some other error, they can get back to the main site easily.
![404 page](documents/404page.png)
### Features Left To Implement
-   Future features
    - Users may like the ability to increment their stake by more than 1 at a time, chip buttons with values of 1,2 5, and 10 are common in similar games.
    - users may wish to bet all of their bankroll at a single click, an "All In"
     button could be created for this.
     - Card suits and colours could be added, allowing for side bets also, but then it would no longer be 'Basic' blackjack.
 
## Tools and Technologies Used
- [Balsamiq](https://balsamiq.com/) used for wireframe
- [Git](https://git-scm.com/) for version control
- [Github](https://github.com/) for repository and page deployment
- [VScode](https://code.visualstudio.com/) my IDE of choice
- HTML language used to place the content
- CSS  language used to style the content
- Javascript language used to enable interactivity and logical operators.
- Markdown  language used to create the README.md and TESTING.md files
- [Favicon.io](https://favicon.io/favicon-generator/) to create the J favicon
- [Google Fonts](https://fonts.google.com/) for font pairings and importing to project
- [Google Devtools](https://developer.chrome.com/docs/devtools) for testing and development
- [W3C](https://validator.w3.org/) for html validation
- [W3C Jigsaw](https://jigsaw.w3.org/css-validator/) for CSS validation
- [JSLint](https://www.jslint.com/) for javascript validation
- [Esprima](https://esprima.org/demo/validate.html) for javascript validation
## Testing
 Testing documentation can be found on the following link
![Testing](TESTING.md)

## Deployment

- The site was deployed to GitHub pages. The steps to deploy this static html site were: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the code and automation menu on the left hand column select Pages
  - From the source drop down menu select "Deploy from a branch"
  - under the branch heading the first drop down menu select "main"
  - the second drop down menu lets you choose the folder, in this instance select /(root) and then hit Save
  - wait for a moment and a message will be displayed at the top of the page stating "GitHub Pages source saved
  - Reload the page and you will see a message at the top which includes the link to your live site, in this instance it is https://github.com/codebystu/basic-blackjack 
 
## Credits
### Font
-   Beba Neue Font
    - used for the card face and the favicon
    - Font Author: Copyright 2019 The Bebas Neue Project Authors (https://github.com/dharmatype/Bebas-Neue)
- Font Source: https://fonts.gstatic.com/s/bebasneue/v14/JTUSjIg69CK48gW7PXooxW5rygbi49c.ttf
- Font License: SIL Open Font License, 1.1 (http://scripts.sil.org/OFL)

### Code
- [geeks for geeks](https://www.geeksforgeeks.org/how-to-delay-a-javascript-function-call-using-javascript/) article used to create illusion of card dealing animation, add anticipation and allow time to read in-game messaging.
- [Stack Overflow](https://stackoverflow.com/questions/67691159/addeventlistenerclick-function-once-true-firing-multiple-times-in-the) this thread helped me solve the bug with stake doubling and cards being dealt multiple times which I initially thought was bubbling.
- [Medium](https://javascript.plainenglish.io/how-to-remove-html-elements-by-class-name-b0288988dd55) code for removing cards from the table at the end of the hand.
- [W3schools](https://www.w3schools.com/jsref/jsref_reduce.asp) sum value of the player and dealer card array using reduce.


#### Acknowledgements
- All in the UCP-15 tutor group for making it an enjoyable experience so far and being a soundboard
- Sheryl Goldberg my mentor, your positivity, encouragement and feedback have pulled me through the lowest of days with imposter syndrome
