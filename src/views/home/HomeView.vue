<template>
  <div class="home">
    <div class="banner">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in bannerList" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
      </swiper>
   </div>
    <div class="other">
      <div class="l"></div>
      <div class="r"></div>
    </div>
    <div class="list1 list-back">
      <div class="head">
        <span class="active">HOT</span>
        <span @click="handleAllGame">ALL GAME</span>
      </div>
      <div class="con">
        <HomeItem1
          v-for="(item, i) in hotList" :key="i" :item="item"
        />
      </div>
    </div>
    <div class="list2">
      <div class="item list-back" v-for="item in packageList" :key="item.id">
        <HomeItem2
          :item="item"
        />
      </div>
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
      background: red;
    }
    .r {
      flex: 1;
      background: blue;
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
    .con {
      display: flex;
      flex-wrap: wrap;
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
