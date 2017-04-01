// TEAM A
// a - Increase 1 point
// s - Increase 2 points
// d - Increase 3 points
// f - Decrease 1 point

// TEAM B
// j - Increase 1 point
// k - Increase 2 points
// l - Increase 3 points
// n - Decrease 1 point

$(document).keypress(function(event) {
  var ascii = event.keyCode;

  if ( ascii == 67 || ascii == 97 ) {
    // a - A
    var score = parseInt($('#scoreOne').text());
    $('#scoreOne').text( score + 1 );
  } else if ( ascii == 83 || ascii == 115 ) {
    // s - S
    var score = parseInt($('#scoreOne').text());
    $('#scoreOne').text( score + 2 );
  } else if ( ascii == 68 || ascii == 100 ) {
    // d - D
    var score = parseInt($('#scoreOne').text());
    $('#scoreOne').text( score + 3 );
  } else if ( ascii == 70 || ascii == 102 ) {
    // f - F
    var score = parseInt($('#scoreOne').text());
    if ( score > 0 ) {
      $('#scoreOne').text( score - 1 );
    }
  } else if ( ascii == 74 || ascii == 106 ) {
    // j - J
    // a - A
    var score = parseInt($('#scoreTwo').text());
    $('#scoreTwo').text( score + 1 );
  } else if ( ascii == 75 || ascii == 107 ) {
    // k - K
    var score = parseInt($('#scoreTwo').text());
    $('#scoreTwo').text( score + 2 );
  } else if ( ascii == 76 || ascii == 108 ) {
    // l - L
    var score = parseInt($('#scoreTwo').text());
    $('#scoreTwo').text( score + 3 );
  } else if ( ascii == 78 || ascii == 110 ) {
    // n - N
    var score = parseInt($('#scoreTwo').text());
    if ( score > 0 ) {
      $('#scoreTwo').text( score - 1 );
    }
  }
});
