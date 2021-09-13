//For the first Dice
var n=Math.floor(Math.random()*6)+1;
if(n==1)
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
else if(n==2)
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
else if(n==3)
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
else if(n==4)
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
else if(n==5)
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
else if(n==6)
  document.querySelector(".img1").setAttribute("src","images/dice6.png");

//For the second dice
var v=Math.floor(Math.random()*6)+1;
if(v==1)
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
else if(v==2)
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
else if(v==3)
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
else if(v==4)
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
else if(v==5)
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
else if(v==6)
  document.querySelector(".img2").setAttribute("src","images/dice6.png");

//For the heading to display
if(n>v)
  document.querySelector("h1").textContent="🥳 Player 1 wins";
else if(n<v)
  document.querySelector("h1").textContent="Player 2 wins 🥳";
else
  document.querySelector("h1").textContent="Draw 😐";
