<template>
    <div class="bg-[#272822] w-[100vw] h-[200vw] text-[8vw] ">
        <div class="w-[94vw] h-[20vw] text-[#FFFFFF] flex justify-between  dark:bg-[#1E1F1C] dark:text-[#FFFFFF]" >
            <router-link to="/charts"><span class="mt-[3vw]"><Icon icon="teenyicons:left-small-outline" /></span></router-link>
            <span class="flex mt-[3vw] justify-between w-[25vw]">
                <span><Icon icon="fluent:panel-separate-window-20-regular" /></span>
                <span><Icon icon="mingcute:more-2-fill" /></span>
            </span>
        </div>
        <div class="w-[100vw] h-[65vw]  relative " v-if="video.url">
            <video id="player" playsinline controls ref="video" >
                <source :src="video.url" type="video/mp4"/>
            </video>
            <span class="text-[#FFFFFF] absolute top-[25vw] left-[45vw] " ref="Video" style="display:none"><Icon icon="solar:play-outline" /></span>
        </div>
        <div >
            <div class="flex justify-between " @click="suspend()">
                <div class="">
                    <div class="flex">
                            <img class="w-[11vw] rounded-[50vw] h-[11vw] border-[0.5vw] text-[#FFFFFF]" :src="img.cover" alt="">
                            <span class="text-[#FFFFFF] text-[4vw] leading-[10vw] ml-4">{{img.artistName}}</span>
                            <span class="bg-[#eb4d44] h-[5vw] w-[7vw] flex items-center justify-center rounded-[2vw] text-[#FFFFFF] text-[7vw] mt-[2.5vw] ml-[4vw]">+</span>
                     </div>
                     <div class="flex"> 
                        <span class="w-[7.3vw] h-[6vw] mr-[2vw] leading-[5.2vw] text-center inline-block bg-[#333333] text-[#ACACAC]">
                            <font class="text-[5vw]">MV</font> 
                        </span>
                        <span class="text-[4vw] h-[5vw] text-[#FFFFFF] leading-[1vw] mt-[3vw] flex">
                            {{img.name}}
                             <a class="text-[6vw] text-[#FFFFFF] " @click="prop()"><Icon icon="mingcute:down-small-line" /></a> 
                         </span>
                        <span >
                         </span>   
                     </div>
                     <p class="text-[3vw] w-[70vw] ml-[3vw] text-[#FFFFFF] h-[43vw] tre"  ref="waper" >
                        {{img.desc}}
                    </p>
                     <span class="w-[20vw] bg-[#FFFFFF] h-[10vw] ">
                            <van-notice-bar
                             scrollable 
                             color="#FFFFFF"
                             background="#272822"
                             :text="img.name"
                            />
                        </span>
                     <div>
                     </div>
                </div>
                <div>
                    <ul class="text-[6vw] w-[10vw] mt-[2vw]">
                        <li class="text-[#FFFFFF]">
                            <Icon  icon="uiw:like-o" />
                            <span class="text-[4vw] " >{{img.commentCount}}</span>
                            </li>
                        <li class="text-[#FFFFFF]">
                            <Icon icon="ant-design:message-outlined" />
                            <span class="text-[4vw] ml-[1vw]">{{img.subCount}}</span>
                            </li>
                        <li class="text-[#FFFFFF]">
                            <Icon icon="uil:share" />
                             <span class="text-[4vw] ml-[1vw]">{{img.shareCount}}</span>
                            </li>
                        <li class="text-[#FFFFFF]">
                            <Icon icon="fluent:collections-16-regular" />
                             <span class="text-[4vw]">收藏</span>
                            </li>
                        <li class="rotating-box"><img class="w-[8vw] rounded-[50vw] h-[8vw] border-[0.5vw] text-[#FFFFFF]" :src="img.cover" alt=""></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="w-[100vw] h-[20vw]">
            <div class="w-[94vw] h-[12vw] rounded-[10vw] bg-[#000000] m-auto">
                <p class=" leading-[12vw] text-[#4D4D4D] text-[4vw]">一起来输入弹幕吧</p>
            </div>
        </div>
   </div>
</template>

<script>
import {getMvdice,getmvDetail} from "@/service"
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
export default {
    data(){
        return{
            video:'',
            img:"",
            activeNames: ['1'],
            pop:true
        }
    },
    methods:{
        async idgive(add){
          const [err,res] = await getMvdice({id:add})
          if(err) return
          console.log(res)
          this.video= res.data.data
      },
       async idERT(add){
          const [err,res] = await getmvDetail({mvid:add})
          if(err) return
          console.log(res)
          this.img= res.data.data
      },
      prop(){
           console.log(1)
           if(this.pop==true){
              this.$refs.waper.style.display = "block";
              this.pop=false
           }else{
             this.$refs.waper.style.display = "none";
              this.pop=true
           }
         
      },
       suspend(){
         if (this.$refs.video.paused) {
      // 如果视频暂停了，则播放视频
            this.$refs.video.play();
             this.$refs.Video.style.display="none";
            } else {
            // 如果视频正在播放，则暂停视频
            this.$refs.video.pause();
             this.$refs.Video.style.display="block";
            }
      }
    },
    created(){
      this.idgive(this.$route.query.id)
      this.idERT(this.$route.query.id)
      console.log(this.$route.query.id)
     this.suspend()
  },
  mounted(){
        new Plyr(this.$refs.video,{
         
        })
        
    }
}
</script>

<style>
.tre{
    transition: 1s;
    /* transform: rotateX(); */
  display: none;
}
.rotating-box {
  animation: rotate 5s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>