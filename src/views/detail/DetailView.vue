<template>
  <div class="wrapper">
    <template v-if="detail">
      <div class="banner">
        <img class="cover" :src="detail.coverUrl" alt="">
        <div class="des">
          <div class="title">{{detail.name}}</div>
          <div class="tag">
            <span v-for="(v, i) in detail.categoryList" :key="i">{{v}}</span>
          </div>
          <div class="col"><span>Original Price</span></div>
          <div class="price"><span>Original Price</span><span>$ 45</span></div>
          <div class="price"><span>Original Price</span><span>$ 45</span></div>
          <div class="btn">PLAY NOW</div>
        </div>
      </div>
      <div class="intro">
        <div class="l">Este é um jogo de festa multijogador baseado em física. Escolha seu personagem animal favorito, desafie outros jogadores com seus amigos ou comece um duelo feroz! Você não se sente animado quando vê os animais fofos?Este é um jogo de festa multijogador baseado em física. Escolha seu personagem animal favorito, desafie outros jogadores com seus amigos ou comece um duelo feroz! Você não se sente animado quando vê os animais fofos?</div>
        <div class="r">
          <div>Este é um jogo de festa multijogador baseado em física. Escolha seu personagem animal favorito, desafie outros jogadores com seus amigos ou comece um duelo feroz! Você não se sente animado quando vê os animais fofos?Este é um jogo de festa multijogador baseado em física. Escolha seu personagem animal favorito, desafie outros jogadores com seus amigos ou comece um duelo feroz! Você não se sente animado quando vê os animais fofos?</div>
          <div></div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: null
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
        this.detail = res
        console.log(res);
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
      }
      .tag {
        margin-top: 10px;
        display: flex;
        padding-bottom: 16px;

        span {
          width: 38px;
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
  }
  .intro {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    .l,.r {
      background: #212330;
      border-radius: 8px;
      padding: 20px;
      box-sizing: border-box;

    }
    .r {
      width: 450px;
    }
    .l {
      width: 674px;
    }
  }
}
</style>