<template>
  <div class="seller">
    <div class="seller-content" ref="sellerWrapper">
      <div>
        <div class="overview">
          <h1 class="title">{{seller.name}}</h1>
          <div class="desc border-1px">
            <div class="star star-36">
              <span class="star-item" :class="[seller.foodScore>=1?'on':'off']"></span>
              <span class="star-item" :class="[seller.foodScore>=2?'on':'off']"></span>
              <span class="star-item" :class="[seller.foodScore>=3?'on':'off']"></span>
              <span class="star-item" :class="[seller.foodScore>=4?'on':'off']"></span>
              <span class="star-item" :class="[seller.foodScore>=5?'on':'off']"></span>
            </div>
            <span class="text">({{seller.ratingCount}})</span>
            <span class="text">月售{{seller.sellCount}}单</span>
          </div>
          <ul class="remark">
            <li class="block on">
              <h2>起送价</h2>
              <div class="content">
                <span class="stress">{{seller.minPrice}}</span>元
              </div>
            </li>
            <li class="block on">
              <h2>商家配送</h2>
              <div class="content">
                <span class="stress">{{seller.deliveryPrice}}</span>元
              </div>
            </li>
            <li class="block">
              <h2>平均配送时间</h2>
              <div class="content">
                <span class="stress">{{seller.deliveryTime}}</span>分钟
              </div>
            </li>
          </ul>
          <div class="favorite" @click="isCollect=!isCollect">
            <span class="icon-favorite" :class="{'active':isCollect}"></span>
            <span class="text" v-text="isCollect?'已收藏':'收藏'"></span>
          </div>
        </div>
        <div class="split"></div>
        <div class="bulletin">
          <h1 class="title">公告与活动</h1>
          <div class="content-wrapper border-1px">
            <p class="content">{{seller.bulletin}}</p>
          </div>
          <ul class="supports">
            <li class="support-item border-1px" v-for="(item, index) in seller.supports" :key="index">
              <span class="icon" :class="classMap[item.type]"></span>
              <span class="text">{{item.description}}</span>
            </li>
          </ul>
        </div>
        <div class="split"></div>
        <div class="pics">
          <h1 class="title">商家实景</h1>
          <div class="pic-wrapper" ref="picWrapper">
            <ul class="pic-list">
              <li class="pic-item" v-for="pic of seller.pics" :key="pic">
                <img :src="pic" alt="">
              </li>
            </ul>
          </div>
        </div>
        <div class="split"></div>
        <div class="info">
          <h1 class="title border-1px">
            商家信息
          </h1>
          <ul>
            <li class="info-item" v-for="info of seller.infos" :key="info">{{info}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      isCollect: false
    }
  },
  created () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  methods:{
    _initScroll () {
      this.ratingScroll = new BScroll(this.$refs.sellerWrapper, {
        click: true
      })
      this.picScroll = new BScroll(this.$refs.picWrapper, {
        click: true,

        scrollX: true
      })
      console.log(this.ratingScroll)
      console.log(this.picScroll)
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin'
*
  margin 0
  padding 0
  font-size 100%
  font-weight normal
li
  list-style none
.split
  width 100%
  height 16px
  border-top 1px solid rgba(7,17,27,.1)
  border-bottom 1px solid rgba(7,17,27,.1)
  background #f3f5f7
.seller 
  position absolute
  top 174px
  bottom 0
  overflow hidden
  .seller-content
    height 100%
  .overview
    position relative
    padding 18px
    .title
      margin-bottom 8px
      line-height 14px
      color #07111b
      font-size 14px
    .desc
      padding-bottom 18px
      position relative
      font-size 0
      .star
        display inline-block
        margin-right 8px
        vertical-align top
        .star-item
          width 15px
          height 15px
          margin-right 6px
          background-size 15px 15px
          display inline-block
          background-repeat no-repeat
        .star-item.on
          background-image url('./xingxinghuang.png')
        .star-item.off
          background-image url('./xingxinghui.png')
      .text
        display inline-block
        margin-right 12px
        line-height 18px
        vertical-align top
        font-size 10px
        color #4d555d
      &:after
        display block
        position absolute
        left 0
        bottom 0
        width 100%
        border-top 1px solid rgba(7,17,27,.1)
        content " "
    .remark
      display flex
      padding-top 18px
      .block
        flex 1
        text-align center
        &.on
          border-right 1px solid rgba(7,17,27,.1)
        h2
          margin-bottom 4px
          line-height 10px
          font-size 10px
          color #93999f
        .content
          line-height 24px
          font-size 10px
          color #07111b
          .stress
            font-size 24px
    .favorite
      position absolute
      width 50px
      right 11px
      top 18px
      text-align center
      .icon-favorite
        display block
        margin-bottom 4px
        line-height 24px
        font-size 24px
        color #d4d6d9
        &.active
          color #f01414
        &:before
          content "\E904"
      .text
        line-height 10px
        font-size 10px
        color #4d555d
  .bulletin
    padding 18px 18px 0
    .title
      margin-bottom 8px
      line-height 14px
      color #07111b
      font-size 14px
    .content-wrapper
      padding 0 12px 16px
      position relative
      .content
        line-height 24px
        font-size 12px
        color #f01414
      &:after
        display block
        position absolute
        left 0
        bottom 0
        width 100%
        border-top 1px solid rgba(7,17,27,.1)
        content " "
    .supports
      .support-item
        padding 16px 12px
        position relative
        font-size 0
        &:after
          display block
          position absolute
          left 0
          bottom 0
          width 100%
          border-top 1px solid rgba(7,17,27,.1)
          content " "
        .icon
          display inline-block
          width 16px
          height 16px
          vertical-align top
          margin-right 6px
          background-size 16px 16px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
        .text
          line-height 16px
          font-size 12px
          color #07111b
  .pics
    padding 18px
    .title
      margin-bottom 12px
      line-height 14px
      color #07111b
      font-size 14px
    .pic-wrapper
      width 340px
      overflow hidden
      white-space nowrap
      .pic-list
        width 498px
        font-size 0
        .pic-item
          display inline-block
          margin-right 6px
          width 120px
          height 90px
          img
            width 100%
            height 100%
  .info
    padding 18px 18px 0
    color #07111b
    .title
      padding-bottom 12px
      line-height 14px
      position relative
      font-size 14px
      &:after
        display block
        position absolute
        left 0
        bottom 0
        width 100%
        border-top 1px solid rgba(7,17,27,.1)
        content " "
    .info-item
      padding 16px 12px
      line-height 16px
      position relative
      font-size 12px
      &:after
        display block
        position absolute
        left 0
        bottom 0
        width 100%
        border-top 1px solid rgba(7,17,27,.1)
        content " "
</style>