(function() {

  function comparePasswords(password, comparate, invalidmsg) {
    if (password.value !== comparate.value) {
      password.setCustomValidity(invalidmsg);
    } else {
      password.setCustomValidity('');
    }
  }

  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    if (!input.hasAttribute('compareTo')) continue;
    var comparateName = input.getAttribute('compareTo');
    var comparates = document.getElementsByName(comparateName);
    if (comparates.length === 0) { 
        console.error('CompareTo could not find an element with the name "' + comparateName + '". Please ensure that one element with that name exists.');  
        continue; 
     } else if (comparates.length > 1) {
        console.error('CompareTo found more than one (' + comparates.length  + ') elements with the name "' + comparateName + '". Please ensure that only one element with that name exists.')
        continue;
     }
    var comparate = comparates[0];

    var defaultValidateError = 'These passwords don\'t match.';  //default validation error message
    if (input.hasAttribute('compareToMsg')) { defaultValidateError = input.getAttribute('compareToMsg'); }  //set the validation error if attribute present

    input.addEventListener("change", (function(input, comparate, invalidmsg) {
      return function() {
        comparePasswords(input, comparate, invalidmsg);
      }
    })(input, comparate, defaultValidateError));

    comparate.addEventListener("change", (function(input, comparate, invalidmsg) {
      return function() {
        comparePasswords(input, comparate, invalidmsg);
      }
    })(input, comparate, defaultValidateError));
  }

}());
