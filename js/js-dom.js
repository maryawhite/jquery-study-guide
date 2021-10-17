"use strict"
console.dir(document);

function changeFont(){
    var list = document.querySelector("ul")
        list.style.color = "green";
        list.style.fontFamily = "Comic Sans MS";
        list.style.fontSize = "20pt";
}
document.getElementById("change-font").addEventListener("click", changeFont);

var header = document.querySelector("h1")

header.style.borderBottom = "solid 3px #000";
header.style.color = "red";

var toggled = document.getElementsByClassName("toggled")
console.log(toggled);
toggled[0].textContent = "You can TOGGLE between hiding and showing elements, or classes, or ids, using the TOGGLE method.";
toggled[1].textContent = "Click the button to watch these 2 paragraphs with the SAME CLASS NAME disappear and reappear.";
var toggleButton = document.getElementById("toggle-para")
toggleButton.addEventListener("click", toggleVisibility);

function toggleVisibility(){
    var toggled = document.getElementsByClassName("toggled")
    for(var i = 0; i < toggled.length; i++){
        if(toggled[i].style.display === "none"){
            toggled[i].style.display = "block";
        } else {
            toggled[i].style.display = "none";
        }
    }
}

//add a margin to the top of the form element
document.querySelector("form").style.marginTop = "1em";

//change the word on the submit button be send
var submit = document.querySelector("input[type='submit']");
submit.value="SEND";

//change the value of the first name input field to Hello World
var input = document.querySelector("input");
input.value = "hello World";

//change the ul list items to red
var item = document.querySelector('.list-group-item');
item.style.color = "red";

//change only the last list item in the ul
var lastItem = document.querySelector('.list-group-item li:last-child');
lastItem.style.color = "blue";
