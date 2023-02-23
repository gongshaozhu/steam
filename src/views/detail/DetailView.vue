<template>
  <div class="wrapper">
    <template v-if="detail">
      <div class="banner">
<!--        <video src="https://cdn.akamai.steamstatic.com/steam/apps/256915486/movie480_vp9.webm?t=1668017731"></video>-->
        <img class="cover" :src="detail.coverUrl" alt="">
        <div class="des">
          <div class="title">{{detail.name}}</div>
          <div class="tag">
            <span v-for="(v, i) in detail.categoryList" :key="i">{{v}}</span>
          </div>
          <div class="col"><span>Original Price</span></div>
          <div class="price"><span>Original Price &nbsp;&nbsp;</span><span>$45</span></div>
          <div class="price"><span>Original Price &nbsp;&nbsp;</span><span>$45</span></div>
          <div class="btn">PLAY NOW</div>
        </div>
        <div class="detail-slide">
          <div :style="{width: `${width}px`}">
            <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide v-for="(item, i) in detail.gameUrl.split(';')" :key="i">
                <video v-if="item.indexOf('webm') > -1" :src="item"></video>
                <img v-else :src="detail.coverUrl">
              </swiper-slide>
            </swiper>
            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
          </div>
        </div>
      </div>
      <div class="intro">
        <div class="l">
          <span class="intr-title">introdução do jogo</span>
          <div v-html="detail.introduction"></div>
        </div>
        <div class="r">
          <div class="t">
            <span class="intr-title">dica importante</span>
            <p v-html="detail.detail"></p>
          </div>
          <div class="b">
            <span class="intr-title">Recomendação de configuração</span>
            <p v-html="detail.systemRequirements"></p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: null,
      width: 0,
      slideWidth: 0,
      swiperOptions: {
        slidesPerView: 5,
        spaceBetween: 12,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
        },
        // loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    }
  },
  mounted() {
    this.handleInit()
  },
  methods: {
    async handleInit() {
      try {
        const res = await this.$api.getDetail({
          id: this.$route.query.id
        })
        console.log(res.gameUrl.split(';'));
        const len = res.gameUrl.split(';').length
        if (len >= 5) {
          this.width = 688
        } else {
          this.width = 128 * len + (len - 1) * 12
        }
        this.detail = res
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  width: 1136px;
  .banner {
    padding: 20px;
    width: 1136px;
    height: 516px;
    background: #212330;
    border-radius: 8px;
    box-sizing: border-box;
    position: relative;
    video {
      width: 100%;
      height: 100%;
    }
    .cover {
      width: 1096px;
      height: 476px;
      border-radius: 8px;
    }
    .des {
      width: 300px;
      height: 278px;
      background: #000000;
      border-radius: 8px;
      backdrop-filter: blur(5px);
      background: rgba(0, 0, 0, .5);
      position: absolute;
      top: 56px;
      right: 40px;
      padding: 27px 16px 0 16px;
      box-sizing: border-box;
      .title {
        font-size: 18px;
        font-weight: bold;
        color: #FFFFFF;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .tag {
        margin-top: 10px;
        display: flex;
        padding-bottom: 16px;
        span {
          padding: 0 5px;
          height: 18px;
          background: rgba(255,255,255,0.2);
          border-radius: 2px;
          font-size: 12px;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, .8);
          margin-right: 14px;
        }
      }
      .col {
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(216, 216, 216, .4);
        span {
          font-size: 16px;
          color: rgba(255, 255, 255, .8);
        }
      }
      .price {
        margin-top: 20px;
        span {
          font-size: 16px;
          color: #FFFFFF;
          font-family: MyBebas;
        }
      }
      .btn {
        width: 268px;
        height: 44px;
        background: #F7BC29;
        border-radius: 8px;
        text-align: center;
        line-height: 44px;
        font-size: 18px;
        font-weight: bold;
        color: #000000;
        letter-spacing: 1px;
        cursor: pointer;
        margin-top: 20px;
      }
    }
    .detail-slide {
      width: 1096px;
      height: 100px;
      background: rgba(0, 0, 0, .3);
      border-radius: 0px 0px 8px 8px;
      box-sizing: border-box;
      position: absolute;
      bottom: 20px;
      left: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;

      /deep/.swiper-container {
        height: 76px;
        width: 100%;
        position: relative;
        .swiper-slide {
          height: 76px;
          width: 128px!important;
          video, img {
            min-width: 128px;
            width: 128px;
            height: 76px;
            border-radius: 8px;
          }
        }
      }
      > div {
        position: relative;
        .swiper-button-next, .swiper-button-prev {
          position: absolute;
        }
        .swiper-button-next {
          right: -35px;
        }
        .swiper-button-prev {
          left: -35px;
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 22px;
        }
      }
    }
  }
  .intro {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    .intr-title {
      font-size: 16px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #F7BC29;
      padding-bottom: 12px;
    }
    .l,.t,.b {
      background: #212330;
      border-radius: 8px;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
    }
    .r {
      width: 450px;
      display: flex;
      flex-direction: column;
    }
    .t {
      margin-bottom: 12px;
    }
    .l {
      width: 674px;
      align-self: baseline;
    }
  }
}
</style>