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
	  },
	  fName:{
		  required: 'Please enter your first name.',
	  },
	  lName:{
		  required: 'Please enter your last name.',
	  },
	  uName:{
		  required: 'Please choose a username.',
	  },	  
	 	password2:{
		  required: 'Please re-enter your password.',
		  equalTo: 'Both passwords should match.'
	  }
  }
    });
    });