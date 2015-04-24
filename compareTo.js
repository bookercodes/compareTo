(function() {
  'use strict';

  function comparePasswords(password, comparate, invalidmsg) {
    if (password.value !== comparate.value) {
      password.setCustomValidity(invalidmsg);
    } else {
      password.setCustomValidity('');
    }
  }

  var inputs = document.querySelectorAll('input[compareTo], input[data-compareTo]');

  for (var i = 0, input; input = inputs[i]; i++) {
    var form = input.form;
    var comparateName = input.getAttribute('compareTo') || input.getAttribute('data-compareTo');
    var comparates = form.querySelectorAll('[name="' + comparateName + '"]');

    if (comparates.length === 0) {
      console.error('CompareTo could not find an element with the name "' + comparateName + '". Please ensure that one element with that name exists.');
      continue;
    }

    if (comparates.length > 1) {
      console.error('CompareTo found more than one (' + comparates.length  + ') elements with the name "' + comparateName + '". Please ensure that only one element with that name exists.')
      continue;
    }

    var comparate = comparates[0];
    var error = input.getAttribute('compareToError')      ||
                input.getAttribute('data-compareToError') ||
                'These passwords don\'t match.';

    var callback = (function(input, comparate, invalidmsg) {
      return function() {
        comparePasswords(input, comparate, invalidmsg);
      }
    })(input, comparate, error);

    input.addEventListener('change', callback);
    comparate.addEventListener('change', callback);
  }
}());
