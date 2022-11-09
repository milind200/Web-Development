var randomNum1=Math.floor(Math.random()*6)+1;
var img1="dice"+randomNum1+".png"
var randomImage1="images/"+img1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

var randomNum2=Math.floor(Math.random()*6)+1;
var img2="dice"+randomNum2+".png"
var randomImage2="images/"+img2;
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImage2);

if(randomNum1>randomNum2)
{
  document.querySelector("h1").innerHTML="🚩 Play 1 Wins!";
}
else if(randomNum1<randomNum2)
{
  document.querySelector("h1").innerHTML="🚩 Play 2 Wins!";
}
else
{
  document.querySelector("h1").innerHTML="Its a Draw!";
}
