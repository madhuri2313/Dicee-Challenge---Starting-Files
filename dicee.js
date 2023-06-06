var randomNumber1 = Math.floor((Math.random() * 6)+ 1);

var imageSource1 = "images/dice" + randomNumber1 +".png";

document.querySelectorAll("image")[0].setAttribute("src", imageSource1);
