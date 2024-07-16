import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
export default {
    namespaced:true,
    state:{
            email:'',
            password:'',
            userId:'',
            refreshToken:'',
            expiresIn:''
        
    },
    getters,
    mutations,
    actions
}