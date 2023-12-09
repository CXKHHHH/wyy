<template>
  <div class=" mt-[15vw]">
    <div class="w-[94vw] h-[24vw] bg-[#FFFFFF] m-auto rounded-xl sets flex dark:bg-[#2C2C2C] dark:text-[#FFFFFF]">
        <div class=" w-[18vw] h-[18vw] bg-[#72374A] rounded-xl mt-3 ml-4">
                <Icon icon="ph:heart-fill" class="hearts text-[7vw] mt-[5.5vw] ml-[5.5vw]"  />
        </div>
        <div class="flex w-[68vw] mt-[5vw] justify-between ml-5 "> 
            <div class="h-[13vw] w-[24vw] text-xl">
                <p class="text-[3.5vw]">我喜欢的音乐</p>
                <p class="text-[3.5vw]">首</p>
            </div>
           <div class="h-[7vw] w-[20vw] text-xl border like text-center dark:border-[#FFFFFF] ">
               <Icon icon="ph:heart-thin" class=" float-left heart"/> <span class="text-[3.5vw]">心动模式</span>
           </div>
        </div>
    </div>
   
  </div>
</template>

<script>
export default {

}
</script>

<style>
.hearts{
    color: #FFFFFF;
}
.sets{
  border: 1px solid transparent;
}
.like{
    border: 1px solid black;
    border-radius: 20px;
    line-height: 7vw;
    width: 22vw;
}
.heart{
    padding-top: 1vw;
    font-size: 6vw;
 
}
</style>