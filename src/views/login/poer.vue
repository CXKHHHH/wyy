<template>
  <div>
    <van-index-bar v-for="item in colorful.data.data" :key="item.id">
         <van-index-anchor  :index="item.label" />
        <van-cell v-for="items in item.countryList" :key="items.id" >
                <van-cell :title="items.en" ></van-cell>
                 <van-cell :title="items.zh"><span>+{{items.code}}</span></van-cell>
        </van-cell>
      </van-index-bar>
    </div>  
</template>

<script>
import {getCountries} from "@/service"
export default {
    data(){
        return{
            colorful:[],
           
        }
    },
    methods:{
        async onlice(){
            const [err,res] = await getCountries()
            if(err) return
            console.log(res)
            this.colorful=res
            console.log(this.colorful)
        }
    },
    created(){
        this.onlice()
    }
}
</script>

<style>
van-cell{
    display: flex;
}
</style>