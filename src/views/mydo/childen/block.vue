<template>
  <!-- 主页头像 -->
  <div class="h-[35vw] ]">
    <div class="w-[100%] h-[35vw]red mt-4 ">
      <div class="ser w-[94vw] h-[25vw]  m-auto relative top-9 rounded-xl bg-[#FFFFFF] dark:bg-[#2C2C2C] dark:text-[#FFFFFF]">
        <div class=" absolute top ml-[38%] -mt-[10vw] " >
          <img class="w-[20vw] img "  :src="user.avatarUrl" alt="">
          <!-- {{}} -->
        </div>
        <div class="w-[80vw] h-[20vw] mt-[12%]  m-auto">
          <p class=" text-xl text-center">{{user.nickname}} <span></span></p>
          <div class="flex justify-around w-[45vw] m-auto">
             <span>关注 {{user.follows}}</span>|
             <span>粉丝 {{user.followeds}}</span>|
             <span>LV.{{user.follows}}</span>
           </div>
        </div>
      
    </div>
    </div>  
   
  </div>
</template>

<script>
import {getDetails} from "@/service";
export default {    
  props:{
    title:{
        type:Object,
        required:true,
        default(){
          return {}
        }
    }
  },
    data(){
      return{
         user:[],
      }
    },
     methods:{
          async onle(){
            const [err,res] = await getDetails({uid:this.title.account.id})
            if(err) return
            console.log(res.data.profile)
            // console.log(res.data.profile.nickname);
            this.user = res.data.profile
          }
        },
        created(){
        this.onle()
    }
}

</script>

<style scoped >
.ser{
     border: 1px solid transparent;
}
.red{
   border: 1px solid transparent;
  background:blue;
}
.img{
  border-radius: 50%;
  }
</style>