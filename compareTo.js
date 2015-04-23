(function() {

	function validatePassword(target, validator) {  
		if( validator.value !== target.value ) {
			validator.setCustomValidity("These passwords don't match.");
		} else {
			validator.setCustomValidity('');
		}

	}


	function setCompareTo() {  //sets up all elements of compareTo
		var allInputs = document.getElementsByTagName('input');
		for( var i=0; i<allInputs.length; i++ ) {

			if ( allInputs[i].hasAttribute('compareTo') ) {
				var targetname = allInputs[i].getAttribute('compareTo');
				var target = document.getElementsByName(targetname);

				if( target.length === 1 ) {  //make sure we reference exactly one element
					allInputs[i].addEventListener("change", (function(target, validator) {  //closure loop
							return function(){
								validatePassword(target, validator);
							};
						})(target[0], allInputs[i])
					);

					target[0].addEventListener("change", (function(target, validator) {  //closure loop
							return function(){
								validatePassword(target, validator);
							};
						})(target[0], allInputs[i])
					);
					

				}

			}
		

		}
	}



	setCompareTo();  //search for compareTo inputs and activate them

}());
