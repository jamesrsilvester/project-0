
$(document).ready(function() {

  hitReset = function () {location.reload()};
  //Reset Button Listener
  $('#reset').on("click", hitReset);
  $(document).on("keypress", hitReset);
  // all code to manipulate the DOM goes inside this function
  console.log("Script is linked");
  let stillFlying = false;
  var audio = new Audio('song.m4a');
  audio.play();
  // Reset Logic

  // Click Start Button to....
  $('#start').on("click", mouseTracking = function () {
    //remove start button
     stillFlying = true;
    $('#start').addClass( "heli" );
    $('#start').remove();

    //assigns overall listener as gameboard
    let $gameboard = $('#gameboard');

    //prints box clicked to console.
    $('.sky').on("click", function (event) {
      idBoxClicked = event.target.id;
      console.log(`${idBoxClicked} was clicked`);
    });

    //track mouseover....
    $('.sky').on("mouseover", function (event) {
      if (stillFlying){
        idBoxClicked = event.target.id;
        //If Bomb, heli explodes - if not
        if ($(`#${idBoxClicked}`).hasClass("bomb")){
          $(`#${idBoxClicked}`).removeClass( "heli" );
          var audio2 = new Audio('boom.mp3');
          audio2.play();
          $(`#${idBoxClicked}`).addClass( "boom" );
          $(`#reset`).text( "Try another path! Hit Any Key to Reset");
          stillFlying = false;
        };

        if ($(`#${idBoxClicked}`).hasClass("finish")){
          $(`body`).css( "background","white");
          $(`h1`).css( "color","black");
          $(`h1`).text( "You Win!");
          $(`#reset`).text( "Hit Any Key to Reset");
          stillFlying = false;
        };

        //printing mouseover location
        console.log(`${idBoxClicked} was moused over`);
        //add helicopter class
        $(`#${idBoxClicked}`).addClass( "heli" );
        //make citymove
        $(`#city`).addClass( "cityMoves" );
        //on Mouseoff
        $('.sky').on("mouseleave", function (event) {
          idBoxClicked = event.target.id;
          //printing mouseover location
          console.log(`mouse left ${idBoxClicked}`);
          //remove helicopter class
          $(`#${idBoxClicked}`).removeClass( "heli" );
        })
      }
    }); // $('.sky').on("mouseover...
  }); // $('#start').on("click...
}); // $(document).ready...
  /*


//Add each turn to overall turn count
let addTurn = function() {numTurns ++;
console.log(`This is turn number ${numTurns-2}`);}; //-2 because counter started at 2.
*/
