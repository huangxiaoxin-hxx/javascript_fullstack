<template>
  <div>
    <div class="list" ref="list">
      <div class="area">
        <div class="cities">
          <div class="city-character-list" v-for="(val, key) of cities" :key="key">
            <div class="title" :ref="key">{{ key }}</div>
            <div class="area-city">
              <div class="city-item border-bottom" v-for="item of val" :key="item.id"
              @click="handleCity">{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="characters">
      <li class="item" v-for="item of characters" :key="item"
      @click="handleCharacterClick">{{item}}</li>
    </ul>
  </div> 
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      cities: []
    }
  },
  mounted () {
    // axios.get('/static/mock/city.json')
    // .then
    // 代理
    // webpack-dev-server localhost:8080
    // 反向代理 代理的是客户端
    this.scroll = new BScroll(this.$refs.list,{
      click: true
    })
    axios.get('/api/city.json')
    .then(res => {
      // console.log(res)
      this.cities = res.data.data.cities
    })
  },
  computed: {
    characters() {
      return Object.keys(this.cities)
    }
  },
  methods: {
    handleCharacterClick (e) {
      const char = e.target.innerText
      // console.log(char)
      this.scroll.scrollToElement(this.$refs[char][0]);
      // console.log(this.$refs[char][0])
    },
    handleCity () {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/varlable.scss";
.characters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 2rem;
  bottom: 0;
  right: 0;
  width: .4rem;
  font-size: .24rem;
  font-weight: bold;
  .item {
    color: $bgColor;
    line-height: .4rem;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 2.22rem;
  left: 0;
  right: 0;
  bottom: 0;
  .area {
    .title {
      height:.24rem;
      line-height: .24rem;
      font-size: .26rem;
      padding: .24rem .3rem;
      background: $homeBgColor;
    }
    .area-city {
      padding: .1rem .5rem .1rem .24rem;
      overflow: hidden;
      .location-city {
        background: $bgColor;
        color: #fff;
      }
      .city-button {
        float: left;
        height: .4rem;
        line-height: .4rem;
        font-size: .26rem;
        width:29%;
        text-align: center;
        margin: .1rem;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
    .cities {
      .city-character-list {
        .area-city {
          padding: 0;
          .city-item {
            height: .5rem;
            line-height: .5rem;
            font-size: .26rem;
            padding: .1rem .5rem .1rem .34rem;
          }
        }
      }
    }
  }
}
</style>