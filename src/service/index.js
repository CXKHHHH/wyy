import request from "@/utils/request"
// import axios from "axios"
import {co} from "@/utils"
// import axiosRetry from "axios-retry"//错误重试
// import "@/utils/request"
// axiosRetry(axios,{retries:3})

// 获取歌手列表
// axios.post 返回值是Promise实例

/**
 * 
 * @description                     获取歌手分类列表
 * @param {Object}  data             请求参数
 * @param {Number}  data.limit       返回数量默认30
 * @param {Number}  data.offset       偏移数控用于分页 如 "(页数 -1)*30 
 * @param {Number}  data.type         类别(1 全部 2 男歌手 3 女歌手)
 * @param {Number}  data.area        地域 用于分页(1 全部  7华宇 96欧美 8 日本 16韩国 0其他)
 * @returns
 * 
 */

export const getArtistList =(data)=>{
  return co(request.post(`/artist/list`,data))
}
//搜索

/**
 * 
 * @description                       搜索该音乐 / 专辑 / 歌手 / 歌单 / 用户 
 * @param {Object}  params            请求参数
 * @param {Number}  params.limit      返回数量默认30
 * @param {Number}  params.offset     偏移数控用于分页 如 "(页数 -1)*30 
 * @param {Number}  params.type       类别(1 全部 2 男歌手 3 女歌手)
 * @param {Number}  params.area       地域 用于分页(1 全部  7华宇 96欧美 8 日本 16韩国 0其他)
 * @params {Number} params.keywords   搜索的名
 * 
 */

export const cloudsearch =(params)=> co(request.get(`/cloudsearch`,{ params }))

//轮播
export const Carousel =(data)=>{
  return co(request.post(`/banner`,data))
}

/**
 * @description               获取 APP 首页信息     
*/

export const getHomePageData = () => co(request.post("/homepage/block/page"));

 
/**
 * @description               调用此接口 ,传入手机号码, 可发送验证码  
 * @phone       : 手机号码
*/

export const getCaptcha = (params)=>{
  return co(request.get("/captcha/sent",{params}))
}

export const loginCellphone = (data)=>
 co(request.post("/login/cellphone",data))

// export const loginCellphone = (data) =>co(request.post("/register/cellphone"),data)


export const getCountries = () => co(request.post("/countries/code/list"));

/***
 *   @description   登录后调用此接口 ,可获取用户账号信息
 *  @uid : 用户 id
 */



export const getDetails = (params) => {
  return co(request.get("/user/detail",{params}));
}

/**
 * @description              获取用户信息 , 歌单，收藏，mv, dj 数量
*/

export const getSubcount= () => co(request.post("/user/subcount"));

/**
 * @description             获取歌单所有歌曲
*/

export const getPlaylist = (data) =>  {
return co(request.post("/playlist/detail",data));
}

/**
 * @description           获取歌单所有歌曲
 * @dlimit : 限制获取歌曲的数量，默认值为当前歌单的歌曲数量
 * @doffset : 默认值为0
*/
export const getTrack = (data) =>  {
  return co(request.post(`/playlist/track/all?timestamp=${Date.now()}`,data));
  }

  
  /**
 * @description                : 获取用户信息 , 歌单，收藏，mv, dj 数量
*/

export const getSubcountt = (params) => {
   return co(request.get("/user/playlist",{params}));
  }
  
    
  /**
 * @description        获取 mv 排行
 * @limit             取出数量 , 默认为 30
 * @area              地区,可选值为内地,港台,欧美,日本,韩国,不填则为全部
 * @offset            偏移数量 , 用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认 为 0
*/
export const getMv = (data) =>  {
  return co(request.post(`/top/mv?timestamp=${Date.now()}`,data));
  }



export const getMvdice = (params) =>  {
    return co(request.get(`/mv/url?timestamp=${Date.now()}`,{params}));
}
  /**
 * @description      获取 mv 数据
*/
export const getmvDetail = (params) =>  {
  return co(request.get(`/mv/detail`,{params}));
}

//id

export const getTrackUrl = (track) => {
  return co(request.post(`/song/url/v1?timestamp=${Date.now()}`, { id: track, level: "standard" }));
};

//歌曲详情
export const getSong = (params) => {
  return co(request.get(`/song/detail`,{params}));
}

/**
 *   
 * @description     可获得该音乐的所有评论
 * @id              音乐 id
 * @offset          偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 * @limit            取出评论数量 , 默认为 20
 * @before          分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)
 */



export const getCommentMusic = (data) => {
  return co(request.get(`/comment/music`,data));
}