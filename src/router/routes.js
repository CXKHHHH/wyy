
export default [
    {
        path:'/',
        redirect:"/index"
    },
    {
        path:'/poer',
        // component:login
        component:()=>import("@/views/login/poer")
    },
    {
        path:'/login',
        // component:login
        component:()=>import("@/views/login/login")
    },
    {
        path:'/mv',
        // component:login
        component:()=>import("@/views/charts/childen/mv")
    },
    {
        path:'/radar',
        // component:login
        component:()=>import("@/views/index/childen/radar")
    },
    {
        path:'/comment',
        // component:login
        component:()=>import("@/views/index/music/comment/comment.vue")
    },
    {
        path:'/searpage',
        // component:login
        component:()=>import("@/views/index/searchfor/searpage")
    },
    {
        path:'/index',
        // component:
        component:()=>import("@/views/index")
    },
    {
        path:'/music',
        // component:charts
        component:()=>import("@/views/index/music/music.vue")
    },
    {
        path:'/charts',
        // component:charts
        component:()=>import("@/views/charts")
    },
    {
        path:'/mydo',
        // component:my 
        component:()=>import("@/views/mydo")
    },
    {
        path:'/society',
        // component:society
        component:()=>import("@/views/society")
    },
    {
        path:'/withinterest',
        // component:withinterest
        component:()=>import("@/views/withinterest")
    },
    
]

