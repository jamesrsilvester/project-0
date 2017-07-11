
$(document).ready(function() {
  // all code to manipulate the DOM goes inside this function
  console.log("Script is linked");

  // Reset Logic
  hitReset = function () {location.reload()};
    //Reset Button Listener
    $('#reset').on("click", hitReset);


  // Click Start Button to....
  $('#start').on("click", mouseTracking = function () {
      //remove start button
      $('#start').remove();
      //track mouseover....
      $gameboard.on("mouseover", function (event) {
      idBoxClicked = event.target.id;
      //Checks for bomb
      if ($(`#${idBoxClicked}`).hasClass("bomb")) {console.log("bomb");}
      //printing mouseover location
      console.log(`${idBoxClicked} was moused over`);
      //add helicopter class
      $(`#${idBoxClicked}`).addClass( "heli" );
      })
      //on Mouseoff
      $gameboard.on("mouseleave", function (event) {
      idBoxClicked = event.target.id;
      //printing mouseover location
      console.log(`mouse left ${idBoxClicked}`);
      //remove helicopter class
      $(`#${idBoxClicked}`).removeClass( "heli" );
      })


  });

  //assigns overall listener as gameboard
  let $gameboard = $('#gameboard');

  //prints box clicked to console.
  $gameboard.on("click", function (event) {
    idBoxClicked = event.target.id;
    console.log(`${idBoxClicked} was clicked`);
  })


});

/*

//Tracks Turns Made, add to array
moveTracker = function () {
  movesMade.push(`${idBoxClicked}`);
  console.log(`Previous moves are ${movesMade}`);
  checkForWin();
  }

  //prints box clicked to console.
  $gameboard.on("click", function (event) {
  idBoxClicked = event.target.id;

   //??Changes class of clicked element//
   let changeClass = function () {
     //if turn number is even, and doesn't contain, box or red class:
     if (numTurns%2 === 0) {
       $(`#${idBoxClicked}`).removeClass( "box" ).addClass( "red" );
       $(`span`).text( "Two" ).css({'color':"blue"});
     }
     //if turn number is odd, and doesn't contain box or blue class:
     else {
       $(`#${idBoxClicked}`).removeClass( "box" ).addClass( "blue" );
       $(`span`).text( "One" ).css({'color':"red"});
     }
   }

   //Checks for class red or blue
   let hasClass = $(`#${idBoxClicked}`).hasClass("red") || $(`#${idBoxClicked}`).hasClass( "blue");

   //Prints event clicked and checks if move was a duplicate
   if (hasClass === false) {
       if (numTurns%2 === 0) {
         console.log(`Player 1 clicked ${event.target.id}`);
         }
         else {console.log(`Player 2 clicked ${event.target.id}`);
         }
       changeClass();
       addTurn();
       moveTracker();
        }
        else if (movesMade.length <= 9){
          alert("You already went there..");
        }
        else {
          hitReset();
        }

  });
  //confirms that clicks are being recorded
  console.log(" ... and listening for clicks");
});

//Create variables here that do not require DOM load.
let $boxes = $('.box'); //// Selects all boxes
let $red = $('.red'); //RED goes first
let $blue = $('.blue'); //BLUE goes second
let numTurns = 2; // Starts at Even, starts with 2 rather than 0 for %.
movesMade = []; //collects all turns

//Add each turn to overall turn count
let addTurn = function() {numTurns ++;
console.log(`This is turn number ${numTurns-2}`);}; //-2 because counter started at 2.


checkForWin = function () {
if (
  //Row 1
  $('#b0').hasClass("red") && $('#b1').hasClass("red") && $('#b2').hasClass("red") ||
  //Row 2
  $('#b3').hasClass("red") && $('#b4').hasClass("red") && $('#b5').hasClass("red") ||
  //Row 3
  $('#b6').hasClass("red") && $('#b7').hasClass("red") && $('#b8').hasClass("red") ||
  //Column 1
  $('#b0').hasClass("red") && $('#b3').hasClass("red") && $('#b6').hasClass("red") ||
  //Column 2
  $('#b1').hasClass("red") && $('#b4').hasClass("red") && $('#b7').hasClass("red") ||
  //Column 3
  $('#b2').hasClass("red") && $('#b5').hasClass("red") && $('#b8').hasClass("red") ||
  //Diagonal Upper Left to Bottom Right
  $('#b0').hasClass("red") && $('#b4').hasClass("red") && $('#b8').hasClass("red") ||
  //Diagonal Upper Right to Lower Left
  $('#b2').hasClass("red") && $('#b4').hasClass("red") && $('#b6').hasClass("red")
)
//Win Sequence RED
{$(`h3`).text( "RED is the winner!" ).css({'color':"red"});
}
//BLUE win condition
else if (
  //Row 1
  $('#b0').hasClass("blue") && $('#b1').hasClass("blue") && $('#b2').hasClass("blue") ||
  //Row 2
  $('#b3').hasClass("blue") && $('#b4').hasClass("blue") && $('#b5').hasClass("blue") ||
  //Row 3
  $('#b6').hasClass("blue") && $('#b7').hasClass("blue") && $('#b8').hasClass("blue") ||
  //Column 1
  $('#b0').hasClass("blue") && $('#b3').hasClass("blue") && $('#b6').hasClass("blue") ||
  //Column 2
  $('#b1').hasClass("blue") && $('#b4').hasClass("blue") && $('#b7').hasClass("blue") ||
  //Column 3
  $('#b2').hasClass("blue") && $('#b5').hasClass("blue") && $('#b8').hasClass("blue") ||
  // //Diagonal Upper Left to Bottom Right
  $('#b0').hasClass("blue") && $('#b4').hasClass("blue") && $('#b8').hasClass("blue") ||
  //Diagonal Upper Right to Lower Left
  $('#b2').hasClass("blue") && $('#b4').hasClass("blue") && $('#b6').hasClass("blue")
)
//Win Sequence BLUE
{$(`h3`).text( "BLUE is the winner!" ).css({'color':"blue"});
}

//setTimeout(function() {alert('hello');},250);


else if (movesMade.length === 9)
//Draw Sequence
{
$(`h3`).text( "It's a DRAW" ).css({'color':"black"});}

else if (movesMade.length === 10)
{hitReset();}
}
*/
