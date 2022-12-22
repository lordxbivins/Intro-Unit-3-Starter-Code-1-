/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening = document.querySelector ('.story-opening');
let optionOneScreen = document.querySelector ('.option-one-screen');
let optionTwoScreen = document.querySelector('.option-two-screen');
let optionOne= document.querySelector('.option-one');
let optionTwo =document.querySelector('.option-two');
let optionOneEnd= document.querySelector('.option-one-end');
let optionTwoEnd = document.querySelector('.option-two-end');
let Title= document.querySelector('.title')
let optionOneimage = document.querySelector('.robot');
let Buttons = document.querySelector('.buttons');
let Crane = document.querySelector('.crane');


optionOne.onclick = function () {
  optionOneScreen.style.display = 'block';
  storyOpening.style.display = 'none';
  Buttons.style.display='none';
  Title.style.display='none';
}

optionTwo.onclick=function(){
optionTwoScreen.style.display = 'block';
  storyOpening.style.display = 'none';
  Buttons.style.display='none';
  Title.style.display='none';
};



optionOneimage.onclick = function () {
  optionOneEnd.style.display = 'block';
  optionOneScreen.style.display='none';
  storyOpening.style.display = 'none';
  Buttons.style.display='none';
  Title.style.display='none';
}




Crane.onclick = function () {
  optionTwoEnd.style.display = 'block';
  optionTwoScreen.style.display='none';
  optionOneScreen.style.display='none';
  storyOpening.style.display = 'none';
  Buttons.style.display='none';
  Title.style.display='none';
}
