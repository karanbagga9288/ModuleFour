// ModuleTwo Assignment JavaScript Document
// Kiran's Goal Tracker

var goal = " ";
function message() {
  var goal = input.value; 
  alert("Your goal is: " + goal);
}

function audio() {
  document.getElementById("voice").play();
  goal = document.getElementById("goalInput").value;
}

function finishTheGoal() {
  document.getElementById("info").innerHTML = " ";
}


let button = document.querySelectorAll('button')[0];
button.onclick = message;


document.getElementById("sub").addEventListener('click', function (e) {
  e.preventDefault();
  // this will Add heading to the list of added goals
  document.getElementById("goalHeading2").textContent = "My weekly goals list is here:";

  // this will get value of input text
  var input = document.getElementById("goalInput").value;

  // this will create list item element
  var list = document.createElement("li");

  if(input === '') {
    alert("No goals to complete");
  }
  else
  {
    list.innerHTML = `<span class='textOfGoal'> ${input}</span> <button value = "show" class='markAsCompleted' onfocus="this.value=' '">Complete the goal</button>`;
    var orderedList = document.getElementById("listOfGoals");
    orderedList.appendChild(list);
  }

})


// this Event handler is for deleting the added goals when "Delete goal" button is clicked
var olElement = document.getElementById("listOfGoals");
olElement.addEventListener('click', function (e) {
e.preventDefault();
  if (e.target.classList.contains('deleteMe')) {

    e.target.parentElement.remove(); //this will remove the parent element which is clicked
  }
  else{
    var olElement = document.getElementById("listOfGoals");
  }
})


var olElementCompleted = document.getElementById("listOfCompletedGoals");

olElementCompleted.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('deleteCompleted')) {

    e.target.parentElement.remove(); //it will remove the parent element which is clicked
  }
  else{
    var olElementCompleted = document.getElementById("listOfCompletedGoals");
  }
})


olElement.addEventListener('click', function (e) {

  e.preventDefault();

  if (e.target.classList.contains('markAsCompleted')) {

    e.target.parentElement.remove();

    document.getElementById("goalCompletedHeading2").textContent = "Weekly goals Completed List is here:";

    // this will create a list item element
    var listElement = document.createElement("listElement");

    listElement.innerHTML = `<span class='completedGoalsItems'>${e.target.previousElementSibling.textContent}</span> <button value = "delete" class='deleteCompleted' onfocus="this.value=' '"> Delete the completed goal </button>`;
    
    let ol = document.getElementById("listOfCompletedGoals");

    ol.appendChild(listElement);

    var button = document.querySelectorAll('button')[0];

    button.onclick = message;
  }

})



