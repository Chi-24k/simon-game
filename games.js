const gamePattern = [];
const buttonColours = ['red', 'blue', 'green', 'yellow'];
const userClickedPattern = [];

$('.btn').click(function () {
  const userChosenColour = $(this).attr('id');
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function animatePress(currentColour) {
  $('#' + currentColour).addClass('pressed');
  setTimeout(function () {
    $('#' + currentColour).removeClass('pressed'), 1000;
  });
}

function playSound(audioName) {
  const buttonAudio = new Audio('sounds/' + audioName + '.mp3');
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
