<template>
  <div>
    <div class="ratings">
      <div class="ratings-content" ref="ratingsWrapper">
        <div>
        <div class="overview">
          <div class="overview-left">
            <h1 class="score">{{seller.score}}</h1>
            <div class="title">综合评分</div>
            <div class="rank">高于周边商家{{seller.rankRate}}%</div>
          </div>
          <div class="overview-right">
            <div class="score-warpper">
              <span class="title">服务态度</span>
              <div class="star">
                <span class="star-item" :class="[seller.serviceScore>=1?'on':'off']"></span>
                <span class="star-item" :class="[seller.serviceScore>=2?'on':'off']"></span>
                <span class="star-item" :class="[seller.serviceScore>=3?'on':'off']"></span>
                <span class="star-item" :class="[seller.serviceScore>=4?'on':'off']"></span>
                <span class="star-item" :class="[seller.serviceScore>=5?'on':'off']"></span>
              </div>
              <span class="score">{{seller.serviceScore}}</span>
            </div>
            <div class="score-warpper">
              <span class="title">商品评分</span>
              <div class="star">
                <span class="star-item" :class="[seller.serviceScore>=1?'on':'off']"></span>
                <span class="star-item" :class="[seller.serviceScore>=2?'on':'off']"></span>
                <span class="star-item" :class="[seller.serviceScore>=3?'on':'off']"></span>
                <span class="star-item" :class="[seller.serviceScore>=4?'on':'off']"></span>
                <span class="star-item" :class="[seller.serviceScore>=5?'on':'off']"></span>
              </div>
              <span class="score">{{seller.foodScore}}</span>
            </div>
            <div class="delivery-wrapper">
              <span class="title">送达时间</span>
              <span class="delivery">{{seller.deliveryTime}}分钟</span>
            </div>
          </div>
        </div>
        <div class="split"></div>
        <div class="ratingselect">
          <div class="rating-type border-1px">
            <span class="block positive" @click="selectBlockId=0" :class="{'active':selectBlockId==0}">
              全部<span class="count">{{ratings.length}}</span>
            </span>
            <span class="block positive" @click="selectBlockId=1" :class="{'active':selectBlockId==1}">
              满意<span class="count">{{goodRatings}}</span>
            </span>
            <span class="block negative" @click="selectBlockId=2" :class="{'active':selectBlockId==2}">
              不满意<span class="count">{{badRatings}}</span>
            </span>
          </div>
          <div class="switch" @click="isContent=!isContent" :class="{'on':isContent}">
            <span class="icon-check_circle"></span>
            <span class="text">只看有内容的评价</span>
          </div>
        </div>
        <div class="rating-wrapper" >
          <ul>
            <li v-for="(item, index) in ratings" :key="index" 
            class="rating-item"
            :class="{'off':(selectBlockId==1&&item.rateType==1)||(selectBlockId==2&&item.rateType==0)||
            (isContent&&item.text=='')}"
            >
              <div class="avatar">
                <img :src="item.avatar" alt="">
              </div>
              <div class="content">
                <h1 class="name">{{item.username}}</h1>
                <div class="star-wrapper">
                  <div class="star star-24">
                    <span class="star-item" :class="[item.score>=1?'on':'off']"></span>
                    <span class="star-item" :class="[item.score>=2?'on':'off']"></span>
                    <span class="star-item" :class="[item.score>=3?'on':'off']"></span>
                    <span class="star-item" :class="[item.score>=4?'on':'off']"></span>
                    <span class="star-item" :class="[item.score>=5?'on':'off']"></span>
                  </div>
                  <span class="delivery">{{item.deliveryTime}}分钟送达</span>
                </div>
                <p class="text">{{item.text}}</p>
                <div class="recommend">
                  <span class="icon-thumb_up" v-if="item.rateType==0"></span>
                  <span class="item" v-for="(food, indexfood) in item.recommend" :key="indexfood">{{food}}</span>
                </div>
                <div class="time">{{item.rateTime}}</div>
              </div>
            </li>
          </ul>
        </div>
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
      ratings: [],
      selectBlockId: 0,
      isContent: true
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/ratings.json')
    .then((res) => {
      console.log(res)
      if (res.data.errno === 0) {
        this.ratings = res.data.data
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    })
  },
  computed: {
    goodRatings () {
      let ratingcount = 0
      this.ratings.forEach(rating => {
        if (rating.rateType == 0) {
          ratingcount++
        }
      })
      return ratingcount
    },
    badRatings () {
      let ratingcount = 0
      this.ratings.forEach(rating => {
        if (rating.rateType == 1) {
          ratingcount++
        }
      })
      return ratingcount
    },
    goodRatingShow() {

    }
  },
  methods: {
    selectBlock (e) {
      console.log(e.currentTarget.innerHTML)
    },
    _initScroll () {
      this.ratingScroll = new BScroll(this.$refs.ratingsWrapper, {
        click: true
      })
      console.log(this.ratingScroll)
    }
  }
}

</script>

<style lang='stylus' scoped>
.star.star-24 .star-item.on
  background-image url('./xingxinghuang.png')
.star.star-24 .star-item.off
  background-image url('./xingxinghui.png')
.star.star-24 .star-item
  width 10px
  height 10px
  margin-right 3px
  background-size 10px 10px
.star .star-item
  display inline-block
  background-repeat no-repeat
.ratings .rating-wrapper .rating-item .content .recommend .icon-thumb_up, .ratings .rating-wrapper .rating-item .content .recommend .item
    display inline-block
    margin 0 8px 4px 0
    font-size 9px
li
  list-style none
.ratings
  height 500px
  overflow hidden
.ratings-content
  height 100%
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
      .delivery
        margin-left 12px
        font-size 12px
        color #93999f
.split
  width 100%
  height 16px
  border-top 1px solid rgba(7,17,27,.1)
  border-bottom 1px solid rgba(7,17,27,.1)
  background #f3f5f7
.ratingselect
  .rating-type
    padding 18px 0
    margin 0 18px
    position relative
    font-size 0
    .block
      display inline-block
      padding 8px 12px
      margin-right 8px
      line-height 16px
      border-radius 1px
      font-size 12px
      color #4d555d
    .positive
      background rgba(0,160,220,.2)
      &.active
        background #00a0dc
        color #fff
    .negative
      background rgba(77,85,93,.2)
      &.active
        background #4d555d
        color #fff
  .switch
    padding 12px 18px
    line-height 24px
    border-bottom 1px solid rgba(7,17,27,.1)
    color #93999f
    font-size 0
    &.on
      color #00c850
    .icon-check_circle
      display inline-block
      vertical-align top
      margin-right 4px
      font-size 24px
    .text
      display inline-block
      vertical-align top
      font-size 12px
      color #93999f
.rating-wrapper
  padding 0 18px
  .rating-item
    display flex
    padding 18px 0
    position relative
    &:before
      display block
      position absolute
      left 0
      bottom 0
      width 100%
      border-top 1px solid rgba(7,17,27,.1)
      content " "
    .avatar
      -webkit-box-flex: 0;
      -ms-flex: 0 0 28px;
      flex 0 0 28px
      width 28px
      margin-right 12px
      img
        border-radius 50%
        width 28px
        height 28px
    .content
      position relative
      flex 1
      .name
        margin-bottom 4px
        line-height 12px
        font-size 10px
        color #07111b
      .star-wrapper
        margin-bottom 6px
        font-size 0
        .star
          display inline-block
          margin-right 6px
          vertical-align top
      .text
        margin-bottom 8px
        line-height 18px
        color #07111b
        font-size 12px
        font-weight normal
      .recommend
        line-height 16px
        font-size 0
        .icon-thumb_up
          color #00a0dc
        .item
          padding 0 6px
          border 1px solid rgba(7,17,27,.1)
          border-radius 1px
          color #93999f
          background #fff
      .time
        position absolute
        top 0
        right 0
        line-height 12px
        font-size 10px
        color #93999f
.rating-item.off
  display none
</style>
