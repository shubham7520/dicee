var number=Math.random();
 var number=Math.floor((number*6)+1);
var image="dice"+number+".png";
var image_random="./images/"+image;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src" ,image_random);

var n=Math.random();
 var n=Math.floor((n*6)+1);
var image="dice"+n+".png";
var image_random="./images/"+image;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",image_random);

if(number > n)
{
    document.querySelectorAll("h1")[0].innerHTML=" 🚩 Player 1 wins.";
}
else{
    if(number < n)
    {
        document.querySelectorAll("h1")[0].innerHTML="🚩 Player 2 wins.";
    }
    else{
        document.querySelectorAll("h1")[0].innerHTML="Draw!";
    }
}
