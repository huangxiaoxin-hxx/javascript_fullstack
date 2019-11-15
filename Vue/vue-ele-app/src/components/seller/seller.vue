<template>
  <div class="seller">
    <div class="seller-content">
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
            <li class="block">
              <h2>起送价</h2>
              <div class="content">
                <span class="stress">{{seller.minPrice}}</span>元
              </div>
            </li>
            <li class="block">
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
        <div class="pics"></div>
        <div class="split"></div>
        <div class="info"></div>
      </div>
    </div>
  </div>
</template>

<script>
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
</style>