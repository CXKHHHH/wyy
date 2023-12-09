<template>
     <div class="title items-center h-[12vw] ml-[10vw] ">
         <span class="dark:text-[#e9ebf2] text-[#374d5b] text-[4vw] font-[800]">
            <font class="vertical-align: inherit;">
              <div class="flex justify-between" ><div>{{title}}</div><div>更多</div></div>
            </font>
          </span>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        }
    }
}
</script>

<style>
.title{
     line-height: 13vw;
}
</style>