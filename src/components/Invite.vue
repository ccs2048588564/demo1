<template>
    <div class="invite">
      <div class="wrapper" ref="wrapper">
        <div class="wrapper_cont">
          <img src="../../static/imgs/zhaop.jpg">
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
  name: 'Invite',
  data(){
    return{
      scroll:null,
      show:false
    }
  },
  methods:{
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
        if(ops.y<=-200){
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
.invite{
  width: 100%;
  .wrapper {
    height: 100%;
    width: 7.5rem;
    position: relative;
    top: 0;
    bottom: 0;
    .wrapper_cont {
      width: 7.5rem;
      img {
        width: 100%;
        height: 13.34rem;
      }
    }
  }
}
</style>
