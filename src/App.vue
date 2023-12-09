<template>
  <div id="app relative" :class="{dark:isDackMode}" >
    <div class="foot fixed z-20 w-[100vw] h-[14vw] bottom-0 dark:bg-[#2C2C2C] leading-none flex place-content-around bg-[#fff]">
      <router-link class="leading-8 mt-[2vw] dark:text-[#FFFFFF]" to="/index" >
          <span class="block h-[2vw]  mb-[1vw] dark:text-[#FFFFFF]">
               <Icon icon="ri:netease-cloud-music-fill" class="ml-2.5"/> 
          </span>
              首页
       </router-link>
      <router-link class="leading-8 mt-[2vw] dark:text-[#FFFFFF]"  to="/charts">
          <span class="block h-[2vw]  mb-[1vw]">
               <Icon icon="icon-park-outline:ranking" class="ml-2.5" />
          </span>
         
              排行
      </router-link>
      <router-link class="leading-8 mt-[2vw] dark:text-[#FFFFFF]"  to="/mydo">
          <span class="block h-[2vw]  mb-[1vw]">
              <Icon icon="uil:music" class="ml-2.5" />
          </span>
               我的
      </router-link>
      <router-link class="leading-8 mt-[2vw] dark:text-[#FFFFFF]" to="/comment">
          <span class="block h-[2vw]  mb-[1vw]">
            <Icon icon="arcticons:my-orange" class="ml-2.5" />
          </span>
              关注
             
      </router-link>
      <router-link class="leading-8 mt-[2vw] dark:text-[#FFFFFF]" to="/login">
          <span class="block h-[2vw] mb-[1vw]">
           <Icon icon="mingcute:wechat-line" class="ml-2.5"  />
          </span>
              社区
      </router-link> 
    </div>
     <transition name="fade">
    <router-view></router-view>
  </transition>
  
  </div>
</template>

<script>

import {mapState} from "vuex";

export default {
 
  computed:{
    ...mapState(['isDackMode'])
  },
  created(){
      this.$store.dispatch("resHomePageData")
  } 
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
