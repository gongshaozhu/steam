<template>
  <div class="wrapper" @click="handleDetail">
    <img class="cover" :src="item.coverUrl" alt="">
    <p class="des">{{item.name}}</p>
    <div class="tag">
      <span v-for="(v, i) in item.categoryList" :key="i">{{ v }}</span>
    </div>
    <div class="bottom">
      <div class="l">
        <span class="price">${{item.pointHour}}</span>
        <span class="unit">/hour</span>
      </div>
      <div class="r">
        <span class="steam">Steam Price&nbsp;</span>
        <span class="price">${{item.origPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'item'
  ],
  methods:{
    handleDetail() {
      this.$router.push({
        path: '/detail',
        query: {
          id: this.item.id
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  cursor: pointer;
  width: 265px;
  margin-right: 12px;
  &:nth-child(4n) {
    margin-right: 0;
  }
  .cover {
    width: 265px;
    height: 120px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
    border-radius: 8px;
  }
  .des {
    font-size: 18px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 18px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 10px;
    margin-bottom: 7px;
    opacity: 0.89;
  }
  .tag {
    display: flex;
    margin-bottom: 14px;
    opacity: .8;
    span {
      width: 38px;
      height: 18px;
      margin-right: 8px;
      background: rgba(255,255,255,0.3);
      border-radius: 2px;
      font-size: 12px;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .bottom {
    display: flex;
    .l {
      width: 107px;
      height: 30px;
      background: rgba(247, 188, 41, .8);
      border-radius: 4px 0 0 4px;
      justify-content: center;
      display: flex;
      align-items: baseline;
      .price {
        height: 30px;
        font-size: 20px;
        color: #000000;
        display: flex;
        font-weight: bold;
        align-items: center;
        font-family: Bebas;
      }
      .unit {
        font-size: 12px;
        font-weight: 400;
        color: #000000;
      }
    }
    .r {
      box-sizing: border-box;
      height: 30px;
      border-radius: 0 4px 4px 0;
      border: 1px solid rgba(247, 188, 41, .8);
      padding: 0 8px;
      display: flex;
      align-items: center;
      .steam, .price {
        font-size: 12px;
        color: #FFFFFF;
        opacity: .8;
      }
      .price {
        text-decoration: line-through;
      }
    }
  }
}
</style>