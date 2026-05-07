 // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
 var pet_info = {name:"Dax", weight:30, happiness:50};


  
//made buttons to oress an log message to the console when clicked. Each button will log a different type of message (info, warning, error, table, group, custom) and will also log different information about your pet. I also added buttons to cause a 404 error, a TypeError, and a violation of the "long task" rule in the console.
document.getElementById("log-info-button").addEventListener("click", function() {
    console.info("This is an info message showing the pet's name, weight, and happiness: " + pet_info.name + ", " + pet_info.weight + ", " + pet_info.happiness);
});
document.getElementById("log-warn-button").addEventListener("click", function() {
    console.warn("This is a warning message showing that the pet's weight is getting high: " + pet_info.weight);
});
document.getElementById("log-error-button").addEventListener("click", function() {
    console.error("This is an error message showing that the name of the pet is not valid: ");
});
document.getElementById("log-table-button").addEventListener("click", function() {
    console.table(pet_info);
});
document.getElementById("log-group-button").addEventListener("click", function() {
    console.group("Group Name: dax");
    console.log("Smart");
    console.log("Althetic");
    console.groupEnd();
});
document.getElementById("log-custom-button").addEventListener("click", function() {
    console.log("%cThis is a custom log message which says: " + pet_info.name + " is the best!", "color: blue; font-weight: bold;");
});  
document.getElementById("cause-404-button").addEventListener("click", function() {
    var img = new Image();
    img.src = "nonexistent-image.jpg";
});

document.getElementById("cause-typeerror-button").addEventListener("click", function() {
    try {
        null.myProperty;
    } catch (e) {
        console.error(e);
    }
});

document.getElementById("cause-violation-button").addEventListener("click", function() {
    setTimeout(function() {
        var start = Date.now();
        while (Date.now() - start < 1000) {}
    }, 0);
});

$(function() {
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);
    

  
  
  })
   
    function clickedTreatButton() {
      pet_info['happiness'] = pet_info['happiness'] + 10;
      pet_info['weight'] = pet_info['weight'] + 5;
      checkAndUpdatePetInfoInHtml();
      $('.pet-message').hide().html("Yum! That was delicious!").slideDown(500);
      var sound = new Audio("sounds/nom-nom-nom_gPJiWn4.mp3");
      sound.play();
       //I added .html() and .slideDown() to the end of each function so that a message will appear when you click each button.
       // .html() - sets the HTML content of the pet-message element
       // .slideDown() - animates the element sliding into view
    }
    
    function clickedPlayButton() {
      pet_info['happiness'] = pet_info['happiness'] + 15;
      pet_info['weight'] = pet_info['weight'] - 2;
      checkAndUpdatePetInfoInHtml();
      $('.pet-message').hide().html("Yay! That was so much fun!").slideDown(500);
      var sound = new Audio("sounds/squeak_Q72c7Tg.mp3");
      sound.play();
    }
    
    function clickedExerciseButton() {
      pet_info['happiness'] = pet_info['happiness'] - 5;
      pet_info['weight'] = pet_info['weight'] - 10;
      checkAndUpdatePetInfoInHtml();
      $('.pet-message').hide().html("Phew! That was exhausting!").slideDown(500);
      var sound = new Audio("sounds/whistle_BBvcaZ1.mp3");
      sound.play();
    }

    function clickedSleepButton(){
      pet_info['happiness'] = pet_info['happiness'] + 5;
      pet_info['weight'] = pet_info['weight'] + 1;
      checkAndUpdatePetInfoInHtml();
      $('.pet-message').hide().html("Zzz... That was a nice nap!").slideDown(500);
      var randomNum = Math.random();
      if (randomNum < 0.5) {
      var sound = new Audio("sounds/sleeping_HwTkaox.mp3");
      } else {
      var sound = new Audio("sounds/ronquidos-y-silbidos.mp3");
      }
      sound.play();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
     if (pet_info['weight'] < 0) {
    pet_info['weight'] = 0
    }
    if (pet_info['happiness'] < 0) {
    pet_info['happiness'] = 0
    }
    }
    
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  