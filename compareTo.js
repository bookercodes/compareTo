(function() {

  function comparePasswords(password, comparate) {
    if (password.value !== comparate.value) {
      password.setCustomValidity('These passwords don\'t match.');
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
    if (comparates.length !== 1) continue;
    var comparate = comparates[0];

    input.addEventListener("change", (function(input, comparate) {
      return function() {
        comparePasswords(input, comparate);
      }
    })(input, comparate));

    comparate.addEventListener("change", (function(input, comparate) {
      return function() {
        comparePasswords(input, comparate);
      }
    })(input, comparate));
  }

}());