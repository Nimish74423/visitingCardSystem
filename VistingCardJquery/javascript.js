$("#firstForm").validate({
    
    rules:{
        firstName: {
            minlength: 2
        },
        email:{
            email: true
        },
        lastName:{
            minlength: 2
        },
        phoneNumber:{
            phoneUS: true
            
        },
        comanyName:{
            minlength: 2
        },
        designation:{
            minlength: 2
        },
        address:{
            minlength: 2
        }
        

    },
    messages: {
        firstName:{
            required: "Please enter your first name",
            minlength: "Name at least 2 characters"
        },
        lastName:{
            required: "Please enter your last name",
            minlength: "Name at least 2 characters"
        },
        phoneNumber:{
            required:"Please enter your phone number",
            phoneUS: "Enter a valid number"
        },
        comanyName:{
            required: "Please enter your company name",
            minlength: "Name at least 2 characters"
        },
        designation:{
            required: "Please enter your designation",
            minlength: "Name at least 2 characters"
        },
        address:{
            required: "Please enter your address",
            minlength: "Name at least 2 characters"
        }
    },
    
    submitHandler: function(form) {
        
      form.submit();
    }
   });


//    var form1 = $("#firstForm");
//     var firstName = $("#fName");
//     var lastName = $("#lName");
//     $(form1).on("submit", function(event){
//         event.preventDefault();
//         localStorage.setItem('firstName', firstName)
//         window.location.href = "visitingCard.html";

//     });

