<template>
    <div class="join">
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
            <img src="../../static/imgs/Tojoinin1.jpg">
            <img src="../../static/imgs/Tojoinin2.jpg">
            <img src="../../static/imgs/Tojoinin3.jpg">
            <div class="box">
              <ul class="box_ul">
                <li>
                  <mt-swipe :show-indicators="false" :auto="3000">
                    <mt-swipe-item><img src="../../static/imgs/banner1.jpg"></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/imgs/banner11.jpg"></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/imgs/banner111.jpg"></mt-swipe-item>
                  </mt-swipe>
                  <div class="box_ul_right">
                    <div class="right_container">
                      <ul class="right_ul_top">
                        <li>饮品研发团队</li>
                        <li>纵横茶饮界20年</li>
                      </ul>
                      <ul class="right_ul_bottom">
                        <li>58钟新产品，6大系列</li>
                        <li>坚守茶饮品质</li>
                        <li>引领市场创新</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <mt-swipe :show-indicators="false" :auto="4000">
                    <mt-swipe-item><img src="../../static/imgs/banner2.jpg"></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/imgs/banner22.jpg"></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/imgs/banner222.jpg"></mt-swipe-item>
                  </mt-swipe>
                  <div class="box_ul_right">
                    <div class="right_container">
                      <ul class="right_ul_top">
                        <li>对消费者亲民</li>
                        <li>对加盟商同样友善</li>
                      </ul>
                      <ul class="right_ul_bottom">
                        <li>有人流即开一家茶饮店</li>
                        <li>有效率低成本</li>
                        <li>小本投资就能做老板</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <mt-swipe :show-indicators="false" :auto="3500">
                    <mt-swipe-item><img src="../../static/imgs/banner3.jpg"></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/imgs/banner33.jpg"></mt-swipe-item>
                    <mt-swipe-item><img src="../../static/imgs/banner333.jpg"></mt-swipe-item>
                  </mt-swipe>
                  <div class="box_ul_right">
                    <div class="right_container">
                      <ul class="right_ul_top">
                        <li>品牌建设加强</li>
                        <li>做新生代的国民好奶茶</li>
                      </ul>
                      <ul class="right_ul_bottom">
                        <li>2018年新门店开业期间，</li>
                        <li>平均每店卖出500杯</li>
                        <li>最高单日卖出2000杯</li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <img src="../../static/imgs/Tojoinin4.jpg">
            <img src="../../static/imgs/Tojoinin5.jpg">
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
  name: 'Join',
  data(){
    return{
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
.join{
  width: 100%;
  .wrapper {
    height: 100%;
    width: 7.5rem;
    position: relative;
    top: 0;
    bottom: 0;
    .wrapper_cont {
      width: 7.5rem;
      .box {
        height: 12.8rem;
        width: 100%;
        background-color: #fff;
        .box_ul {
          width: 100%;
          padding-top: 0.3rem;
          li {
            height: 3.26rem;
            margin-bottom: 0.84rem;
            margin-left: 0.46rem;
            display: flex;
            .box_ul_right {
              margin-left: 0.34rem;
              .right_container {
                width: 3.2rem;
                height: 2rem;
                border-left: 0.08rem solid #fed000;
                box-sizing: border-box;
                margin-top: 0.58rem;
                .right_ul_top {
                  margin: 0 0 0.48rem 0.24rem;
                  li {
                    font-size: 0.26rem;
                    font-weight: bold;
                    height: 0.3rem;
                    margin: 0;
                  }
                }
                .right_ul_bottom {
                  margin-left: 0.24rem;
                  li {
                    font-size: 0.22rem;
                    height: 0.3rem;
                    margin: 0;
                  }
                }
              }
            }
            .mint-swipe {
              width: 3.26rem;
              height: 3.26rem;
              border-radius: 50%;
              .mint-swipe-items-wrap {
                width: 100%;
                height: 3.26rem;
                border-radius: 50%;
                .mint-swipe-item {
                  width: 100%;
                  height: 3.26rem;
                  border-radius: 50%;
                  img {
                    width: 100%;
                    height: 3.26rem;
                    border-radius: 50%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
