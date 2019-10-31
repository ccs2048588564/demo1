<template>
  <div class="new">
      <div class="tab_bg">
          <i></i><i></i><i></i>
          <ul class="tab_ul">
              <li
                v-for="(item,index) in list"
                :key="index"
                :class="{active : index===actived}"
                @click="tabFn(index)"
              >
                <span>{{item.title}}</span>
              </li>
          </ul>
      </div>
      <div class="wrapper" ref="wrapper">
          <div class="tab">
            <mt-loadmore
              :top-method="loadTop"
              @top-status-change="handleTopChange"
              ref="loadmore"
              :topPullText="'下拉刷新'"
              :topDropText="'释放更新'"
              :topLoadingText="'加载中...'"
            >
              <div class="tab_cont">
                  <div class="head">
                      <img src="../../static/imgs/pageheader1.jpg">
                      <div class="head_pic"><img src="../../static/imgs/dakouzai2.png" ></div>
                      <ul class="head_ul" :style="{display:index===actived ? 'block':'none'}"
                          :key="index"
                          v-for="(a,index) in title">
                          <li  :key="index"
                               v-for="(item,index) in a"
                          >
                            {{item.text}}
                          </li>
                      </ul>
                  </div>
                  <ul
                      :key="index"
                      v-for="(a,index) in bg"
                      :style="{display:index===actived ? 'block':'none'}"
                  >
                      <li v-for="(item,index) in a" :key="index">
                        <img v-lazy="item.img">
                      </li>
                  </ul>
              </div>
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
  name: 'New',
  data(){
    return{
      actived:0,
      list:[
        {title:'大口鲜果'},
        {title:'大口奶茶'},
        {title:'大口奶盖'},
        {title:'大口雪冰'},
        {title:'大口暖饮'},
        {title:'大口咖啡'}
      ],
      bg:[
        [
          {img:require("../../static/imgs/details1.jpg")},
          {img:require("../../static/imgs/details2.jpg")},
          {img:require("../../static/imgs/details3.jpg")},
          {img:require("../../static/imgs/details4.jpg")},
          {img:require("../../static/imgs/details5.jpg")},
        ],
        [
          {img:require("../../static/imgs/details6.jpg")},
          {img:require("../../static/imgs/details7.jpg")},
          {img:require("../../static/imgs/details8.jpg")},
          {img:require("../../static/imgs/details9.jpg")},
          {img:require("../../static/imgs/details10.jpg")},
        ],
        [
          {img:require("../../static/imgs/details11.jpg")},
          {img:require("../../static/imgs/details12.jpg")},
          {img:require("../../static/imgs/details13.jpg")},
          {img:require("../../static/imgs/details14.jpg")},
          {img:require("../../static/imgs/details15.jpg")},
          {img:require("../../static/imgs/details16.jpg")},
        ],
        [
          {img:require("../../static/imgs/details17.jpg")},
          {img:require("../../static/imgs/details18.jpg")},
          {img:require("../../static/imgs/details19.jpg")},
          {img:require("../../static/imgs/details20.jpg")},
          {img:require("../../static/imgs/details21.jpg")},
        ],
        [
          {img:require("../../static/imgs/details22.jpg")},
          {img:require("../../static/imgs/details23.jpg")},
          {img:require("../../static/imgs/details24.jpg")},
          {img:require("../../static/imgs/details25.jpg")},
          {img:require("../../static/imgs/details26.jpg")},
          {img:require("../../static/imgs/details27.jpg")},
          {img:require("../../static/imgs/details28.jpg")},
        ],
        [
          {img:require("../../static/imgs/details29.jpg")},
          {img:require("../../static/imgs/details30.jpg")},
          {img:require("../../static/imgs/details31.jpg")},
        ],
      ],
      title:[
        [{text:'大'},{text:'口'},{text:'鲜'},{text:'果'}],
        [{text:'大'},{text:'口'},{text:'奶'},{text:'茶'}],
        [{text:'大'},{text:'口'},{text:'奶'},{text:'盖'}],
        [{text:'大'},{text:'口'},{text:'雪'},{text:'冰'}],
        [{text:'大'},{text:'口'},{text:'暖'},{text:'饮'}],
        [{text:'大'},{text:'口'},{text:'咖'},{text:'啡'}],
      ],
      scroll:null,
      show:false
    }
  },
  methods: {
    handleTopChange(status){//查看下拉刷新的状态
      console.log(status)
    },
    loadTop() {// 加载更多数据
      setTimeout(()=>{
        this.$refs.loadmore.onTopLoaded();
      },2000)
      // console.log('刷新')
    },
    tabFn(index) {
      this.actived = index
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
        if(ops.y<=-100){
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
  },
}
</script>

<style scoped lang="less">
  @import "~@/assets/less/base.less";
.new{
  width: 100%;
  .wrapper {
    width: 100%;
    height: 100%;
    width: 7.5rem;
    position: relative;
    top: 0;
    bottom: 0;
    .tab {
      width: 100%;
    }
  }
  .tab_bg {
    position: fixed;
    left: 0.24rem;
    top: 3.94rem;
    /*width: 100%;*/
    z-index: 10;

    i:nth-of-type(1) {
      display: block;
      width: 0.12rem;
      height: 4.94rem;
      background-color: #fff;
      position: absolute;
      top: 0.7rem;
      left: 0.12rem;
      z-index: 2;
    }

    i:nth-of-type(2) {
      display: block;
      width: 0.12rem;
      height: 4.94rem;
      background-color: #fff;
      position: absolute;
      top: 0.7rem;
      left: 1.28rem;
      z-index: 2;
    }

    i:nth-of-type(3) {
      background: url("../../static/imgs/dakouzai3.png");
      width: 1.8rem;
      height: 1.6rem;
      display: block;
      position: absolute;
      z-index: 8;
      top: -1.4rem;
      left: -0.12rem;
    }

    .tab_ul {
      /*width: 100%;*/
      position: absolute;
      z-index: 10;

      li {
        width: 1.54rem;
        height: 0.7rem;
        background: #fff;
        border-radius: 0.1rem;
        text-align: center;
        margin-bottom: 0.22rem;

        span {
          width: 1.4rem;
          height: 0.58rem;
          outline: 0.01rem dashed #fcac30;
          display: block;
          position: relative;
          left: 0.07rem;
          top: 0.06rem;
          line-height: 0.58rem;
          font-size: 0.24rem;
        }
      }
    }
  }
}
</style>
