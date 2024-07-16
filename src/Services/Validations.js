export default class Validations{
    static checkEmail(email){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            {
              return (true)
            }
              alert("You have entered an invalid email address!")
              return (false)
    }
    static checkPassword(password,passwordlength){
        if(password.length < passwordlength){
            return false
        }
        else{
            return true
        } 


    }
    static ConfirmPassword(confirmPassword,passwordmatch){
        if(confirmPassword !==passwordmatch){
            return false
        }
        else{
            return true
        }

    }

}