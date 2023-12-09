<template>
  <div class="w-[100%] h-[220vw] bg-[#786153] overflow-auto">
    <div class="flex text-[#FFFFFF] justify-around">
        <span class="text-[10vw]" @click="goBack()"><Icon icon="eva:arrow-ios-downward-outline" /></span>
        <p class="flex flex-col">
            <span class="w-[30vw]" ><van-notice-bar style="background:none;color:#FFFFFF"  scrollable :text="mixin_player.currentTrackDetail.name" /></span>
            <span class=" text-center" >{{mixin_player.currentTrackDetail.ar[0].name}}</span>
        </p>
        <span class="text-[10vw]"><Icon icon="bi:share" /></span>
    </div>
    <div class="w-[100vw] h-[80vw] mt-[35vw] ">
        <div class="w-[70vw] h-[70vw] bg-[#FFFFFF] rounded-[50vw] m-auto rotating-box overflow-hidden" >
                <img class="" :src="mixin_player.currentTrackDetail.al.picUrl" alt="">
        </div>
    </div>
    <div class=" flex w-[90vw] text-[10vw] text-[#FFFFFF] m-auto justify-around mt-[25vw] font-thin"> 
        <span><Icon icon="tabler:heart" /></span>
        <span><Icon icon="line-md:download-loop" /></span>
        <span><Icon icon="tabler:bell" /></span>
        <span><Icon icon="fluent:chat-12-regular" /></span>
        <span><Icon icon="mingcute:more-2-fill" /></span>
    </div>
    <div class="flex justify-around mt-[10vw]">
      <span class=" inline-block w-[10vw] text-[#FFFFFF] leading-[1vw]  text-center">{{mixin_player.duration}}</span>
        <span class=" inline-block w-[70vw] ">
           <van-slider  :value="mixin_player.propress*100"  :step="1"/>
        </span>
        <span class=" inline-block w-[10vw] text-[#FFFFFF] leading-[1vw]">{{time}}</span>
    </div>
    <div class="flex justify-between w-[80vw] m-auto mt-[8vw] text-[7vw] text-[#FFFFFF]">
        <span class=" mt-[3vw] w-[10vw]"><Icon icon="icon-park-outline:loop-once" /></span>
        <p class="flex justify-around w-[40vw]">
            <span class=" mt-[3vw]" @click="nextsong()"><Icon icon="fluent:previous-16-filled" /></span>
            <span class="text-[13vw]">
              <span  @click="mixin_player.playing==false?play():playpause()">
                <Icon :icon="mixin_player.playing==false?'zondicons:play-outline':'iconamoon:player-pause'" />
                </span>
             </span>
            <span class=" mt-[3vw]" @click="previoussong()"><Icon icon="fluent:previous-16-filled" :rotate="2" /></span>
        </p>
        <span class=" mt-[3vw] w-[10vw]">  
           <!-- <Icon icon="octicon:three-bars-16" /> -->
       <van-cell is-link @click="show = true"  style="background:none"/>
           <van-action-sheet v-model="show" title="歌曲" style="height:70vw">
            <div></div>
                <div class="content flex text-[5vw] justify-between w-[90vw] h-[9vw] overflow-hidden" v-for="(item,index) in playlist" :key="index" >
                    <span class="w-[10vw] text-center">{{index+1}}</span>
                    <span class="w-[50vw] " v-if="item.name!=undefined" @click="listen(index)">{{item.name}}</span>
                    <span class="w-[6vw] text-center" @click="delet(index)">x</span>
                </div>
          </van-action-sheet>
        </span>
    </div>
  </div>
</template>

<script>

import Player from "@/components/AudioPlayer/player.js"
import {mapState} from "vuex"
const player = new Player()
window.player =player
export default {
   data() {
    return {
      value: 1,
      sert:true,
      show: false,
      time:0,
      ar:[]
    };
  },
  computed:{
    ...mapState(['playlist']),
     ...mapState(['tracks'])
  },
  methods: {
 
    play(){
          this.mixin_player.play(this.tracks)
          // console.log(this.mixin_player.propress*100)
    },
     playpause(){
          this.mixin_player.suspend()
    },
    previoussong(){
          this.mixin_player.playNextTeack()
    },
    nextsong(){
          this.mixin_player.playupTeack()
    },
    listen(add){
          this.mixin_player.Corresponding(add)
          console.log(this.tracks[add])
          // this.musices(Number(this.tracks[add]))
    },
    goBack(){
       window.history.back()
    },
  },
  created(){
    setInterval(() => {
      if(this.mixin_player.propress*100>=60){
        this.time= "1"+":"+(Math.floor(this.mixin_player.propress*100)-60)
      }else{
      this.time="0"+":"+ Math.floor(this.mixin_player.propress*100)
      // console.log(this.mixin_player.duration)
      }
      
    }, 1000);
    
  }
}
</script>

<style>
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
 .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }

</style>