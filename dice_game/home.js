let randomNum1 = Math.floor(Math.random()*6)+1;
let randomImg1 = "images/dice" + randomNum1 + ".png";
document.querySelector("#img1").setAttribute("src", randomImg1);

let randomNum2 = Math.floor(Math.random()*6)+1;
let randomImg2 = "images/dice" + randomNum2 + ".png";
document.querySelector("#img2").setAttribute("src", randomImg2);


if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML = "&#127881 Player 1 wins!";
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML = " Player 2 wins! &#127881";
}
else{
    document.querySelector("h1").innerHTML = "&#8987 Tie!! &#8987";
}