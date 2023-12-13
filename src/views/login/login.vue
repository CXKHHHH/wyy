<template>
  <div class="w-[100vw] h-[40vw]">
        <h3 class="flex justify-around h-[20vw] tit " ><router-link to="/index"><span>x</span></router-link> <span>游客登录</span></h3>
        <div v-if="less!=true">
        <div><Icon icon="ri:netease-cloud-music-fill" class="wangt text-9xl  m-auto"/> </div>
        <div class="npu w-[70vw] h-[15vw]  m-auto rounded-2xl mt-40  flex">
            <router-link to="/poer">
            <span class="add  w-[20vw] h-[15vw] text-[5vw]  text-center flex items-center" @click="ant">+86  
                 <Icon icon="tabler:triangle-inverted-filled" class=" text-[3vw]" />
                 </span></router-link>
            <input type="text" class="w-[40vw] h-[10vw] text-[4vw] mt-2 " v-model="phones">
            <span class="empty inline-block text-center w-[5vw] h-[5vw] mt-4">x</span>
        </div>
       
        <div class="w-[100vw] h-[17vw] mt-14">
            <button class="w-[70vw] h-[15vw] m-auto block " @click="sendCode()">获取验证码</button>
        </div>
        <div class="w-[100vw] h-[25vw] text-center">
            <input type="checkbox" name="" id="" v-model="falg"><span>我已阅读并同意<a href="#">《隐私协议》</a>,<a href="">《隐私政策》</a></span>
        </div>
       
        </div>

        <div v-if="less==true" @click="angt">
        <P class="flex justify-around text-5xl w-[76vw]" ><span>输入验证码</span><span></span></P>
        <p class="flex justify-around text-3xl mt-4" ><span>验证码已发送至+86 {{phones}}</span><span></span></p>
        <!-- 密码输入框 -->
        <van-password-input
          :value="value"
          :length="4"
          :mask="false"
          :focused="true"
        />
        <!-- 数字键盘 -->
        <input type="text" v-model="value" ref="input" class="input">
         <router-link to="/index"><button @click="login()" class="langth"><Icon class="ml-[2vw]" icon="ph:arrow-left-bold" /></button></router-link> 
        </div>
  </div>
</template>

<script>
// import Poer from "@/views/login/poer"
import { getCaptcha,} from "@/service";
export default {
    // components:{
    //     Poer
    // },
    data(){
        return{
            phones:13545665267,
            captcha:'',
            falg:false,
            less:false,
            value: '',
            showKeyboard: false,
        }
    },
    watch:{
        value(newVal){
            // console.log(newVal)
            if(newVal.length==4){
            this.captcha = newVal
            console.log(this.captcha)
            // this.login()
            }
        }
    },
    methods:{
        async sendCode(){
            if(!this.falg==true)return alert('必须勾选')
            if(!/^1[3456789]\d{9}$/.test(this.phones)) return alert('手机号不合法')
            const [err,res] = await getCaptcha({phone:this.phones})
            if(err) return alert('等一下重新试一下')
            alert('验证码发送成功')
            this.less = true
            this.showKeyboard=true
            console.log(res)
        },
         login(){
   
        this.$store.dispatch("requestLoginCellphone",{
            phone:this.phones,
            captcha:this.captcha
            })
        },
       angt(){
            this.$refs.input = blur()
       },
       ant(){
        console.log(1)
       }
        
   }
}
</script>

<style>
.langth{
    color:#6C757B;
    background: #F1F2F4;
    width: 10vw;
    margin: auto;
    height: 10vw;
    margin-left: 40vw;
}
.input{
    position: absolute;
    left: -10vw;
}
.tlt{
    background: red;
    width: 50vw;
    height: 20vw;
}
.tit{
    line-height: 20vw;
    color: #A9ADB5;
}
.wangt{
    color: red;
}
.npu{
    background:#F1F2F3;
}
.add{
    line-height: 15vw;
}
input{
    line-height: 13vw;
    background: none;
    outline: none;
    font-weight: 900;
}
.empty{
    background:#C2C2C3;
    color: #F3F3F4;
    border-radius: 50%;
    line-height: 3.5vw;
    font-size:30px;
    font-weight: 900;
}
button{
    background: #EB4D44;
    border-radius: 12vw;
    font-size: 6vw;
    color: white;
     margin-top: 20vw;
}
</style>