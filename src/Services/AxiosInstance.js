import axios from "axios";
import store from '../store/store.js'
import {LOGIN_USER_GETTER} from '../store/storeconstants.js'

 const axiosInstance=axios.create({

 })
 axiosInstance.interceptors.request.use(config=>{
    let params=new URLSearchParams();
    let token = store.getters[`auth/${LOGIN_USER_GETTER}`]
    params.append('auth',token)
    config.params = params;
    return config;
 })
 export default axiosInstance;