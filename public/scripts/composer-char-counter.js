$(document).ready(function () {
  $('#tweet-text').on('input', function () {

    let $numberOfCharacter = $(this).val().length;
    let $remainingCounter = (140 - $numberOfCharacter);

    $(this).parent().find('.counter');
    $('.counter').text($remainingCounter);

    if ($remainingCounter < 0) {
      $('.counter').css('color', 'red');
    } else {
      $('.counter').css('color', '');
    }

  });
});
