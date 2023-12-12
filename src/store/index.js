import Vue from "vue"
import Vuex from "vuex"
import persistedstate from "vuex-persistedstate"
import {getHomePageData,loginCellphone,getMv,getTrack} from "@/service"
// import {} from "@/service"
Vue.use(Vuex)

const store = new Vuex.Store({
    // state 存储公共数据
    state:{
      blocks:[],
      isDackMode:"true",
      tracks:[],
      mymusci:[],
      playlist:[]
    },
    //mutations 定义同步修改公共数据的方法store.commit
    mutations:{
       updatablocks(state,res){
            state.blocks = res.data.data.blocks
       },
       updataAuth(state,res){
            state.auth = res.data
       },
       updataMv(state,res){
            state.MV = res.data.data
       },
       updataDark(state,res){
            state.isDackMode = res
           
       },
       updataMusic(state,res){
        const a = []
        for(let key in res){
            if(res[key]!=undefined){
                a.push(res[key].id)
            }
        }
       state.playlist  = res
       state.tracks = a
        // state.songsheet = res
        },
        updatalogout(state){
       
            state.tracks = ""
            state.mymusci = ""
            state.playlist = ""
        }
    },
    //actions 定义异步修改公共数据的方法 (借助mutations)
    actions:{
        //主页信息存储
        async  resHomePageData(store){
            const [err,homePageData] = await getHomePageData()
            if(err) return
            store.commit("updatablocks",homePageData)
        },
        //登录信息存储
        async requestLoginCellphone(store,data){
            const [err,res] = await loginCellphone(data)
            if(err) return console.log(err)
            alert("登录成功")
            // console.log(res)
            store.commit('updataAuth',res)
        },
        //mv信息存储
        async requestMv(store,data){
            const [err,res] = await getMv(data)
            if(err) return
            store.commit('updataMv',res)
        },
        //歌单存储
        async requsermusic(store,data){
            const [err,res] = await getTrack({id:data})
            if(err) return
           
            console.log(" this.playlist ",res.data.songs)
            store.commit('updataMusic',res.data.songs)
        },
        //退出登陆
        async requestlogout(){
            store.commit('updatalogout')
        }
    },
    //actions 触发 store.dispatch("")
    //plugins 扩展其他功能
    plugins:[persistedstate()]//将state实时数据缓存到本地
})


window.store = store

export default store

