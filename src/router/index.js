import Vue from "vue"
import VueRouter from "vue-router"
import routes from "@/router/routes"

Vue.use(VueRouter)

const router = new VueRouter({
    mode:"history",//一个模式加了域名没有#
    routes
})

export default router