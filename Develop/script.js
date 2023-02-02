// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// ---- Planner Variables ---- //
// Time Slot Variables
const hour01 = $('#hour-1').text();
const hour02 = $('#hour-2').text();
const hour03 = $('#hour-3').text();
const hour04 = $('#hour-4').text();
const hour05 = $('#hour-5').text();
const hour06 = $('#hour-6').text();
const hour07 = $('#hour-7').text();
const hour08 = $('#hour-8').text();
const hour09 = $('#hour-9').text();
const hour10 = $('#hour-10').text();



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //// Button functionality, variables for on save button click, .val() is where the text goes
var eventText;
var eventTime;

$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    colorChange ();
    renderText ();
    
});

  $(".deleteBtn").click(function() {
        eventText = $(this).siblings(".input").val("");
        eventText = $(this).siblings(".input").val();
        eventTime = $(this).siblings(".hour").text();
        localStorage.setItem(eventTime, JSON.stringify(eventText));
  
    colorChange ();
    renderText ();

});

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //// How the blocks know if they are past, present or future
  $(".input").each(function () {
    var scheduledTime = parseInt($(this).attr("id"));
    console.log(scheduledTime);

    if (currentTime > scheduledTime) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (currentTime < scheduledTime) {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    } else {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
    }
});
}
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // TODO: Add code to display the current date in the header of the page.
    // Day, date, time
("#currentDay").text(moment().format('LLLL'));
$(document).ready( function() {
  colorChange ();
  renderText();
});

function colorChange () {

  var currentTime = moment().hours();
  console.log("Current Time" + currentTime);
};

 
