<template>
  <div class="zoom">
    <div class="small-box"
    @mouseover="handOver"
    @mousemove="handMove"
    @mouseout="handOut">
      <img :src="src" alt="" />
      <div class="mask"></div>
    </div>
    <div class="layer">
      <div class="big-box">
        <img :src="bigSrc" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true
    }
  },
  props: {
    bigSrc: {
      type: String
    },
    src: {
      type: String
    }
  },
  methods: {
    handOver () {},
    handMove (e) {
      // console.log(e.clientX,e.clientY)
      let objX = e.clientX
      let objY = e.clientY
      let imgClientObj = this.$el.querySelector('.small-box').getBoundingClientRect();

      let maskx = objX - imgClientObj.x - 210 / 2
      let masky = objY - imgClientObj.y - 210 / 2

      maskx = maskx < 0 ? 0 : maskx
      masky = masky < 0 ? 0 : masky
      if(maskx + 210 >= 430) {
        maskx = 430 -210
      }
      if(masky + 210 >= 430) {
        masky = 430 -210
      }
      console.log(objX - imgClientObj.x,objY - imgClientObj.y)
      if(objX - imgClientObj.x < 5 || objX - imgClientObj.x > 425 || objY - imgClientObj.y < 5 || objY - imgClientObj.y > 425) {
        this.isShow = false
      }
      // 这个组件的实例
      let maskNode = this.$el.querySelector('.mask')
      maskNode.style.transform = `translate(${maskx}px, ${masky}px)`

      let percent = (800 - 430) / (430 - 210)
      let bx = - maskx * percent
      let by = - masky * percent
      let bigImage = this.$el.querySelector('.big-box')
      bigImage.style.transform = `translate(${bx}px,${by}px)`
    },
    handOut () {}
  }
}
</script>

<style>
.zoom {
  position: relative;
}
.small-box {
  position: relative;
  width: 430px;
  height: 430px;
}
.mask {
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 210px;
  height: 210px;
}
.layer {
  position: absolute;
  border: 1px solid #000;
  width: 430px;
  height: 430px;
  overflow: hidden;
}
</style>