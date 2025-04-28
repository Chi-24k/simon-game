const gamePattern = [];
const buttonColours = ['red', 'blue', 'green', 'yellow'];
const userClickedPattern = [];

$('.btn').click(function () {
  const userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
});

function playSound(randomChosenColour) {
  const buttonAudio = new Audio('sounds/' + randomChosenColour + '.mp3');
  buttonAudio.play();
}

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  const selectButton = $('#' + randomChosenColour);
  selectButton.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100); //thank you stackoverflow hehe
  playSound(randomChosenColour);
}

$(document).keydown(function () {
  nextSequence();
});
