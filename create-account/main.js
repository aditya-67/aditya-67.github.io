// Add the novalidate attribute when the JS loads
var forms = document.querySelectorAll('.validate');

var togglePassword = document.getElementById('togglePassword');

var password = document.getElementById('password');

var submitButton = document.getElementById('submit');

let errors = []


for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}

forms[0].addEventListener('change', function(event){
    if(!hasError(event.target)){
        if(!errors.includes(event.target.id)){
        errors.push(event.target.id);
    }
}
    else{
        if(errors.includes(event.target.id)){
           errors.splice(errors.indexOf(event.target.id), 1);
    }       
     
    }
    // If there are errrors, don't submit form and focus on first element with error
    if(errors.length == 4){
        submitButton.disabled = false;
        submitButton.classList.add('enabled');
    }
    else{
        submitButton.disabled = true;
        submitButton.classList.remove('enabled');
    }
})

// Validate the field
var hasError = function (field) {

    // Don't validate submits, buttons, file and reset inputs, and disabled fields
    if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;

    // Get validity
    var validity = field.validity;

    // If valid, return null
    if (validity.valid) return;

    // If field is required and empty
    if (validity.valueMissing) return 'Please fill out this field.';

    // If not the right type
    if (validity.typeMismatch) {

        // Email
        if (field.type === 'email') return 'Please enter a valid email address.';


    }

    // If too short
    if (validity.tooShort) return 'Please lengthen this text to ' + field.getAttribute('minLength') + ' characters or more. You are currently using ' + field.value.length + ' characters.';

    // If too long
    if (validity.tooLong) return 'Please shorten this text to no more than ' + field.getAttribute('maxLength') + ' characters. You are currently using ' + field.value.length + ' characters.';

    // If number input isn't a number
    if (validity.badInput) return 'Please enter a number.';

    // If a number value doesn't match the step interval
    if (validity.stepMismatch) return 'Please select a valid value.';

    // If a number field is over the max
    if (validity.rangeOverflow) return 'Please select a value that is no more than ' + field.getAttribute('max') + '.';

    // If a number field is below the min
    if (validity.rangeUnderflow) return 'Please select a value that is no less than ' + field.getAttribute('min') + '.';
  
      // If pattern doesn't match
    if (validity.patternMismatch) {

        // If pattern info is included, return custom error
        if (field.hasAttribute('title')) return field.getAttribute('title');

        // Otherwise, generic error
        return 'Please match the requested format.';

    }

    // If all else fails, return a generic catchall error
    return 'The value you entered for this field is invalid.';

};


// Show an error message
var showError = function (field, error) {

    // Add error class to field
    field.classList.add('error');
    if(field.id != 'select'){
    field.nextElementSibling.classList.add('label-error');
    }

    // Get field id or name
    var id = field.id || field.name;
    if (!id) return;

    // Check if error message field already exists
    // If not, create one
    var message = field.form.querySelector('.error-message#error-for-' + id );
    if (!message) {
        message = document.createElement('div');
        message.className = 'error-message';
        message.id = 'error-for-' + id;
        
        var label;

        // Otherwise, insert it after the field
        if (!label) {
            field.parentNode.after(message);
        }

    }
    
    // Add ARIA role to the field
    field.setAttribute('aria-describedby', 'error-for-' + id);

    // Update error message
    message.innerHTML = error;

    // Show error message
    message.style.display = 'block';
    message.style.visibility = 'visible';

};


// Remove the error message
var removeError = function (field) {

    // Remove error class to field
    field.classList.remove('error');
    if(field.id != 'select'){
        field.nextElementSibling.classList.remove('label-error');
    }
    
    // Remove ARIA role from the field
    field.removeAttribute('aria-describedby');


    // Get field id or name
    var id = field.id || field.name;
    if (!id) return;
    

    // Check if an error message is in the DOM
    var message = field.form.querySelector('.error-message#error-for-' + id + '');
    if (!message) return;

    // If so, hide it
    message.innerHTML = '';
    message.style.display = 'none';
    message.style.visibility = 'hidden';

};

//Toggle Password view
togglePassword.addEventListener('click', function(event){
    
    this.classList.toggle('fa-eye-slash');
    if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
})


// Listen to all blur events
document.addEventListener('blur', function (event) {

    // Only run if the field is in a form to be validated
    if (!event.target.form.classList.contains('validate')) return;

    // Validate the field
    var error = hasError(event.target);
  
    // If there's an error, show it
    if (error) {
        showError(event.target, error);
        return;
    }

    // Otherwise, remove any existing error message
    removeError(event.target);

}, true);


document.addEventListener('submit', function (event) {

    // Let the form submit normally
    // You could also bolt in an Ajax form submit process here

}, false);