import {Howl,Howler} from "howler"
import {getTrackUrl,getSong} from "@/service"
//Howl 加在音乐 音乐 暂停
//Howler 全局设置 声音大小 播放速度
// 定义一个属性去保存播放歌单
//定义一个方法替换播放列表
let timer=null
export default class{
    constructor(){
        this.index = 0
        this.tracks=[]                                                                                                                                                                                                                                                                                                                                                                                                   
        // 循环播放 0 
        this.loopMood = 0
        //歌曲的总时长
        this.propress =0
        // 播放状态
        this.playing = false
        //
        this.duration =0
        this.currentTrackDetail={}
        this.howl = null
    }
  
    interval(){
        clearInterval(timer)
        setInterval(() => {
                this.propress = this.howl.seek()/this.howl.duration()
        }, 100);
    }
    replaceTracks(tracks,autoplayTrack){
        this.tracks = tracks
        // 指定从autoplayTrack开始播放
       if(autoplayTrack) {
        this.index=this.tracks.indexOf(autoplayTrack)
       }
       this.playTrack(this.tracks[this.index])
    }
    //播放歌曲的方法
    async  playTrack(track){
        const [getTrackUrlerr,reson] = await getTrackUrl(track)
        const [getSongerr,res] =  await  getSong({ids:track})
        if(getTrackUrlerr) return alert("异常1")
        console.log(track)
        if(getSongerr) return console.log(getSongerr)
        this.currentTrackDetail = res.data.songs[0]
  
        console.log("plauy",res)
        const mp3Url = reson.data.data[0].url
        if(mp3Url) return this.mountAudioSaource(mp3Url,true)
        this.playNextTrack()
    }

    // async getTrackMp3Url(track){
    //     const [err,res] = await getTrackUrl(track)
    //     if(err) return alert("异常")
    //     const mp3Url = res.data.data[0].url
    //     if(mp3Url) return this.mountAudioSaource(mp3Url)
    //     this.playNextTrack()
     
    // }
    
    mountAudioSaource(url,autoplay=false){
        Howler.unload()
      this.howl =   new Howl({
            src:[url],
            html5:true,
            format:["mp3"]
        })
    if(autoplay) this.play()
    this.howl.on("end",()=> this.playNextTeack())
    }
    play(){
        // if(!this._howl) return
        // if(this._howl.playing()) return
        this.playing = true
        this.duration = this.howl.duration()
        this.interval()
        this.howl.play() 
    }
    suspend(){//暂停
        this.playing = false
        this.howl.pause()
    }
    // toggle**/
      
    // 获取需要播放的trackid
    playNextTeack(){//下一曲
        const nextTrack= this.getNextTrack()
        this.playTrack(nextTrack)
        console.log("player",nextTrack)
        // this.covertTrackMp3Url(nextTrack)
    }

    playupTeack(){//上一曲
        const nextTrack = this.getupTeack()
        this.playTrack(nextTrack)
        console.log("player",nextTrack)
    }
    Corresponding(thmusic){//点击对应的歌曲
        this.playTrack(this.tracks[thmusic])
        return this.tracks[thmusic]
    }        
    getNextTrack(){
        if(this.loopMood==1) return this.tracks[this.index]
        const currentTrackIsLast = this.index+1 == this.tracks.length
        if(currentTrackIsLast&&this.loopMood==0) return this.tracks[(this.index=0)]
        return this.tracks[++this.index]
        
    }
    getupTeack(){
        if(this.loopMood==1) return this.tracks[this.index]
        const currentTrackIsLast = this.index+1 == this.tracks.length
        if(currentTrackIsLast&&this.loopMood==0) return this.tracks[(this.index=0)]
        return this.tracks[--this.index]
    }
   
    setRate(rate){
        Howler.rate = rate
    }
}
// export default {
//     install(Vue){

//     }
// }