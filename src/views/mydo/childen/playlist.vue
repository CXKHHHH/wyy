<template>
  <div class="w-[94vw] h-[70vw] m-auto mt-5 ">
    <div class="flex justify-around text-xl w-[60vw] m-auto  ">
      <span class="one">创建歌单</span>|
      <span class=" one">搜藏歌单</span>
    </div>
    <div class="bg-[#FFFFFF] w-[94vw] h-[20vw] rounded-xl mt-7 collect dark:bg-[#2C2C2C] dark:text-[#FFFFFF]">
      <div class="flex w-[94vw] h-[20vw] m-auto justify-around mt-3 ">
          <span class="w-[30vw] one">创建歌单</span>
          <p class="flex w-[11vw] justify-around one">
            <span class=" text-2xl leading-[6vw]">+</span>
            <span class="iocn">
               <Icon icon="octicon:three-bars-16" />
               </span>
          </p>
      </div>
    </div>
    <div class="bg-[#FFFFFF] w-[94vw] h-[20vw] rounded-xl mt-7 collect dark:bg-[#2C2C2C] dark:text-[#FFFFFF]">
      <div class="flex w-[94vw] h-[6vw] m-auto justify-around mt-7 ">
          <span class="w-[30vw] one">搜藏歌单</span>
          <p class="flex w-[11vw] justify-around one">
           
            <span class="iocn">
               <Icon icon="octicon:three-bars-16" />
               </span>
          </p>
      </div>
      <p class=" text-center one">暂无搜藏歌单</p>
    </div>

  </div>
 
</template>

<script>
export default {

}
</script>

<style>
.iocn{
 margin-top: 1vw;
}
.collect{
  border:  1px solid transparent;
}
.one{
  color: #D9DADD;
}
</style>