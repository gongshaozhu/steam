<template>
  <div class="wrapper">
    <div class="logo"><img src="@/assets/logo.png" alt=""></div>
    <div class="right">
      <img class="back" src="@/assets/back.png" alt="" @click="$router.back()"/>
      <img class="refresh" src="@/assets/refresh.png" alt="" @click="handleRefresh"/>
      <div class="search"  ref="search-result">
        <input
          type="text"
          v-model="value"
          placeholder="Search"
          @keydown.enter="handleRefresh"
          @focus="handleFocus"
        >
        <div class="sbtn" @click="handleRefresh">
          <img src="@/assets/search.png" alt="">
        </div>
        <div
          class="search-result custom-scroll"
          v-show="show && result && result.length > 0"
        >
          <div v-for="(v, i) in result" :key="i"><img :src="v.coverUrl" alt=""></div>
        </div>
      </div>
      <div @click="handleLogin">登录</div>
    </div>
    <Login v-if="showLogin" @close="showLogin=false"/>
  </div>
</template>

<script>
import Login from './Login'
export default {
  data() {
    return {
      value: '',
      result: [],
      show: true,
      showLogin: false,
    }
  },
  components: {
    Login,
  },
  watch: {
    value(newV) {
      this.$store.commit('changeSearchValue', newV)
      if (this.$route.name === 'home') {
        this.handleSearch()
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleContails)
  },
  methods: {
    handleLogin() {
      this.showLogin = true
    },
    handleFocus() {
      console.log(33)
    },
    handleContails(e) {
      if (this.$refs['search-result'] && !this.$refs['search-result'].contains(e.target)) {
        this.show = false
      } else {
        this.show = true
      }
    },
    handleRefresh () {
      if (this.$route.name === 'all-game') {
        this.$bus.$emit(this.$busActions.REFRESH_ALL_GAME)
      } else {
        this.value.trim() !== '' && this.$router.push({
          name: 'all-game'
        })
      }
    },
    async handleSearch() {
      clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        const res = await this.$api.searchList({
          word: this.value
        })
        this.result = res
        clearTimeout(this.timer)
      }, 50)
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
      position: relative;
      .search-result {
        position: absolute;
        top: 36px;
        left: 0;
        max-height: 300px;
        width: 500px;
        overflow-y: auto;
        z-index: 91;
        background: #212330;
        img {
          width: 50px;
          height: 50px;
        }
      }
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
