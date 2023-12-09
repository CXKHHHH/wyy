<template>
  <div class="w-[94vw] h-[50vw] bg-[#FFFFFF] m-auto  rounded-xl mt-[3vw] dark:bg-[#2C2C2C] dark:text-[#FFFFFF]">
    <ul class=" application ">
        <li>
            <span><Icon icon="carbon:play-filled" /></span>
            <span>最近播放</span>
        </li>
        <li>
            <span><Icon icon="entypo:music" /></span>
            <span>本地下载</span>
        </li>
        <li>
            <span><Icon icon="mdi:shopping" /></span>
            <span>已购</span>
        </li>
        <li>
            <span><Icon icon="fa-solid:user-friends" /></span>
            <span>我的好友</span>
        </li>
        <li>
            <span><Icon icon="iconamoon:star-fill" /></span>
            <span>搜藏和赞</span>
        </li>
        <li>
            <span><Icon icon="material-symbols:cloud" /></span>
            <span>推荐精选</span>
        </li>
        <li>
            <span><Icon icon="mingcute:fire-fill" /></span>
            <span>云推歌</span>
        </li>
        <li>
            <span><Icon icon="ph:cassette-tape-fill" /></span>
            <span>经典专区</span>
        </li>
    </ul>
    <div class="w-[94vw] h-[10vw] bg-[#FFFFFF] m-auto  rounded-xl lset mt-[3vw] dark:bg-[#2C2C2C] dark:text-[#FFFFFF]" >
        <p  class=" text-center  color">+  音乐应用</p>
    </div>
  </div>
</template>

<script>
import { getSubcountt } from "@/service";
export default {
   methods:{
        async onc(){
            const [err,res] = await getSubcountt({id:1332232750})
            if(err) return
             console.log(res);
        }
   },
   created(){
    this.onc()
   }
}
</script>

<style scoped> 
.lset{
    border-top:2px solid #F3F3F3;
    color: #C2C4CA;
    line-height: 10vw;
}
.application{
    display: flex; 
    flex-wrap: wrap;
}
.application>li{
    text-align: center;
    display: flex;
    width: 23vw;
    height: 17vw;
    flex-direction: column;
    align-items: center;
    margin-top: 7vw;
}
.application>li>span:nth-child(1){
     font-size: 10vw;
    color: red;
    display: inline-block;
    text-align: center;
}

.application>li>span:nth-child(2){
    margin-top: 3vw;
     font-size: 2vw;
}
</style>