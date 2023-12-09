
<script>
import Bananer from "./bananer"
import Recommended from "./recommended"
import Similar from "./similar "
import Ranking from "./ranking"
// import Radar from "./radar"
// import Disc from "./disc"
const blocksTypeComponentMap = {//定义block类型和组件之间的关系
    HOMEPAGE_BANNER:Bananer,//轮播图
    HOMEPAGE_BLOCK_PLAYLIST_RCMD:Recommended,//推荐歌单
    HOMEPAGE_BLOCK_STYLE_RCMD :Similar,//相似推荐
    HOMEPAGE_BLOCK_MGC_PLAYLIST:Ranking,//你的歌单雷达
    // HOMEPAGE_MUSICIAN_REVISIT :Radar,//
    // HOMEPAGE_BLOCK_NEW_ALBUM_NEW_SONG:Disc//新歌新碟
}
export default {
    data(){
        return{
            blocksTypeComponentMap  
        }
    },
    name:"Block",
    props:{
        resource:{
            type:Object,
            required:true
        }
    },
    created(){
        // console.log(this.resource)
    }
}
</script>
<template>
   <component
    :is="blocksTypeComponentMap[resource.blockCode]"
    :resource="resource">
   </component>
</template>
