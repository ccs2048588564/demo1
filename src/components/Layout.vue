<template>
  <div class="layout_warp">
    <div class="layout">
      <div class="layout_router">
        <div class="layout_router_cont">
          <img src="../../static/imgs/logo.png" class="layout_router_logo">
          <ul class="layout_ul">
            <li @click="dis">
              <router-link exact :to="{name:'Home'}" >
                <i class="fa fa-home"></i>
                首页
              </router-link>
            </li>
            <li @click="dis">
              <router-link :to="{name:'World'}">
                <i class="fa fa-globe"></i>
                大世界
              </router-link>
            </li>
            <li @click="dis">
              <router-link :to="{name:'New'}">
                <i class="fa fa-coffee" ></i>
                大新味
              </router-link>
            </li>
            <li @click="dis">
              <router-link :to="{name:'Join'}">
                <i class="fa fa-handshake-o"></i>
                大加盟
              </router-link>
            </li>
            <li @click="dis">
              <router-link :to="{name:'Invite'}">
                <i class="fa fa-address-book"></i>
                人才招聘
              </router-link>
            </li>
          </ul>
          <div class="tab">
            <ul>
              <li
                  v-for="(item,index) in imgLists"
                  :key="index"
                  :class="{active : index===actived}"
                  @click="tabFn(index)"
              >
                <img :src="item.img">
              </li>
            </ul>
            <div
              :key="index"
              v-for="(item,index) in imgs"
              :style="{display:index===actived ? 'block':'none'}"
            >
              <img :src="item.cont">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box">
        <div class="layout_head" >
          <ul class="layout_head_ul">
            <li v-for="(item) in pic" @click="more"><img :src="item.img"></li>
            <li v-for="(item) in pic1" @click="isPlayAudio"><img :src="item.img"></li>
          </ul>
          <audio id="audio" src="../../static/imgs/music.mp3" autoplay="autoplay" loop="loop"></audio>
        </div>
        <div class="layout_body">
            <router-view id="bb"></router-view>
        </div>
    </div>
    <div class="phone">
      <ul class="phone_ul">
        <li><a href="tel:15068805606">呼叫</a></li>
        <li @click="copy">复制</li>
        <li @click="add">添加到手机通讯录</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import { MessageBox } from 'mint-ui'
import  audio from '../../static/imgs/music.mp3'
export default {
  name: "Layout",
  mounted(){
    this.playAudio = () => {//音频播放
      let buttonAudio = document.getElementById('audio');
          buttonAudio.setAttribute('src',audio)
          buttonAudio.play()
    },
    this.endAudio = () => {//音频暂停
      let buttonAudio = document.getElementById('audio');
          buttonAudio.setAttribute('src',audio)
          buttonAudio.pause()
    }
  },
  data(){
    return{
      show:true,
      imgs:[
        {img:require('../../static/imgs/icon9.png'),cont:require('../../static/imgs/code.jpg')},
        {img:require('../../static/imgs/icon10.png'),cont:require('../../static/imgs/weixin.jpg')},
        {img:require('../../static/imgs/icon11.png'),cont:require('../../static/imgs/weibo.jpg')},
      ],
      imgList:[
        {img:require('../../static/imgs/icon9.png'),cont:require('../../static/imgs/code.jpg')},
        {img:require('../../static/imgs/icon13.png'),cont:require('../../static/imgs/weixin.jpg')},
        {img:require('../../static/imgs/icon11.png'),cont:require('../../static/imgs/weibo.jpg')},
      ],
      imgLists:[
        {img:require('../../static/imgs/icon9.png'),cont:require('../../static/imgs/code.jpg')},
        {img:require('../../static/imgs/icon10.png'),cont:require('../../static/imgs/weixin.jpg')},
        {img:require('../../static/imgs/icon11.png'),cont:require('../../static/imgs/weibo.jpg')},
      ],
      images:[
        {img:require('../../static/imgs/icon9.png'),cont:require('../../static/imgs/code.jpg')},
        {img:require('../../static/imgs/icon13.png'),cont:require('../../static/imgs/weixin.jpg')},
        {img:require('../../static/imgs/icon14.png'),cont:require('../../static/imgs/weibo.jpg')},
      ],
      pic:[
        {img:require('../../static/imgs/icon15.png')},
      ],
      pics:[
        {img:require('../../static/imgs/icon18.png')},
      ],
      picss:[
        {img:require('../../static/imgs/icon15.png')},
      ],
      pic1:[
        {img:require('../../static/imgs/icon16.png')},
      ],
      actived:1,
      toggle:true,
      isShow:false,
      toastInstanse: null
    }
  },
  methods: {
    copy(){//复制手机号码
      this.toastInstanse = Toast({
        message: "已复制", //弹窗内容
        position: "middle", //弹窗位置
        duration: 2000, //弹窗时间毫秒,如果值为-1，则不会消失
        className: "mytoast"//添加的类名，修改样式
      })
    },
    add(){//添加手机号码
      MessageBox({
        title: '确定添加到以下通讯录？',
        message: '同事',
        showCancelButton: true
      }).then(action => {
        if (action === 'confirm') {
          // console.log(1)
        }
        if (action === 'cancel') {
          // console.log(2)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    isPlayAudio(){//音频播放
      if(this.isShow==true){
        this.playAudio()
      }else {
        this.endAudio()
      }
      this.isShow=!this.isShow
    },
    tabFn(index) {//选项卡
      this.actived = index
      if (index == 1) {
        this.imgLists = this.imgs
        $('.phone').css({display:'none'})
      } else if (index == 2) {
        this.imgLists = this.images
        $('.phone').css({display:'none'})
      } else if (index == 0) {
        this.imgLists = this.imgList
        $('.phone').css({display:'block'})
      }
    },
    more() {
      if (this.toggle === true) {
        $('.layout').css({display: 'block'})
        $('.tab_bg').css({left:5.66+'rem'})
        $('.layout_body').css({left:5.4+'rem'})
        $('.layout_head').css({left:5.4+'rem'})
        this.pic = this.pics
      } else {
        $('.layout').css({display: 'none'})
        $('.tab_bg').css({left:0.24+'rem'})
        $('.layout_body').css({left:0+'rem'})
        $('.layout_head').css({left:0+'rem'})
        this.pic = this.picss
        $('.phone').css({display:'none'})
      }
        this.toggle = !this.toggle
    },
    dis() {
      $('.phone').css({display: 'none'})
      this.pic = this.picss
      if (this.toggle === false) {
        $('.layout').css({display: 'none'})
        $('.layout_body').css({left:0+'rem'})
        $('.layout_head').css({left:0+'rem'})
      } else {
        this.pic = this.pics
        $('.tab_bg').css({left: 5.66 + 'rem'})
      }
    }
  }
}
</script>

<style lang="less">
@import "~@/assets/less/base.less";
.layout_warp {
  width: 100%;
  height: 100%;
  .phone{
    width: 6.0rem;
    height: 3.3rem;
    position: fixed;
    background-color: #fff;
    border-radius: 0.2rem;
    left: 0.75rem;
    top: 7.1rem;
    z-index: 999;
    display: none;
    .phone_ul{
      width: 100%;
      li{
      width: 100%;
      height: 1.1rem;
      line-height: 1.1rem;
      font-size: 0.34rem;
      text-indent: 0.3rem;
      border-bottom: 1px solid #ccc;
      }
    }
  }
  /*width: 100%;*/
  /*display: flex;*/
  /*overflow-x: hidden;*/
  /*position: relative;*/
  .layout {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 5.4rem;
    height: 13.34rem;
    display: none;
    left: 0rem;
      .layout_router {
        width: 5.4rem;
        height: 13.34rem;
        background-color: rgba(0, 0, 0, 0.6);
        .layout_router_cont {
          width: 4.1rem;
          margin: 0 auto;
            .layout_router_logo {
              width: 1.7rem;
              height: 2.28rem;
              margin: 0 auto;
              padding-top: 0.34rem;
            }
            .layout_ul {
              width: 100%;
              border-top: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
              margin: 0.26rem 0;
              padding-bottom: 0.12rem;
              li {
                height: 0.6rem;
                line-height: 0.68rem;
                margin-left: 1rem;
                i {
                  width: 0.7rem;
                }
              }
            }
          .tab{
            width: 4.1rem;
            ul{
              display: flex;
              justify-content: space-between;
              li{
                padding: 0 0.4rem;
                img{
                  width: 0.6rem;
                  height: 0.6rem;
                }
              }
            }
          div{
            height: 3rem;
            width: 3rem;
            margin: 0.25rem auto;
            img{
              width: 3rem;
              height: 3rem;
              margin: 0.25rem auto;
            }
          }
          .active{
          }
        }
      }
    }
  }
  .box {
    width: 100%;
    height: 100%;
    .layout_head {
      position: fixed;
      z-index: 999;
      top: 0.5rem;
      width: 7.5rem;
      height: 0.8rem;
      .layout_head_ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        li {
          width: 0.8rem;
          margin: 0 0.28rem;
          img {
            width: 0.8rem;
            height: 0.8rem;
          }
        }
      }
    }
    .layout_body{
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      position: relative;
      left: 0;
      #bb {
        width: 100%;
        height: 13.34rem;
      }
    }
  }
}
</style>
