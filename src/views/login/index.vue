<template>
  <div>
    <input type="tel" v-model="phone">
    <button @click="sendCode()">发送验证码</button>
    <input type="number" maxlength="4" minlength="4" v-model="captcha">
    <button @click="login()">登录</button>
  </div>
</template>

<script>
import { getCaptcha,loginCellphone } from "@/service";
export default {
    data(){
        return{
            phone:"",
            captcha:''
        }
    },
    methods:{
        async sendCode(){
            // if(!/^1[3456789]\d{9}$/.test(this.phone)) return alert('手机号不合法')
            const [err,res] = await getCaptcha({phone:13545665267})
            if(err) return alert('请求错误，请稍后再试')
            alert('验证码发生成功,请注意查收')
            console.log(res);
            },
        async login(){
            if(!/^\d{4}$/.test(this.Captcha)) return alert('验证码不合法')
            const [err,res] = await loginCellphone({phone:this.phone,captcha:this.captcha})
             if(err) return alert('请求错误，请稍后再试') 
             console.log(res)
        }
    }
  
}
</script>

