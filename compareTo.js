$(function() {
  var confirm_password = $("input[compareTo]");
  var comparateName = confirm_password.attr("compareTo");
  var password = $("input[name=" + comparateName + "]");

  function validatePassword() {
    if (confirm_password.val() != password.val()) {
      confirm_password.get(0).setCustomValidity("These passwords don't match.");
    } else {
      confirm_password.get(0).setCustomValidity('');
    }
  }

  confirm_password.on("change", function() {
    validatePassword();
  });
  password.on("change", function() {
    validatePassword();
  });

});