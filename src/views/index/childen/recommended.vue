<template>
      <div class="w-[100vw] overflow-hidden">
         <Card :title="resource.uiElement.subTitle.title"></Card> 
          <Scroll>
            <div class="flex" :style="{ width: `${this.resource.creatives.length * 31}vw` }">
                <!-- 轮播 -->
                <div class="swiper-containered w-[40vw] h-[30vw] rounded-xl ml-[10vw] overflow-hidden">
                    <div class="swiper-wrapper relative">
                        <div class="swiper-slide w-[27vw]"  v-for="creatives in this.resource.creatives" :key="creatives.id" >
                          <img :src="creatives.uiElement.image.imageUrl" alt="">
                              <p class="text-[2.5vw] h-[29vw]">{{creatives.uiElement.mainTitle.title}}</p>
                          </div>
                    </div>
              </div>
              
              <div class="w-[40vw] ml-[4vw] relative" v-for="(creatives,index) in this.resource.creatives" :key="index" @click='dian(index)'>
                <router-link :to="{path:'/radar',query:{id:creatives.creativeId}}">
                  <img  class="rounded-xl " :src="creatives.uiElement.image.imageUrl" alt="">
                </router-link>
                <!-- <img  class="rounded-xl " :src="creatives.uiElement.image.imageUrl" alt=""> -->
                 
                <!-- <span class="play absolute "><Icon  class=" text-[3vw]" icon="ph:play-fill" /></span> -->
                <div class=" text-[2.5vw]">
                  {{creatives.uiElement.mainTitle.title}}
                </div>
              </div>
             </div>
          </Scroll>
         
        
     </div>      
</template>

<script>
// import radar from "./radar.vue"
import Swiper  from 'swiper';
import 'swiper/css/swiper.min.css';
import Card from "./card.vue"
import Scroll from "@/components/scroll.vue"
export default {

  methods:{
    dian(arr){
    //  console.log(this.resource.creatives[arr].creativeId)
     this.data=this.resource.creatives[arr].creativeId
     console.log(this.data)
    }
  },
  props:{ 
    resource:{
      type:Object,
      required:true
    }
  },
  components:{
    Card,
    Scroll,
    // radar
  },
created(){
  // this.dian()
  console.log("歌单",this.resource)
},
 updated(){
    new Swiper ('.swiper-containered', {
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