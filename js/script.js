$(document).ready(function() {
  $("#items").submit(function(event) {
    event.preventDefault();
  var userInputs = $("#userInput").val();
  var splitInputs = userInputs.split(' ');
  //console.log(splitInput);
  var longEnoughInput = splitInputs.map(function(splitInput){
    if (splitInput.length >= 3){
      return splitInput;
    }else {
      return;
    }
  });
   $("#result").text(longEnoughInput.reverse().join(' '));





  });
});
