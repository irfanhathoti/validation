$("#formValidation").validate({
    rules: {
        name: {
            minlength: 2,
        },
        email:{
            email:true,
            // pattern:'/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/'
            
        },
        phone:{
            number:true,
            minlength:10,
            maxlength:10
        }
    },
    messages: {
        name: {
            required: "please enter your name",
            minlength: 'Name Atleast 2 charecter'
        },
        email:{
            email:"please enter your email",
            // pattern:'please enter valid email'
        },
        phone:'enter your number'


    },
    submitHandler: function (form) {
        // some other code
        // maybe disabling submit button
        // then:
        $(form).submit();
    }
});