<template>
 <div class=" overflow-hidden w-[100vw]">
    <Card :title="resource.uiElement.subTitle.title"></Card>
    <Scroll>
    <div class="pt-[1vw] pl-[2vw]   scroll-wrapper border-[#EBEDF2]" :style="{width: `${this.resource.creatives.length * 81}vw` }">
      <div class="scroll-content flex w-[710vw] ">
        <ul class="w-[88vw] scroll-item pb-[3.8vw]" v-for="(item,inedx) in this.resource.creatives" :key="inedx">
            <li class= "pl-[2vw] w-[88vw] scroll-content pt-[2.7vw] flex"  v-for="(items,inedx) in item.resources" :key="inedx">
             <img  class="w-[14.5vw] h-[14.5vw] rounded-[10px] flex-5" :src="items.uiElement.image.imageUrl" alt="">
             <div class="characters ml-7">
              <p v-if="items.uiElement.resourceExtInfo!=undefined">
             {{items.uiElement.resourceExtInfo.artists.name}}
             </p>
            <p v-if="items.uiElement.mainTitle!=undefined" class="text-[3vw]">
               <span v-if="items.uiElement.subTitle!=undefined" >
                {{items.uiElement.subTitle.title}}
                </span>
               {{items.uiElement.mainTitle.title}}
             </p>
             </div>
             
          </li>
        </ul>
      </div>
    </div>
   </Scroll>
    </div>
</template>

<script>
import Card from "./card.vue"
import Scroll from "@/components/scroll.vue"
export default {
  props:{ 
    resource:{
      type:Object,
      required:true
    }
  },
  components:{
    Card,
    Scroll
  },
  created(){
    console.log(this.resource)
  }
}
</script>

<style scoped>
 .characters{
  line-height: 8vw;
 }
</style>