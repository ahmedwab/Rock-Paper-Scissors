
var p=0; //player score
var c=0; //computer score
var r=0; //indicator of rotation; either up or down.
var round=1; //indicator of round


function rps(play,i){
  document.getElementById("round").innerHTML="Round "+ round;
  round++;
  var rand=Math.floor(Math.random() * 3); //returns 0-2
  random_computer(rand);

  var player=document.getElementById("left-img");
  player.src = play;
  if (i==0&&rand==2) p++;
  if (i==0&&rand==1) c++;
  if (i==1&&rand==0) p++;
  if (i==1&&rand==2) c++;
  if (i==2&&rand==0) c++;
  if (i==2&&rand==1) p++;

  var pscore=document.getElementById("pscore");
  var cscore=document.getElementById("cscore");
  pscore.innerHTML = "Score: "+p;
  cscore.innerHTML = "Score: "+c;

  rotate();
  win_lose();


}

function win_lose(){
  if (p==5){
    window.alert("Congratulations!");
    reset();
  }
  if (c==5){
    window.alert("Better Luck Next Time");
    reset();
  }
}
function random_computer(rand){
  var computer=document.getElementById("right-img");

  if (rand==0){
    computer.src='images/rock-right.png';
  }
  if (rand==1){
    computer.src='images/paper-right.png';
  }
  if (rand==2){
    computer.src='images/scissors-right.png';
  }

}
function rotate(){
  if(r==0){
    rotatedown();
    r=1;
  }
  else {
    rotateup();
    r=0;
  }
}
function rotatedown(){
  var computer=document.getElementById("right-img");
  var player=document.getElementById("left-img");
  computer.style.transform= "rotate(-20deg)";
  player.style.transform= "rotate(20deg)";

}
function rotateup(){
  var computer=document.getElementById("right-img");
  var player=document.getElementById("left-img");
  computer.style.transform= "rotate(20deg)";
  player.style.transform= "rotate(-20deg)";

}

function reset(){
  p=0;
  c=0;
  round=1;
  var pscore=document.getElementById("pscore");
  var cscore=document.getElementById("cscore");
  var computer=document.getElementById("right-img");
  var player=document.getElementById("left-img");
  computer.style.transform= "rotate(0deg)";
  computer.src='images/rock-right.png';
  player.style.transform= "rotate(0deg)";
  player.src='images/rock-left.png';


  document.getElementById("round").innerHTML="Round "+ round;
  pscore.innerHTML = "Score: "+p;
  cscore.innerHTML = "Score: "+c;
}
