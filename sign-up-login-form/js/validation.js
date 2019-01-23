$(function(){
    $("#register").validate({
    rules:{
    email:{
  required:true,
  email:true
  },
  password:"required",
  fName:"required",
lName:"required",
uName:"required",
  password2:{
	  required:true,
  equalTo:"#password"
  }
  },
  messages:{
	  email:{
		  required: 'Please enter an email address.',
		  email: 'Please enter a <em>valid</em> email address.'
	  },
	  password:{
		  required: 'Please enter a password.',
		  pattern: "/[A-Za-z0-9\w]{4,20}/",
		  minlength: "Your password must be atleast 5 characters long",

	  },
	  fName:{
		  required: 'Please enter your first name.',
		  pattern: 'yar',
		  minlength: 'Your first name must be at least 3 characters long',
		  maxlength: 'Your first name must be at most 20 characters long',

	  },
	  lName:{
		  required: 'Please enter your last name.',
		  pattern: /[A-Za-z]{1,32}/,
		  minlength: 'Your last name must be at least 3 characters long',
		  maxlength: 'Your last name must be at most 20 characters long',
	  },
	  
	  uName:{
		  required: 'Please choose a username.',
		  minlength: 'Your username must be at least 4 characters long',
 		  maxlength: 'Your username must be at most 20 characters long',

	  },	  
	 	password2:{
		  required: 'Please re-enter your password.',
		  equalTo: 'Both passwords should match.',
		 minlength: 'Your password must be atleast 5 characters long',
	  }
  }
    });
    });


jQuery.validator.addMethod("foo", function(value, element) {
    return this.optional(element) || /[A-Za-z]{1,32}/.test(value);
}, "Your entered data is not foo");

jQuery.validator.addMethod("bar", function(value, element) {
    return this.optional(element) || /^[\d\w\xC4\xD6\xDC\xE4\xF6\xFC\xDF]*$/.test(value);
}, "Your entered data is not bar");