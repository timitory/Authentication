import {LOGIN_USER_GETTER} from '../../storeconstants.js'
import {USER_IS_AUTHENTICATED} from '../../storeconstants.js'
export default{
    [LOGIN_USER_GETTER]:state =>{
        return state.userId;
    },
    [USER_IS_AUTHENTICATED]:state=>{
         return !!state.userId
    }
    
}