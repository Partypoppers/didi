function random(num) {
  return Math.floor(Math.random()*num)
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(4)+4;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite ; 
  `
}

function createBalloons(num) {
  var balloonContainer = document.getElementById("balloon-container")
  for (var i = num; i > 0; i--) {
  var balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.style.cssText = getRandomStyles();           
  balloonContainer.append(balloon);
  setTimeout(function(){ balloonContainer.style.display = "none" }, 4500);
  setTimeout(function(){ document.getElementById("main-container").style.display = ""; }, 4500);
  }
  
}

var button = document.getElementById("load-website");
button.onclick = function() {
  document.getElementById("balloon-container").style.display = "";
  document.getElementById("load-website").style.display = "none";
  createBalloons(15);
}

