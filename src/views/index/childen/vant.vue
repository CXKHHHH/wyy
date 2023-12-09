<template>
  <div class="w-[90vw] h-[445vw] bg-[#F1F1F1] dark:bg-[#1E1F1C]">
    <div class="w-[76vw] h-[13vw] m-auto pt-[3vw] " > 
      <!-- <img :src="" alt=""> -->
      <div class="flex justify-between">
          <div class="flex">
             <img class="w-[10vw] img  rounded-[10vw]"  :src="user.avatarUrl" alt="">
              <p class=" text-[3.5vw] dark:text-[#FFFFFF]  ml-[10vw] pt-[3vw] flex" style="box-sizing: border-box;">{{user.nickname}}<Icon class="mt-[0.5vw]" icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" /><span></span></p>
          </div>
          <div class="text-[5vw]">
            <Icon class="mt-[3vw] dark:text-[#FFFFFF]" icon="icon-park-outline:scan-code" />
          </div>
      </div>
    </div>
    <div class="mx-auto mt-[2vw]   w-[76vw] h-[27.66vw] bg-gradient-to-r from-[#3b3b3b] to-[#5f5050] px-[3.96vw] text-[#9e8f8f] rounded-[20px]">
      <div class="flex justify-between">
      <div class="h-[10vw] flex justify-between items-center">
            <h1 class="text-[3.6vw] text-[#ffeeeb]">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                      开通黑胶VIP
                </font>
              </font>
            </h1>
          </div>
          <div class="w-[15.78vw] h-[6.56vw] leading-[6vw] text-center rounded-[100px] border-[1px] border-[#9e8f8f] text-[2.5vw] mt-[3vw]">
              <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;">
                      会员中心
                </font>
              </font>
          </div>
        </div>
        <div class="h-[7vw] border-b-[1px] border-[#494443]">
          <p class="text-[2.73vw]">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">
                    点击立即享受超21项专属特权
              </font>
            </font>
          </p>
        </div>
        <div class="h-[7vw] m-[2vw] border-[#494443] flex">
          <p class="text-[2.73vw]">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">
                    受邀专享，黑胶VIP低至0.27元/天！
              </font>
            </font>
          </p>
          <p class="w-[5vw] h-[5vw] bg-[#E54701] text-[1.73vw] text-[#ffeeeb] ml-[13vw]">
            <font style="vertical-align: inherit;">
              <font style="vertical-align: inherit;">
                    受邀专享
              </font>
            </font> 
          </p>
        </div>
    </div>
     <div class="mx-auto mt-[4vw] dark:bg-[#2C2C2C] w-[76vw] h-[35.66vw] bg-gradient-to-r bg-[#FFFFFF] to-[#5f5050] px-[3.96vw] rounded-[20px]">
         <ul  class="border-2 border-[#FFFFFF]  dark:border-[#2C2C2C]">
          <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC] "><Icon icon="heroicons:envelope" :horizontalFlip="true" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">我的消息</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4]">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
            <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon class=" text-center" icon="streamline:shell" :horizontalFlip="true" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">云贝中心</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] ">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
            <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="tabler:bulb" :horizontalFlip="true" /> </span>
                  </span>
                  <span class=" ml-[4vw] ">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">创作者消息</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4]">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
         </ul>
      </div>
        <div class="mx-auto mt-[4vw] dark:bg-[#2C2C2C]   w-[76vw] h-[86.66vw] bg-gradient-to-r bg-[#FFFFFF] to-[#5f5050] px-[3.96vw] rounded-[20px]">
          <div class="w-[70vw] h-[8vw] border-b-[1px] text-[#C4C4C4] mt-[2vw]">
            <p class="text-[#C4C4C4] text-[3.5vw] leading-[8vw] dark:text-[#DCDCDC]">音乐服务</p>
          </div> 
         <ul style="">
          <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="circum:sun" :horizontalFlip="true" /></span>
                  </span>
                  <span class=" ml-[4vw] dark:text-[#DCDCDC]">
                      <span class=" float-left w-[30vw] ">趣测</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] flex">
                  <span class="text-[3vw] ">点击查看今日运势</span>
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
            <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]" ><Icon icon="ri:coupon-4-line" :horizontalFlip="true" /></span>
                  </span>
                  <span class=" ml-[4vw] ">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">云村有票</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4]">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
            <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block  dark:text-[#DCDCDC]"><Icon icon="fluent:book-question-mark-20-regular" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">多多嘻嘻口袋</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] ">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="mdi:shopping-outline" /> </span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">商城</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4]">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw] ">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="icon-park-outline:electrocardiogram" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">Beet专区</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] flex">
                    <span class="text-[3vw] ">顶尖制作邀你创造</span>
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="tabler:bell-ringing-2" /> </span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">口袋铃声</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4]">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="gg:games" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">游戏专区</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] flex">
                    <span class="text-[3vw]">音乐浇灌治愈花园</span>
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
         </ul>
      </div>
        <div class="mx-auto mt-[4vw] dark:bg-[#2C2C2C] w-[76vw] h-[109.66vw] bg-gradient-to-r bg-[#FFFFFF] to-[#5f5050] px-[3.96vw] rounded-[20px]">
          <div class="w-[70vw] h-[8vw] border-b-[1px] text-[#C4C4C4] mt-[2vw]">
            <p class="text-[#C4C4C4] text-[3.5vw] leading-[8vw]">其他</p>
          </div> 
         <ul style="">
          <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="circum:sun" :horizontalFlip="true" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">设置</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] flex">
                  <span class="text-[3vw]"></span>
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
            <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="ri:coupon-4-line" :horizontalFlip="true" /></span>
                  </span>
                  <span class=" ml-[4vw] ">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">深色模式</span> 
                    </span>
                </p>
                <p  class="pt-[1vw]  text-[#C4C4C4]">
                      <van-switch  
                      width="10vw"
                      v-model="isDackMode"
                      size="20"
                      />
                  </p>
              </li>
            <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block  dark:text-[#DCDCDC]"><Icon icon="fluent:clock-alarm-24-regular" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">定时关闭</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4]">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"> <Icon icon="map:clothing-store" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">个性装扮</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4]">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw] ">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="game-icons:vr-headset" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">边听边存</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] flex">
                    <span class="text-[3vw]">未开启</span>
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="wpf:headset" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">在线听歌免流量</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4]">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="ph:prohibit-bold" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">音乐黑名单</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] flex">
                    <span class="text-[3vw]">未开启</span>
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="gg:box" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">青少年模式</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] flex">
                    <span class="text-[3vw]">未开启</span>
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="wpf:alarm-clock" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">音乐闹钟</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] flex">
                    <span class="text-[3vw]"></span>
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
         </ul>
      </div>
       <div class="mx-auto mt-[4vw]  dark:bg-[#2C2C2C] w-[76vw] h-[90.66vw] bg-gradient-to-r bg-[#FFFFFF] to-[#5f5050] px-[3.96vw] rounded-[20px]">
         <ul class="border border-[#FFFFFF] dark:border-[#2C2C2C]">
          <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="lets-icons:order-light" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">我的订单</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] flex">
                  <span class="text-[3vw]"></span>
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
            <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="icon-park-outline:coupon" /></span>
                  </span>
                  <span class=" ml-[4vw] ">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">优惠券</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4]">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
            <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block  dark:text-[#DCDCDC]"><Icon icon="ri:customer-service-2-line" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">我的客服</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4]">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="fluent:share-16-regular" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">分享网易云音乐</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4]">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw] ">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="material-symbols:inventory-sharp" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[45vw] dark:text-[#DCDCDC]">个人信息收集与使用清单</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] flex">
                    <span class="text-[3vw]"></span>
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="solar:code-scan-bold" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[45vw] dark:text-[#DCDCDC]">个人信息第三方共享清单</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4]">
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="icons8:share" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[36vw] dark:text-[#DCDCDC]">个人信息与隐私保护</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] flex">
                    <span class="text-[3vw]"></span>
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
               <li class="text-[4vw] flex justify-between mt-[4vw] ">
              <p class="flex w-[30vw]  ml-[4vw] ">
                <span class="pt-[1vw] w-[20vw]">
                    <span class=" inline-block dark:text-[#DCDCDC]"><Icon icon="zondicons:exclamation-outline" /></span>
                  </span>
                  <span class=" ml-[4vw]">
                      <span class=" float-left w-[30vw] dark:text-[#DCDCDC]">关于</span> 
                    </span>
                </p>
                <p  class="pt-[1vw] text-[#C4C4C4] flex">
                    <span class="text-[3vw]"></span>
                  <Icon icon="ep:arrow-up-bold" :rotate="1" :horizontalFlip="true" />
                  </p>
              </li>
         </ul>
      </div>
      <div class="mx-auto mt-[4vw]  w-[76vw] h-[10.66vw]  ">
        <div class="w-[76vw] h-[16vw] bg-[#FFFFFF] rounded-[20vw] dark:bg-[#2C2C2C]">
          <p class="text-[#F92672] w-[76vw] text-[3.5vw]   text-center leading-[16vw]">退出登录</p>
          </div>
      </div>
  </div>
</template>

<script>
import {getDetails} from "@/service";
// import {mapState} from "vuex";
export default {    
  props:{
    title:{
        type:Object,
        required:true,
        default(){
          return {}
        }
    }
  },
  computed:{
    isDackMode:{
      get(){
        return this.$store.state.isDackMode
      },
      set(value){
        this.$store.commit("updataDark",value)
      }
    }
  },
    data(){
      return{
         user:[],
        
      }
    },
     methods:{
          async onle(){
            const [err,res] = await getDetails({uid:this.title.account.id})
            if(err) return
            console.log(res.data.profile)
            // console.log(res.data.profile.nickname);
            this.user = res.data.profile
          },
         
        },
        created(){
        this.onle()
        }
}
</script>
