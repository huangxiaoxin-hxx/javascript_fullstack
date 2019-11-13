<template>
  <div>
    <div class="ratings">
      <div class="ratings-content">
        <div class="overview">
          <div class="overview-left">
            <h1 class="score">4.2</h1>
            <div class="title">综合评分</div>
            <div class="rank">高于周边商家69.2%</div>
          </div>
          <div class="overview-right">
            <div class="score-warpper">
              <span class="title">服务态度</span>
              <div class="star"></div>
              <span class="score">4.1</span>
            </div>
            <div class="score-warpper">
              <span class="title">商品评分</span>
              <div class="star"></div>
              <span class="score">4.3</span>
            </div>
            <div class="delivery-wrapper">
              <span class="title">送达时间</span>
              <span class="delivery">38分钟</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
.overview
  display flex
  padding 18px 0
  .overview-left
    -webkit-box-flex 0
    -ms-flex 0 0 137px
    flex 0 0 137px
    padding 6px 0
    width 137px
    border-right 1px solid rgba(7,17,27,.1)
    text-align center
    .score
      margin-bottom 6px
      line-height 28px
      font-size 24px
      color #f90
    .title
      margin-bottom 8px
      line-height 12px
      font-size 12px
      color #07111b
    .rank
      line-height 10px
      font-size 10px
      color #93999f
  .overview-right
    -webkit-box-flex 1
    flex 1
    padding 6px 0 6px 24px
    .score-warpper
      margin-bottom 8px
      font-size 0
      .title
        display inline-block
        line-height 18px
        vertical-align top
        font-size 12px
        color #07111b
      .star
        display inline-block
        margin 0 12px
        vertical-align top
      .score
        display inline-block
        line-height 18px
        vertical-align top
        font-size 12px
        color #f90
    .delivery-wrapper
      font-size 0
      .title
        line-height 18px
        font-size 12px
        color #07111b
</style>