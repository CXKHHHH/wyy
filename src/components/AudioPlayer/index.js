import Player from "./player.js"
import Main from "./main.vue"
const player = new Player
// export default(Vue)=> Vue.componment("AudioPlayer",Main)
export default{
    install(Vue){
        Vue.component(Main.name,Main)
        //全局混入相应的player的实例 方便在组件中调用
        Vue.mixin({
            computed:{
                mixin_player(){
                    return Vue.observable(player)
                }
            }
        })
    }
}