var numSquares = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");

init();

function init(){
  //Mode Buttons Listeners
  setupModeButtons();
  setupSquares();
  reset();
}
function setupSquares(){
  for(var i = 0; i < squares.length; i++){
      //Add click listener
      squares[i].addEventListener("click", function(){
          //Grab color of clicked square
          var clickedColor = this.style.backgroundColor;
          //Compare color to pickedColor
          if(clickedColor === pickedColor){
              messageDisplay.textContent = "Correct!!";
              resetButton.textContent = "Play Again?";
              changeColors(clickedColor);
              h1.style.backgroundColor = clickedColor;
          }else{
              this.style.backgroundColor = "#232323";
              messageDisplay.textContent = "Try Again";
          }
      });
  }
}

function setupModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function reset(){
  colors = generateColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "burlywood";
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function(){
    reset();
})


function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateColors(num){
    var arr = []

    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
 }
