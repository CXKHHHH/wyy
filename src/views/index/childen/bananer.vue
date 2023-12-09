<template>
    <div>
       <div class=" w-[100vw] bg-[#E7E7FB] h-[29vw] dark:bg-[#2C2C2C]">
       <div class="swiper-container w-[80vw] h-[29vw] rounded-lg m-auto">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in banner" :key="item.blockStyle">
                  <img :src="item.imageUrl"   alt="">
                  </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
       </div>
         <!-- 推荐 -->
      <div class="recommend w-[100vw] overflow-hidden" >
          <ul class="flex ml-[7.5vw] mt-5 ">
            <li class="dark:text-[#FFFFFF] text-center w-[15vw] leading-[10vw] items-center text-[3vw] ">
              <Icon icon="ph:calendar-fill" class="text-[12vw] ml-[1vw] text-[#ef4444] font-[500] "/>
              每日推荐
            </li>
            <li class=" dark:text-[#FFFFFF] text-center w-[15vw] leading-[10vw] items-center text-[3vw] ml-8">
               <Icon icon="mdi:radio" class="text-[12vw] ml-[2vw] text-[#ef4444] font-[500]"/>
              私人调频
            </li>
           <li class="dark:text-[#FFFFFF] w-[15vw] text-center leading-[10vw] items-center text-[3vw] ml-8 ">
              <Icon icon="streamline:music-folder-song" class="text-[12vw] ml-[2vw] text-[#ef4444] font-[500]"/>
              歌单
            </li>
             <li class="dark:text-[#FFFFFF]  text-center w-[15vw] leading-[10vw] items-center text-[3vw] ml-8 ">
              <Icon  icon="solar:ranking-line-duotone"  class="text-[12vw] ml-[2vw] text-[#ef4444] font-[500]" />
              排行榜
            </li>
               <li class="dark:text-[#FFFFFF] text-center w-[15vw] leading-[10vw] items-center text-[3vw]  ml-8">
              <Icon icon="octicon:broadcast-16" class="text-[12vw] ml-[2vw] text-[#ef4444] font-[500]"/>
              直播
            </li>
          </ul>
      </div>
     </div>
</template>

<script>
import {Carousel} from "@/service/"
import Swiper  from 'swiper';
import 'swiper/css/swiper.min.css';
export default {
    data(){
        return{
            banner:[],
             }
    },
      async created(){
        Carousel().then((res)=>{
               const {1:{data:{banners}}}= res
                this.banner = banners
                  // console.log( banners);
                })//成功的回调
              .catch((err)=>{console.log(err)})//失败的回调
      },
updated(){
    new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
     autoplay: {
          delay: 3000, // 5秒切换一次
        },
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
             },
        })        
  }
}
</script>

<style>

</style>