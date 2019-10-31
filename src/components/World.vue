<template>
    <div class="world">
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
            <div class="world_head">
              <ul class="head_img">
                <li v-for="(item,index) in list" :key="index"><img :src="item.img"></li>
              </ul>
              <mt-swipe :auto="1500" :show-indicators="false">
                <mt-swipe-item>2015年我们笑着去做，笑着去喝</mt-swipe-item>
                <mt-swipe-item>未来做新生代的国民好茶</mt-swipe-item>
                <mt-swipe-item>2017，你惦记我的我的味，我给你加一倍</mt-swipe-item>
                <mt-swipe-item>1999原叶清茶，不知走心</mt-swipe-item>
              </mt-swipe>
              <img src="../../static/imgs/cup2.png" class="cup">
            </div>
            <ul>
              <li v-for="(item,index) in bg" :key="index">
                <img :src="item.img">
              </li>
            </ul>
          </mt-loadmore>
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
  name: 'World',
  data(){
    return{
      list:[
        {img:require('../../static/imgs/fruit1.png')},
        {img:require('../../static/imgs/fruit2.png')},
        {img:require('../../static/imgs/fruit3.png')},
        {img:require('../../static/imgs/fruit4.png')}
      ],
      bg:[
        {img:require('../../static/imgs/dashijie.jpg')},
        {img:require('../../static/imgs/dashijie1.jpg')},
        {img:require('../../static/imgs/dashijie2.jpg')},
      ],
      scroll:null,
      show:false
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
    backTop(){
      this.scroll.scrollTo(0,0,1500)
    },
    initScroll(){
      if(!this.$refs.wrapper){
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper,{
        scrollY: true,
        click: true,
        probeType: 3,
        scrollBar:true
      })
      this.scroll.on('scroll',(ops) => {
        if(ops.y<=-600){
          this.show=true
        }else {
          this.show=false
        }
        // console.log(ops.y)
      })
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.initScroll()
    })
  }
}
</script>

<style scoped lang="less">
@import "~@/assets/less/base.less";
.world{
  width: 100%;
  .wrapper {
    height: 100%;
    width: 7.5rem;
    position: relative;
    top: 0;
    bottom: 0;
    .wrapper_cont {
      width: 7.5rem;
      .world_head {
        width: 100%;
        height: 9.7rem;
        background: url("../../static/imgs/background.jpg");
        .head_img {
          display: flex;
          width: 6.5rem;
          margin: 0 auto;
          padding-top: 0.8rem;
          justify-content: space-around;
          li {
            width: 1.06rem;
            img {
              width: 1.06rem;
              height: 1.06rem;
            }
          }
        }
        .mint-swipe {
          width: 6.4rem;
          height: 1.3rem;
          background: rgba(0, 0, 0, 0.1);
          outline: 1px solid #ccc;
          margin: 0 auto;
          margin-top: 0.34rem;
          .mint-swipe-items-wrap {
            width: 6.4rem;
            height: 1.3rem;
            .mint-swipe-item {
              width: 6.4rem;
              height: 1.3rem;
              color: #ccc;
              font-size: 0.3rem;
              text-align: center;
              line-height: 1.3rem;
            }
          }
        }
        .cup {
          height: 4.1rem;
          width: 2.4rem;
          margin: 0 auto;
          margin-top: 0.46rem;
        }
      }
    }
  }
}

</style>
