<template>
  <div class="wrapper">
    <div class="logo"><img src="@/assets/logo.png" alt=""></div>
    <div class="right">
      <img class="back" src="@/assets/back.png" alt="" @click="$router.back()"/>
      <img class="refresh" src="@/assets/refresh.png" alt="" @click="handleRefresh"/>
      <div class="search">
        <input type="text" placeholder="Search">
        <div class="sbtn">
          <img src="@/assets/search.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleRefresh() {
      this.$emit('refresh')
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  height: 74px;
  display: flex;
  align-items: center;
  background: #131521;
  .logo {
    align-items: center;
    width: 260px;
    img {
      width: 95px;
      height: 49px;
      margin-left: 60px;
    }
  }
  .right {
    display: flex;
    flex: 1;
    align-items: center;
    .back, .refresh {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
    .back {
      margin-left: 11px;
    }
    .refresh {
      margin-left: 24px;
    }
    .search {
      margin-left: 118px;
      width: 339px;
      height: 36px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      background: #212330;
      padding-left: 12px;
      border-radius: 4px;
      input {
        height: 36px;
        width: 297px;
        outline: none;
        border: none;
        background: transparent;
        color: #FFF;
      }
      input::-webkit-input-placeholder {
        font-size: 16px;
        color: #777980;
      }
      input:-moz-placeholder {
        font-size: 16px;
        color: #777980;
      }
      input::-moz-placeholder {
        font-size: 16px;
        color: #777980;
      }
      input:-ms-input-placeholder {
        font-size: 16px;
        color: #777980;
      }
      .sbtn {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          width: 18px;
          height: 18px;
        }
      }
    }
  }
}
</style>