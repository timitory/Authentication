import Validations from "./Validations";

export default class SignupValidations {
    constructor(email,password){
        this.email=email,
        this.password=password,
        this.confirmPassword=this.confirmPassword
    }
    checkValidations(){
        let errors=[];
        if(!Validations.checkEmail(this.email)){
            errors['email']='Email pattern Incorrect'
        }
        if(!Validations.checkPassword(this.password,6)){
            errors['password']='Password should have minimum of 6 characters'
        }
        if(!Validations.ConfirmPassword(this.confirmPassword,this.password)){
            errors['confirmPassword']='Password should Match with the above password entered'
        }
        return errors
    }
    static getErrorMessagefromServer(errorCode){
        switch(errorCode) {
            case 'EMAIL_EXISTS' :
                return 'Email Already Exist'
                case 'EMAIL_NOT_FOUND' :
                return 'Email Not Valid'
            case 'INVALID_PASSWORD' :
                return 'Password is not valid'
            case 'USER_DISABLED' :
                return 'User has been disabled'
                default:
                    return 'An Unexpected error Occurred.Try Again Later'
        }
    }
    // getErrorMessager(erooing){
    //     switch(erooing) {
    //         case 'EMAIL_NOT_FOUND' :
    //             return 'Email Not Valid'
    //         case 'INVALID_PASSWORD' :
    //             return 'Password is not valid'
    //         case 'USER_DISABLED' :
    //             return 'User has been disabled'
    //             default:
    //                 return 'An Unexpected error occured.Try Again Later'
    //     }
    // }
}