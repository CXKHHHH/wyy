<template>
  <div class=" bg-[#EEEFF2] dark:bg-[#1E1F1C]">
       <div class="header h-[16vw] w-[100vw] text-3xl flex   justify-around items-center ;">
          <div class="dark:text-[#FFFFFF]">
                <Icon icon="octicon:three-bars-16" />
          </div>
                <div class="  dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r opacity-0.2 w-[75vw] h-[10vw]  rounded-[25px]">
                    
                    <input type="text" class="Serch border-none mt-3 outline-0 ml-1 bg-inherit" placeholder="" >
                </div>
          <div class="dark:text-[#FFFFFF]">
             <Icon icon="simple-line-icons:magnifier" />
          </div>
      
      </div>
         <blocks :title="auth" ></blocks>
         <muctitle></muctitle>
         <favorite></favorite>
         <playlist></playlist>
       
  </div>
</template>

<script>

import muctitle from  "./childen/muctitle.vue"
import blocks from "./childen/block.vue"
import favorite from "./childen/favorite.vue"
import playlist from "./childen/playlist.vue"
import {mapState} from "vuex"
export default {
    computed:{
   ...mapState(['auth'])
  },
      components:{
    
        blocks,
        muctitle,
        favorite,
        playlist
      }
}
</script>

<style >
  .Serch{
    background: none;
 
  }
 
 
</style>