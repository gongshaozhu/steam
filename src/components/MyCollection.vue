<template>
  <div class="wrapper">
    <div class="head">
      <img src="@/assets/collection.png" alt="">
      <span>Collection</span>
    </div>
    <div class="item">
      <img src="@/assets/collection.png" alt="">
      <span>Portia my time</span>
    </div><div class="item">
    <img src="@/assets/collection.png" alt="">
    <span>Portia my time</span>
  </div><div class="item">
    <img src="@/assets/collection.png" alt="">
    <span>Portia my time</span>
  </div><div class="item">
    <img src="@/assets/collection.png" alt="">
    <span>Portia my time</span>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.wrapper {
  width: 234px;
  height: 686px;
  box-sizing: border-box;
  background: #212330;
  border-radius: 8px;
  padding: 18px 12px;
  .head {
    align-items: center;
    display: flex;
    margin-bottom: 24px;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      font-size: 18px;
      font-weight: bold;
      color: #FFF;
      opacity: .7;
    }
  }
  .item {
    align-items: center;
    display: flex;
    margin-bottom: 12px;
    padding-left: 4px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 6px;
    }
    span {
      font-size: 14px;
      color: #FFF;
      opacity: 0.6;
    }
  }
}
</style>