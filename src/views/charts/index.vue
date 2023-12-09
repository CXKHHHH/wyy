<template>
  <div class="w-[100%] h-[30vw] dark:bg-[#1E1F1C] dark:text-[#FFFFFF]">
    <h1 class=" text-center h-[13vw] leading-[14vw] font-black">MV排行榜</h1>
    <van-tabs v-model="active" animated @click="long()" >
      <van-tab v-for="(item,index) in arr" :key="index" :title="item" class="dark:bg-[#1E1F1C] dark:text-[#FFFFFF]" >
         <div v-for="(item,index) in MV" :key="index" class="h-[64vw] m-[4vw] dark:bg-[#1E1F1C] dark:text-[#FFFFFF]"  >
            <router-link :to="{path:'/mv',query:{id:item.id}}">
            <img class="w-[94vw] h-[50vw] rounded-[3vw]" :src="item.cover" alt="">
            </router-link> 
            <p class="ml-[3vw] text-[5vw] w-[80vw] whert h-[9vw] mt-[1vw]">
                <span class=" inline-block w-[10vw] h-[10vw] text-center">{{index+1}}</span>
                {{item.name}}</p>
            <p class="ml-[6vw] text-[3vw]">{{item.artistName}}</p>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import {mapState} from "vuex"
// import {getMvdice} from "@/service"
export default {
    data() {
      return {
        arr:["内地","港台","欧美","韩国","日本"],
        active: 1,
        id:""
      };
  },
  methods:{
      long(){
        this.$store.dispatch('requestMv',{
          area:this.arr[this.active]
        })
      },
  },
  computed:{
        ...mapState(['MV'])
  },
  created(){
      console.log(this.MV);
  }
  
}
</script>

<style scoped>
 .whert{
 white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
 }
</style>