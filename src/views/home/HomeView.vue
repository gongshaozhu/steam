<template>
  <div class="home">
    <div class="banner">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </swiper-slide>
      </swiper>
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
   </div>
    <div class="other">
      <div class="l">
        <span class="s1">JOGO</span>
        <span class="s2">{{ this.games() }}</span>
        <span class="s3">ONLINE</span>
        <span class="s4">{{ this.onlines() }}</span>
      </div>
      <div class="r">
        <div class="s1"><span>Segurança</span></div>
        <div class="s2"><span>jogue online</span></div>
        <div class="s3"><span>arquivável</span></div>
      </div>
    </div>
    <div class="list1 list-back">
      <div class="head">
        <span class="active">HOT</span>
        <span @click="handleAllGame">ALL GAME</span>
      </div>
      <div class="con">
        <transition-group name="list" tag="div">
          <HomeItem1
            v-for="item in hotList" :key="item.id" :item="item"
          />
        </transition-group>
      </div>
    </div>
    <div class="list2">
      <transition-group name="list" tag="div">
        <div class="item list-back" v-for="item in packageList" :key="item.id">
          <HomeItem2
            :item="item"
          />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeItem1 from '@/views/home/HomeItem1'
import HomeItem2 from '@/views/home/HomeItem2'

export default {
  name: 'HomeView',
  data() {
    return {
      bannerList: [],
      hotList: [],
      packageList: [],
      swiperOptions: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        loop: true,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  components: {
    HomeItem1,
    HomeItem2,
  },
  mounted () {
    this.handleInit()
  },
  methods: {
     games() {    // 当前游戏数
       var d = new Date();
       return d.getMonth() * 30 + d.getDate() + 1200;
     },
     onlines() {      // 在线人数
      var d = new Date();
      var d1 = (d.getMonth() * 30 + d.getDate()) * 400
      var d2 = d.getHours() * 60 + d.getMinutes();
      var ran = Math.random() * 200
      if (600 < d2 < 1320) {
        return Math.floor(d2 * d2 * 0.10522 - 63.132 * d2 + d1 + ran);
      } else {
        return Math.floor(d2 * 138.8889 + d1 + ran);
      }
    },
    async handleInit() {
      try {
        const res = await this.$api.getHome()
        this.hotList = res.hotList
        this.bannerList = res.bannerList
        this.packageList = res.packageList
      } catch (e) {
        console.log(e);
      }
    },
    handleAllGame() {
      this.$router.push('/all-game')
    }
  }
}
</script>

<style scoped lang="less">

.home {
  width: 1136px;
  .banner {
    height: 128px;
    cursor: pointer;
    position: relative;
    img {
      width: 1136px;
      height: 128px;
      border-radius: 8px;
    }
    /deep/.swiper-container {
      height: 100%;
      width: 100%;
      border-radius: 8px;
      overflow: hidden;
      .swiper-slide {
        /*background: red;*/
        img {
          border: none;
          outline: none;
        }
      }
    }
  }
  .other {
    margin-top: 12px;
    margin-bottom: 12px;
    height: 48px;
    display: flex;
    .l {
      width: 398px;
      background: url("~@/assets/jxl.png") no-repeat;
      background-size: 100%;
      display: flex;
      align-items: center;
      .s1, .s2, .s3, .s4 {
        font-size: 18px;
        font-family: MyBebas;
        color: rgba(247, 188, 41, .6)
      }
      .s1 {
        margin-left: 30px;
        margin-right: 13px;
      }
      .s3 {
        margin-left: 95px;
        margin-right: 15px;
      }
      .s2, .s4 {
        color: #F7BC29;
      }
    }
    .r {
      flex: 1;
      background: url("~@/assets/jxr.png") no-repeat;
      background-size: 100%;
      display: flex;
      align-items: center;
      .s1, .s2, .s3 {
        display: flex;
        align-items: center;
        span {
          font-size: 16px;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: #B4B4B4;
        }
      }
      .s1 {
        margin-left: 30px;
      }
      .s2 {
        margin-left: 105px;
        margin-right: 92px;
      }
    }
  }
  .list-back {
    background: #212330;
    padding: 15px 20px;
    border-radius: 8px;
  }
  .list1 {
    flex-direction: column;
    flex-wrap: wrap;
    display: flex;
    padding-bottom: 0;
    .con {
      display: flex;
      flex-wrap: wrap;
      >div {
        display: flex;
        flex-wrap: wrap;
      }
    }
    .head {
      font-size: 16px;
      font-weight: bold;
      color: #FFFFFF;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      span {
        cursor: pointer;
      }
      .active {
        position: relative;
        cursor: pointer;
        &:after {
          position: absolute;
          width: 100%;
          height: 3px;
          background: #F7BC29;
          content: '';
          bottom: 0;
          left: 0;
        }
      }
    }
  }
  .list2 {
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    margin-top: 12px;
    >div {
      flex-direction: row;
      flex-wrap: wrap;
      display: flex;
    }
    .item {
      padding: 20px;
      width: 560px;
      box-sizing: border-box;
      margin-right: 16px;
      margin-bottom: 16px;
      &:nth-child(2n) {
        margin-right: 0;
      }
    }
  }
}

</style>
