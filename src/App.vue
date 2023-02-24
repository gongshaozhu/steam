<template>
  <div id="app">
    <HomeTop/>
    <div class="app-content">
      <div class="collection">
        <MyCollection/>
      </div>
      <div class="right-con custom-scroll">
        <router-view ref="view"/>
      </div>
    </div>
  </div>
</template>
<script>
import HomeTop from '@/components/HomeTop.vue'
import MyCollection from '@/components/MyCollection.vue'

export default {
  components: {
    HomeTop,
    MyCollection,
  },
  methods: {
    handleRefresh() {
      console.log(this.$refs.view);
    }
  }
}
</script>
<style scoped lang="less">
#app {
  width: 1440px;
  height: 100%;
  display: flex;
  flex-direction: column;
  user-select: none;
  .app-content {
    flex: 1;
    display: flex;
    flex-direction: row;
    padding-left: 12px;
    padding-top: 10px;
    padding-bottom: 13px;
    background: #171926;
    overflow: auto;
    .collection {
      padding-right: 16px;
    }
    .right-con {
      display: flex;
      flex: 1;
      overflow: auto;
    }
  }
}
</style>
