var currentDay = document.getElementById("current-day");
var date = new Date();
var hour = date.getHours();
var hourNoteId = ["note-hour-9", "note-hour-10", "note-hour-11", "note-hour-12", "note-hour-1", "note-hour-2", "note-hour-3", "note-hour-4", "note-hour-5"];

for(var i = 0; i < hourNoteId.length; i++){ 
  document.getElementById(hourNoteId[i]).contentEditable = "true"
  var textSlot = document.getElementById(hourNoteId[i]);

  if((i + 9) === hour) {
    textSlot.classList.remove("past");
    textSlot.classList.remove("future");
    textSlot.classList.add("present");
  } else if((i + 9) < hour) {
    textSlot.classList.remove("present");
    textSlot.classList.remove("future");
    textSlot.classList.add("past");
  } else {
    textSlot.classList.remove("past");
    textSlot.classList.remove("present");
    textSlot.classList.add("future");
  };
};

var noteNine = document.getElementById("note-hour-9");
var nineHour = localStorage.getItem("notesNine");
noteNine.textContent = nineHour;
$("#save-9").on("click", function(){
  localStorage.setItem("notesNine", noteNine.textContent);
});

var noteTen = document.getElementById("note-hour-10");
var tenHour = localStorage.getItem("notesTen");
noteTen.textContent = tenHour;
$("#save-10").on("click", function(){
  localStorage.setItem("notesTen", noteTen.textContent);
});

var noteEleven = document.getElementById("note-hour-11");
var elHour = localStorage.getItem("notesEleven");
noteEleven.textContent = elHour;
$("#save-11").on("click", function(){
  localStorage.setItem("notesEleven", noteEleven.textContent);
});

var noteTwelve = document.getElementById("note-hour-12");
var twHour = localStorage.getItem("notesTwelve");
noteTwelve.textContent = twHour;
$("#save-12").on("click", function(){
  localStorage.setItem("notesTwelve", noteTwelve.textContent);
});

var noteOne = document.getElementById("note-hour-1");
var oneHour = localStorage.getItem("notesOne");
noteOne.textContent = oneHour;
$("#save-1").on("click", function(){
  localStorage.setItem("notesOne", noteOne.textContent);
});

var noteTwo = document.getElementById("note-hour-2");
var twoHour = localStorage.getItem("notesTwo");
noteTwo.textContent = twoHour;
$("#save-2").on("click", function(){
  localStorage.setItem("notesTwo", noteTwo.textContent);
});

var noteThree = document.getElementById("note-hour-3");
var threeHour = localStorage.getItem("notesThree");
noteThree.textContent = threeHour;
$("#save-3").on("click", function(){
  localStorage.setItem("notesThree", noteThree.textContent);
});

var noteFour = document.getElementById("note-hour-4");
var fourHour = localStorage.getItem("notesFour");
noteFour.textContent = fourHour;
$("#save-4").on("click", function(){
  localStorage.setItem("notesFour", noteFour.textContent);
});

var noteFive = document.getElementById("note-hour-5");
var fiveHour = localStorage.getItem("notesFive");
noteFive.textContent = fiveHour;
$("#save-5").on("click", function(){
  localStorage.setItem("notesFive", noteFive.textContent);
});

currentDay.innerHTML = date;