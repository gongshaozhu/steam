<template>
  <div
    class="wrapper custom-scroll"
    v-infinite-scroll="handleLoad"
    infinite-scroll-disabled="disabled"
    infinite-scroll-immediate="false"
  >
    <div class="head">
      <div>
        <span
          class="tag"
          :class="[v === category ? 'active' : '']"
          v-for="(v, i) in categoryList"
          :key="i"
          @click="handleTab(v)"
        >{{v}}</span>
      </div>
      <div class="right">
        <div class="price-slide" v-if="maxPrice">
          <vue-slider
            v-model="priceRange"
            :tooltip="'always'"
            :tooltip-placement="['bottom', 'bottom']"
            :min="minPrice"
            :max="maxPrice"
            :tooltip-formatter="formatter"
            @change="handleChangePrice"
          >
          </vue-slider>
        </div>
        <div>
          <span>Classificar por preço</span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="content">
      <transition-group name="list" tag="div">
        <HomeItem1
          v-for="(item, i) in gameList"
          :key="i"
          :item="item"
        />
      </transition-group>

<!--      <p class="btm" v-if="loading">loading...</p>
      <p class="btm" v-if="noMore">no more</p>-->
    </div>
  </div>
</template>

<script>
import HomeItem1 from '@/views/home/HomeItem1'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'


export default {
  name: 'AllGame',
  data() {
    return {
      categoryList: [],
      gameList: [],
      loading: false,
      noMore: false,
      //---------//
      maxPrice: null,
      minPrice: null,
      pageNum: 1,
      pageSize: 28,
      category: '',
      packageId: null,
      searchWord: null,
      sortType: 1,
      priceRange: [null, null],
      formatter: v => `$${v}`,
    }
  },
  computed: {
    disabled () {
      return this.loading || this.noMore
    }
  },
  components: {
    HomeItem1,
    VueSlider,
  },
  mounted() {
    this.$bus.$on(this.$busActions.REFRESH_ALL_GAME, this.handleInit)
    this.handleCategory()
  },
  methods: {
    async handleCategory() {
      try {
        const res = await this.$api.filterItem()
        this.categoryList = res.categoryList
        this.priceRange = [res.minPrice, res.maxPrice]
        this.maxPrice = res.maxPrice
        this.minPrice = res.minPrice
        this.category = this.categoryList[0]
        await this.handleList()
      } catch (e) {
        console.log(e)
      }
    },
    async handleList() {
      try {
        if (this.loading) return
        this.loading = true
        const data = {
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          category: this.category,
          // packageId: this.packageId,
          // searchWord: this.searchWord,
          minPrice: this.priceRange[0],
          maxPrice: this.priceRange[1],
          // sortType: this.sortType,
        }
        for(let i in data) {
          if (data[i] == null || (typeof data[i] === 'string' && data[i].trim() === '')) {
            delete data[i]
          }
        }
        const res = await this.$api.filterList(data)
        if (this.pageNum === 1) {
          this.gameList = []
        }
        this.gameList = [...this.gameList, ...res.records]
        if (res.records.length < this.pageSize) {
          this.noMore = true
        } else {
          this.pageNum++
        }
        this.loading = false
      } catch (e) {
        this.loading = false
        console.log(e)
      }
    },
    async handleTab(v) {
      this.category = v || this.category
      await this.handleInit()
    },
    async handleInit() {
      this.pageNum = 1
      await this.handleList()
    },
    handleChangePrice() {
      clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        await this.handleInit()
        clearTimeout(this.timer)
      }, 300)
    },
    handleLoad() {
      this.handleList()
    }
  }
}
</script>

<style scoped lang="less">
.wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .head {
    width: 1136px;
    height: 48px;
    box-sizing: border-box;
    background: #212330;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    position: sticky;
    top: 0;
    z-index: 10;
    justify-content: space-between;
    .tag {
      font-size: 16px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: rgba(255, 255, 255, .5);
      margin-right: 36px;
      cursor: pointer;
    }
    .active {
      color: #F7BC29;
    }
    .price-slide {
      margin-left: 2px;
      width: 180px;
      height: 48px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-right: 30px;
      .price {
        font-size: 14px;
        font-weight: bold;
        color: #C9C9C9;
        margin-top: 8px;
      }
      /deep/.vue-slider {
        margin-top: -17px;
        height: 6px!important;
        .vue-slider-rail {
          background: rgba(144, 145, 151, .4);
        }
        .vue-slider-process {
          background: rgba(247, 188, 41, 0.6);
        }
        .vue-slider-dot {
          height: 10px!important;
          &:hover {
            cursor: grab;
          }
        }
        .vue-slider-dot-handle {
          width: 14px;
          height: 10px;
          border-radius: 0;
          border: none;
          box-shadow: none;
          &:hover {
            cursor: grab;
          }
        }
        .vue-slider-dot-tooltip-inner {
          background: transparent;
          padding: 0;
          font-size: 14px;
          font-family: Helvetica-Bold, Helvetica;
          font-weight: bold;
          color: #C9C9C9;
        }
        .vue-slider-dot-tooltip-bottom {
          transform: translate(-50%,66%);
        }
        .vue-slider-dot-tooltip-inner-bottom::after {
          bottom: 100%;
          left: 50%;
          transform: translate(-50%, 0);
          height: 0;
          width: 0;
          border-color: transparent;
          border-style: solid;
          border-width: 0;
          border-bottom-color: inherit;
        }
      }
      /deep/.el-slider__runway {
        width: 160px;
        height: 6px;
        background: rgba(144, 145, 151, .4);
        border-radius: 3px;
        margin: 0;
        margin-top: 5px;
        margin-left: 5px;
        .el-slider__button {
          border: none;
          border-radius: 0;
          width: 14px;
          height: 10px;
        }
        .el-slider__button.dragging, .el-slider__button.hover, .el-slider__button:hover {
          transform: scale(1);
        }
        .el-slider__button-wrapper {
          width: 14px;
          height: 10px;
          top: -2px;
        }
        .el-slider__button-wrapper .el-tooltip, .el-slider__button-wrapper::after {
          display: block;
        }
      }
      /deep/.el-slider__bar {
        background: rgba(247, 188, 41, .6);
        border-radius: 3px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      padding-right: 30px;
      span {
        font-size: 16px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #909197;
      }
    }
  }
  .content {
    margin-top: 12px;
    width: 1136px;
    background: #212330;
    border-radius: 8px;
    box-sizing: border-box;
    padding: 12px 20px 0;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    align-content: flex-start;
    >div {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
    }
    .btm {
      margin-bottom: 20px;
      width: 100%;
      text-align: center;
      color: rgba(255, 255, 255, .5);
      font-size: 15px;
    }
  }
}
</style>