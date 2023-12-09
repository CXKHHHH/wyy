<template>
      <div class="w-[100vw] overflow-hidden ">
         <Card :title="resource.uiElement.subTitle.title"></Card> 
          <Scroll>
            <div class="flex" :style="{ width: `${this.resource.creatives.length * 31}vw` }">
              <div class="w-[25vw] ml-7 " v-for="creatives in this.resource.creatives" :key="creatives.id">
                <img  class="rounded-xl relative" :src="creatives.uiElement.image.imageUrl" alt="">
                <!-- <span class="play absolute "><Icon  class=" text-4xl" icon="ph:play-fill" /></span> -->
                <div class="text-[3vw]">
                  {{creatives.uiElement.mainTitle.title}}
                </div>
              </div>
             </div>

          </Scroll>
          <div class="w-[10vw] h-[20vw] "> 

          </div>
     </div>      
</template>

<script>
import Swiper  from 'swiper';
import 'swiper/css/swiper.min.css';
import Card from "./card.vue"
import Scroll from "@/components/scroll.vue"
export default {
  props:{ 
    resource:{
      type:Object,
      required:true
    }
  },
  components:{
    Card,
    Scroll
  },
created(){
  console.log(this.resource)
},
 updated(){
    new Swiper ('.swiper-containere', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
     autoplay: {
          delay: 1000, // 5秒切换一次
        },
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
     },
        })        
  },
  
}
</script>

<style>
.play{
top: 145px;
left: 145px;
}
</style>