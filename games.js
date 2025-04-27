const gamePattern = [];
const buttonColours = ['red', 'blue', 'green', 'yellow'];

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  const selectButton = $('#' + randomChosenColour);
  selectButton.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //thank you stackoverflow hehe

  const buttonAudio = new Audio('sounds/' + randomChosenColour + '.mp3');
  buttonAudio.play();
}

$(document).keydown(function () {
  nextSequence();
});
