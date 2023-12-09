<template>
  <div class="w-[100%] h-[100vw] " >
  <AudioPlayer></AudioPlayer>
    <div class="w-[100vw] h-[80vw] text-[#FFFFFF] top" :style="{background:color}">
       <router-link to="/index">
      <van-sticky :offset-top="0"  >
        <van-button :style="{background:color,}" class="border">
    <div class="flex justify-between w-[94vw] h-[10vw]  text-5xl mt-6 m-auto ">
      <div class="flex w-[30vw] justify-between ">
        <router-link to="/index"><span class="text-[5vw] "><Icon icon="mdi:arrow-left" /></span></router-link> 
        <span class="text-[5vw] ">歌单</span>
      </div>
      <div  class="flex w-[20vw] justify-between " >
        <span class="text-[5vw] "><Icon icon="simple-line-icons:magnifier" /></span>
        <span class="text-[5vw] "><Icon icon="mingcute:more-2-fill" /></span>
      </div>
    </div>
     </van-button>
        </van-sticky> 
        </router-link>
    <div class="flex w-[94vw] h-[21vw] m-auto ml-[6vw] mt-6">
      <div >
        <img  class="w-[21vw] rounded-2xl" v-if="tites!=undefined" :src="tite.coverImgUrl" alt="">
      </div>
      <div class=" ml-8">
        <p class=" text-[5vw] w-[60vw] sier ">{{tite.name}}</p>
        <div class="mt[1vw]">
          <img   class="w-[7vw] rounded-full float-left" v-if="tites!=undefined" :src="tites.avatarUrl" alt="">
          <span class="sets ml-[3vw] white text-[#FFFFFF]" v-if="tites!=undefined">{{tites.nickname}}</span>
          <span class="bg-[#FFFFFF] ml-[5vw] text-[2vw]  inline-block w-[9vw] h-[4vw] text-center rounded-2xl opacity-60  leading-[4vw] white  mt-[1vw]">+关注</span>
          <div class="flex ">
             <p  class="mt-5 ml-[4vw]" v-for="(item,index) in 2" :key="index ">
                 <span class=" flex w-[8vw] h-[4vw] bg-[#FFFFFF] leading-8 white opacity-60 justify-around">
                    <span class="text-[2.5vw] leading-[3.5vw] text-[#000000]">潮流</span>
                   <span class=" float-right mt-[1vw] text-[#000000]"><Icon class="text-[2vw]" icon="fa6-solid:right-from-bracket" /></span>
                 </span>
                 </p>
              </div>
           </div>
         </div>
        <div>
      </div>        
    </div>
    <p class=" text-[5vw] w-[80vw] ml-[6vw] white mt-[15vw] text-[#FFFFFF]">{{tite.description}}</p>
    <div class="w-[94vw] h-[20vw]  m-auto mt-[2vw] flex justify-around">
      <div class="w-[25vw] h-[10vw] bg-[#FFFFFF] opacity-30 rounded-full mt-[1vw]  flex items-center">
        <span class="block w-[10vw] h-[6vw] ml-[3vw]  ">
          <Icon class="m-auto text-[6vw] text-[#a08d8d]" icon="uil:share" />
          </span>
            <span class="text-[4.5vw] text-[#a08d8d]">{{tite.trialMode}}</span>
        </div>
      <div class="w-[25vw] h-[10vw] bg-[#FFFFFF] rounded-full mt-[1vw]  opacity-30   flex items-center"  >
        <span class="block w-[10vw] h-[6vw] ml-[3vw] ">
          <Icon class="m-auto text-[6vw] text-[#a08d8d]" icon="uiw:message" />
          </span>
        <span class=" text-[4vw] text-[#a08d8d]">{{tite.commentCount}}</span>
        </div>
      <div class="w-[25vw] h-[10vw] rounded-full mt-[1vw] bg-[#FD2C3F] flex items-center ">
        <span class=" block w-[10vw] h-[6vw]  ml-[3vw]">
          <Icon class="m-auto text-[6vw] text-[#a08d8d] " icon="ph:folder-plus-bold" />
          </span>
        <span class="text-[4vw] text-[#a08d8d]">{{tite.commentCount}}</span>
        </div>
   </div>
  </div>
  <div class="w-[100%] h-[]  " ref="box" :style="{background:color}">
     <div class="w-[100%] h-[2vw] bg-[#FFFFFF] bot" @click="playsong()"> 
   <van-sticky :offset-top="40" >
        <van-button type="" class="bg-[#FFFFFF]">
        <div class="w-[94vw] h-[6vw] m-auto flex justify-between text-4xl lead mt-[4vw] konw" >
          <div class="flex w-[40vw] justify-between">
            <span class=" text-[5vw] text-[#ED2672]"><Icon icon="icon-park-solid:play" /></span>
            <span class=" text-[5vw] w-[20vw] sfyr" >播放全部</span>
            <span class="text-[5vw] sfyr">({{playlist.length}})</span>
          </div>
          <div class="flex  w-[14vw] justify-between text-5xl">
            <span class="text-[5vw]"><Icon icon="iconoir:download" /></span>
            <span class="text-[5vw]"><Icon icon="octicon:three-bars-16" /></span>
          </div>
        </div>
        </van-button>
        </van-sticky>  
        <div class="musc ">
          <ul class="w-[90vw] m-auto">
            <li class="h-[13vw] flex justify-between mt-[2vw]" v-for="(item,index) in playlist" :key="index">
              <div class="w-40vw flex"> 
                <div class="w-[10vw]"> 
                    <h3 class=" mt-3 text-[3vw]">{{index+1}}</h3>
                  </div>
                    <div class="flex flex-col " @click="listen(index)">
                      <span class="text-[3.5vw] w-[30vw] whert">{{item.name}}</span>
                      <span>{{item.ar[0].name}}</span>
                    </div>
               </div>
              <div class=" text-[4vw]">
                <Icon icon="mingcute:more-2-fill" />
              </div>
             </li>
          </ul>
        </div>
    </div>
   
  </div>

</div>
</template>

<script>
import {getPlaylist} from "@/service"
import {mapState} from "vuex"

export default {
  data(){
    return{
      activeNames: ['1'],
      tite:'',
      tites:"", 
  
      position:'static',
      color:"",
      banbaner:"",
       
    }
  },
  computed:{
    ...mapState(["playlist"]),
     ...mapState(["tracks"])
  },
  methods:{
    async cont(add){
         const [err,res] = await getPlaylist({id:add})
         if(err) return
         console.log(res)
         this.tite=res.data.playlist
         this.tites=res.data.playlist.creator
         console.log(this.tite)
         console.log(this.$route.query.id)
    },
     
    randomColor(){
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      this.color = color
      // return color;
    },
    playsong(){
      this.mixin_player.replaceTracks(this.tracks)
    },
    singles(add){
      this.$store.dispatch("requsermusic",add)
    },
    listen(add){
          this.mixin_player.Corresponding(add)
          console.log(this.playlist[add])
          // this.musices(Number(this.tracks[add]))
    },
  },
   created(){
      this.cont(this.$route.query.id)
      this.randomColor()
      this.singles(this.$route.query.id)
      this.banbaner =this.$route.query.id 
   },

   
}
</script>

<style scoped>
.border{
  border: none;
}
.konw{
  color: black;
}
.red{
  background: red;
}
 .top{
  border: 1px solid rgba(0, 0, 0, 0.1);
 }
 .sets{
  line-height: 5vw;
 }
 .sier{
  color:white;
 }
 .whert{
 white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
 }
 .white{
 
  white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
 }
 .heig{
  line-height:20vw ;
 }
 .bot{
  border-radius:5vw 5vw 0 0;
 
 }
 .sfyr{
  line-height: 5vw;
 }
</style>