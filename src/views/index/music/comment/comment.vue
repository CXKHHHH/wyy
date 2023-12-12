<template>
  <div  class="w-[100vw]  bg-[#F6F6F6]">
    <div class="bg-[#FEFEFE] h-[30vw] w-[100vw]">
    <div class="bg-[#FEFEFE] h-[13vw] w-[100vw] m-auto flex justify-between " >
        <div class="w-[20vw]  text-[10vw] h-[10vw]  mt-[3vw]">
           <span class="ml-[4vw] inline-block " @click="goBack()"><Icon icon="ph:arrow-left-bold" /></span>
        </div>
        <div class="flex w-[30vw] justify-between text-[4.5vw] leading-[14vw] h-[12.5vw]">
            <span class=" border-b-[1vw] border-[#F92672]">评论</span>
            <span>瞬间</span>
        </div>
        <div class="flex text-[10vw] mt-[3vw] h-[10vw]">
            <span><Icon icon="solar:upload-track-2-bold" /></span>
            <span><Icon icon="ri:more-2-fill" /></span>
        </div>
      </div>
        <div class="bg-[#] w-[100vw] h-[10vw] mt-[4vw] flex ml-[5vw]">
           <span class=" inline-block w-[20vw] h-[10vw]">
                <img class="rounded-[50vw] w-[10vw] h-[10vw]  m-auto" :src="mixin_player.currentTrackDetail.al.picUrl" alt="">
           </span>
           <span class="flex  w-[60vw]">
                <span class=" inline-block w-[30vw] text-[3vw] leading-[10vw]" >{{mixin_player.currentTrackDetail.name}}</span>
                <span class=" leading-[10vw]">~</span>
                <span class=" text-[3.5vw] leading-[10vw]">{{mixin_player.currentTrackDetail.ar[0].name}}</span>
                <span class=" text-[3.5vw] leading-[10vw] text-[#F25354] ml-[3vw]">关注</span>
           </span>
         
        </div>
    </div>
    <div class="bg-[#FEFEFE] h-[100vw] mt-[3vw] ">
        <div class="flex justify-between">
            <span class="text-[3vw]">
                评论<span>(999)</span>
            </span>
            <div class="w-[30vw] flex justify-around" >
               <span class="text-[3vw] text-[]">推荐</span>
               <span class="text-[3vw] text-[#CCCCCC]">最热</span>
               <span class="text-[3vw] text-[#CCCCCC]">最新</span>
            </div>
        </div>
  
    <div class="w-[100vw]">
        <ul >
            <li v-for="(item,index) in comment" :key="index" class="bg-[#FEFEFE]">
                <div class="flex justify-between w-[90vw] m-auto mt-[2vw]">
                    <div class="flex">
                        <span class="w-[10vw] " >
                     
                            <span v-if="item.pendantData!=undefined" class=" absolute w-[10vw]">
                                <img class="w-[10vw] rounded-[50vw]" :src="item.pendantData.imageUrl" alt="">
                                </span>
                            <img class="w-[10vw] rounded-[50vw]" :src="item.user.avatarUrl" alt="">
                        </span>
                        <span class="flex flex-col w-[10vw] ml-[3vw]">
                            <span class="text-[2.5vw] w-[10vw]">{{item.user.nickname}}</span>
                            <span class=" text-[1.5vw] mt-[1.5vw] flex justify-between">
                                <span>{{item.timeStr}}</span><span>{{item.ipLocation.location}}</span>
                            </span>
                        </span>
                    </div>
                    <span class="flex w-[10vw] justify-between mt-[1.5vw]">
                       <span class="text-[3vw]">{{item.likedCount}}</span> 
                       <span class=" inline-block mt-[0.5vw] text-[3vw]"><Icon icon="iconamoon:like-thin" /></span>
                    </span>
                </div>
                <div class="w-[80vw]  text-[3vw] ml-[17vw]">
                    <p>{{item.content}}</p>
                    <span class="text-[#5A758A]"><span></span>条回复></span>
                </div>
            </li>
        </ul>
    </div>
  </div>
    </div>
</template>

<script>
import {getCommentMusic} from '@/service'
export default {
    name:"comment",
    data(){
        return{
            comment:''
        }
    },
    methods:{
        async once(){
            const [err,res] = await getCommentMusic({id:this.mixin_player.currentTrackDetail.id})
            if(err) return alert('at')
            this.comment = res.data.hotComments
            console.log("red", this.comment )
        },
         goBack(){
       window.history.back()
    },
    },
    created(){
        this.once()
    }
}
</script>

<style>

</style>