<template>
    <div class="home">
      <div class="wrapper" ref="wrapper">
        <div class="wrapper_cont">
          <mt-loadmore
            :top-method="loadTop"
            @top-status-change="handleTopChange"
            ref="loadmore"
            :topPullText="'下拉刷新'"
            :topDropText="'释放更新'"
            :topLoadingText="'加载中...'"
          >
            <ul class="home_ul">
              <li v-for="(item,index) in imgs" :key="index"><img v-lazy="item.img"></li>
            </ul>
          </mt-loadmore>
          <mt-swipe :auto="3000" :show-indicators="false">
            <mt-swipe-item v-for="(item,index) in swiperImg" :key="index"><img :src="item.img"></mt-swipe-item>
          </mt-swipe>
          <div class="home_video">
            <img src="../../static/imgs/dakouzai.png">
            <div class="home_v">
              <video controls="controls" src="../../static/imgs/bobanaica.mp4" autoplay="autoplay"></video>
            </div>
          </div>
          <div class="home_img">
            <button @click="fn">前往大加盟</button>
            <img src="../../static/imgs/Tojoinin.jpg">
            <img src="../../static/imgs/code.jpg">
          </div>
        </div>
        <div class="top" v-show="show">
          <img src="../../static/imgs/icon17.png" @click="backTop">
        </div>
      </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Home',
  data(){
    return{
      imgs:[
        {img:require('../../static/imgs/Home1.jpg')},
        {img:require('../../static/imgs/product1.jpg')},
        {img:require('../../static/imgs/product2.jpg')},
        {img:require('../../static/imgs/product3.jpg')},
        {img:require('../../static/imgs/product4.jpg')},
        {img:require('../../static/imgs/product5.jpg')},
        {img:require('../../static/imgs/product6.jpg')},
      ],
      swiperImg:[
        {img:require('../../static/imgs/banner.jpg')},
        {img:require('../../static/imgs/banner1.jpg')},
        {img:require('../../static/imgs/banner2.jpg')},
      ],
      scroll:null,
      show:false,
      topStatus:''
    }
  },
  methods:{
    handleTopChange(status){//查看下拉刷新的状态
      console.log(status)
    },
    loadTop() {// 加载更多数据
      setTimeout(()=>{
        this.$refs.loadmore.onTopLoaded();
      },2000)
      // console.log('刷新')
    },
    fn(){//路由跳转至加盟
      this.$router.push({ path: 'Join' })
    },
    backTop(){//回到顶部
      this.scroll.scrollTo(0,0,1500)
    },
    initScroll(){
      if(!this.$refs.wrapper){
          return
        }
        this.scroll = new BScroll(this.$refs.wrapper,{
          scrollY: true,//Y轴滚动
          click: true,  //允许点击事件
          probeType: 3, //作用：有时候我们需要知道滚动的位置。当 probeType 为 1 的时候，
                        // 会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，
                        // 会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，
                        // 不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。
                        // 如果没有设置该值，其默认值为 0，即不派发 scroll 事件。
          scrollBar:true//显示滚动条
        })
        this.scroll.on('scroll',(ops) => {
          if(ops.y<=-600){
            this.show=true//Top显示
          }else {
            this.show=false//Top隐藏
          }
         // console.log(ops.y)
        })
      }
    },
  mounted() {
    this.$nextTick(function () {
      //1.在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中
      //2.在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，
      //  所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。
      //  与之对应的就是mounted()钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，
      //  此时在该钩子函数中进行任何DOM操作都不会有问题 。
      //3.在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，
      //  这个操作都应该放进Vue.nextTick()的回调函数中。
      this.initScroll()
    })
  }
}
</script>

<style scoped lang="less">
@import "~@/assets/less/base.less";
.home{
  width: 100%;
  height: 100%;
  .wrapper{
    height: 100%;
    width: 7.5rem;
    position: absolute;
    top: 0;
    bottom: 0;
    .wrapper_cont{
      width: 7.5rem;
      /*padding-bottom: 3.4rem;*/
      .mint-loadmore {
        font-size: 0.3rem;
        .home_ul {
          width: 100%;
        }
      }
      .mint-swipe{
        width: 7rem;
        height: 4.68rem;
        margin: 0 auto;
        padding-top: 0.16rem;
        .mint-swipe-items-wrap{
          width: 100%;
          height: 4.68rem;
          .mint-swipe-item{
            width: 100%;
            height: 4.68rem;
            img{
              width: 100%;
              height: 4.68rem;
            }
          }
        }
      }
    }
  }
}
</style>
