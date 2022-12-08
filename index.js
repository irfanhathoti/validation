const validation = () =>{
    // e.preventDefault()
    const email = document.getElementById('email')
    const name = document.getElementById('name')
    const password = document.getElementById('password')


    //error message
    const name_erropr = document.getElementById('error_name')
    const email_error = document.getElementById('email_error')
    const pass_error = document.getElementById('pass_error')

    if(email.value==''){
        email_error.innerHTML = 'email required'
        
        return false
    }
    if(name.value == ''){
        name_erropr.innerHTML = 'name required'
        return false
    }
    if(password.value==''){
        pass_error.innerHTML = 'password required'
        return false
    }else{
        if(email.value!=''){
            if(name.value!=""){
                return true
            }
        }
    }



}