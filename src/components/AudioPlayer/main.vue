<template>
 <div class="w-[100vw] h-[10vw] bg-[#FFFFFF] fixed bottom-[14vw]  flex justify-around dark:bg-[#2C2C2C]"  >
        <div  class="w-[60vw] flex">
          <span class="w-[20vw] h-[10vw] " v-if="mixin_player.currentTrackDetail.al !=undefined">
            <img class="w-[10vw] h-[10vw] ml-[4vw] rounded-[20vw] inline-block" :src="mixin_player.currentTrackDetail.al.picUrl" alt="">
          </span>
          <div class="flex flex-col text-[3vw]">
            <router-link to="/music"  class="flex flex-col ">
          <span class=" inline-block w-[30vw]" >{{mixin_player.currentTrackDetail.name}}</span>
          <span>{{mixin_player.currentTrackDetail.ar[0].name}}</span>
          </router-link>
          </div>
        </div>
        <div class="w-[30vw] h-[10vw]  flex justify-around">
          <div class="h-[10vw] w-[20vw]" @click="mixin_player.playing!=false?check():play()">
            <span class=" text-[6vw]" >
              <Icon style="z-999"  class=" absolute right-[18vw] top-[1vw] " :icon="mixin_player.playing==false?'cil:media-play':'gg:play-pause'" />
              </span>
           <van-circle color="red"   style="height:8vw;"  :value="mixin_player.propress*100" speed="100"   />
          </div>
         <div class="h-[10vw] w-[20vw]">
            <van-cell is-link title="" @click="show = true"  style="background:none"/>
            <van-action-sheet v-model="show" title="歌曲切换" style="height:70vw">
                <div class=" flex text-[5vw] justify-between w-[90vw] h-[13vw] overflow-hidden m-auto" v-for="(item,index) in playlist" :key="index" >

                    <span class="w-[50vw] " v-if="item.name!=undefined" @click="listen(index)">{{item.name}}</span>
                    <span class="w-[6vw] text-center">x</span>
                </div>
            </van-action-sheet>

        </div>
    </div>
     </div>
</template>

<script>
import { Toast } from 'vant';
import {mapState} from "vuex"
export default { 
    name:"AudioPlayer",
    data(){
      return{
        show:false,
       
      }
    },
    computed:{
      ...mapState(["playlist"])
    },
    methods:{
      onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    check(){
      console.log(111)  
      this.mixin_player.suspend()
      
    },
   play(){
     console.log(111)  
     this.mixin_player.play()
     
   },
    listen(add){
          this.mixin_player.Corresponding(add)
          console.log(this.playlist[add])
          // this.musices(Number(this.tracks[add]))
    },
    }
 
}
</script>

<style>
 
</style>