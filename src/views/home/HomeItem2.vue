<template>
  <div class="wrapper">
    <div class="cover">
      <div
        class="item"
        v-for="(v, i) in item.gameList.slice(0, 5)"
        :style="{backgroundImage: `url('${v.coverUrl}')`}"
        :key="i"
      />
    </div>
    <div class="title">{{ item.name }}</div>
    <div class="tag">
      <span v-for="(v, i) in item.categoryList" :key="i">{{ v }}</span>
    </div>
    <div class="btn">To View</div>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped lang="less">
.wrapper {
  width: 520px;
  display: flex;
  flex-direction: column;
  .cover {
    width: 520px;
    height: 200px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    .item {
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      width: 100px;
      background-position: center;
      flex: 1;
      cursor: pointer;
    }
  }
  img {

  }
  .title {
    margin-top: 14px;
    font-size: 20px;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
    color: #FFFFFF;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .tag {
    span {
      font-size: 12px;
      font-family: Helvetica;
      color: rgba(255, 255, 255, .5);
      margin-right: 10px;
    }
    margin-bottom: 12px;
  }
  .btn {
    width: 100px;
    height: 36px;
    background: rgba(247, 188, 41, .8);
    border-radius: 4px;
    line-height: 36px;
    text-align: center;
    font-size: 20px;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
    color: #000000;
    cursor: pointer;
  }
}
</style>