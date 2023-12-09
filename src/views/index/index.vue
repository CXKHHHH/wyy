<template>
  <div class="absolute z-10 dark:bg-[#2C2C2C] dark:text-[#FFFFFF]">
    <!-- 搜索框 -->
      <div class="header h-[16vw] w-[100vw] text-3xl flex bg-[#E7E7FB]  justify-around items-center dark:bg-[#2C2C2C]" >
          <div>
            <van-cell @click="showPopup" style="background:none" class="dark:bg-[#FFFFFF]"><Icon icon="octicon:three-bars-16" /></van-cell>
          </div>
                <div class="dark:from-[#34304b]  dark:to-[#403246] dark:border-0 text-[4.47vw] pl-[8vw] bg-gradient-to-r from-[#d9ddfd] text-[#8189A1] to-[#f3d9ef] opacity-0.2 w-[75vw] h-[10vw] border-2 border-[#CCCEF7] rounded-[25px]">
                    <span class="line-block  float-left  mt-[2.5vw]"><Icon icon="simple-line-icons:magnifier" /></span>
                    <input type="text" class="Serch mt-[1.5vw] border-none  outline-0 ml-1 bg-inherit" placeholder="风吹丹顶鹤" v-model="music" @click ="search()">
                </div>
          <div>
              <Icon icon="wpf:microphone" />
          </div>
      </div>

       <Block v-for="item in blocks" :resource="item" :key="item.id"></Block>
      <van-popup v-model="show"  position="left"><vant :title="auth"></vant></van-popup>
  </div>
</template>
 
<script>

// import {getHottoPic} from "@/service"
import {cloudsearch} from "@/service"
// import {getHomePageData} from "@/service/"
import {mapState} from "vuex"
import Block from "./childen/block.vue"
import vant from "./childen/vant.vue"
export default {
   components:{//注册组件
    Block,
    vant
  },
  data(){
    return{
      music:"",
      banner:[],
      playlists:[],
      show: false,
      // blocks:[],getHottoPic
      // details:[]
    }
  },
  computed:{
    ...mapState(['blocks']),
    ...mapState(['auth'])
  },
   methods:{
     showPopup() {
      this.show = true;
    },
    //async函数本质上是Promise 语法糖(简写)
    async search(){             
      //post搜索七里香
      // axios.post(`/cloudsearch`,{keywords:'七里香'})
      const [err,res] = await cloudsearch({
        type:1,
        keywords:"蔡徐坤"
      })
      if(!err){
        console.log(res)  
           }
      },
   
  },
  async created(){

      //  const [error,homePageData] = await getHomePageData();
      // if(!error)this.blocks = homePageData.data.data.blocks
      // console.log(this.blocks)
  },

}
</script>

<style>
  .Serch{
 
    background: none;
  }
 
</style>
