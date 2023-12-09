//对axios做一些配置
import axios from "axios";
import store from "@/store"
import axiosRetry from "axios-retry";
// axios.create返回值是一个新的axios实例
const request = axios.create({
    baseURL:'http://127.0.0.1:3000',
    timeout:3000,
    withCredentials:true,//跨域携带cooike
})
axiosRetry(request,{retries:3})
//每一次请求都会触发的函数如何设置
//如何设置请求拦截器
request.interceptors.request.use((config)=>{
    // console.log(config)
    // config是你每次发起请求的详细配置(请求的地址,路径,参数等)
    //在这个位置可以对请求配置做更改
    const cookie  = store.state.auth.cookie
    if(cookie){
        // 策略模式
        ({
            get(){
                config.data||(config.data={})
                config.data.cookie = cookie
            },
            post(){
                config.params||(config.params={})
                config.params.cookie = cookie
            }
        })[config.method]()
        // if(config.method =="post"){
        //     config.data||(config.data={})
        //     config.data.cookie = cookie
        // }
        // if(config.method =="post"){
        //     config.params||(config.params={})
        //     config.params.cookie = cookie
        // }
    }
    return config

})

// _axios和axios 99%功能一致
window.axios = axios
window.request = request

// axios.get("/abc") => hhtp:locahost:8080/abc  
//基础请求地址baseURL
export default request