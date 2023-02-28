<template>
  <div id="app">
    <HomeTop/>
<!--    <video
      id="my-video"
      class="video-js"
      controls
      preload="auto"
      width="640"
      height="264"
      poster="MY_VIDEO_POSTER.jpg"
      data-setup="{}"
    >
      &lt;!&ndash;<source src="./assets/mov_bbb.mp4" type="video/mp4"/>&ndash;&gt;
      <source src="https://cdn.akamai.steamstatic.com/steam/apps/256915486/movie480_vp9.webm?t=1668017731" type="video/webm" />
    </video>-->
    <div class="app-content">
      <div class="collection">
        <MyCollection/>
      </div>
      <div class="right-con custom-scroll">
<!--        <h1 style="height: 5000px;color: #FFFFFF">ff</h1>-->

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
  overflow-x: hidden;
  .app-content {
    //flex: 1;
    height: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 12px;
    padding-top: 10px;
    padding-bottom: 13px;
    background: #171926;
    overflow: hidden;
    .collection {
      padding-right: 16px;
    }
    .right-con {
      display: flex;
      flex: 1;
      overflow: auto;
      outline: none;
    }
  }
}
</style>
