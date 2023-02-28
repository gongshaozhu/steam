<template>
  <div class="login-wrapper">
    <div id="html_element"></div>
    <div @click="handleClose">关闭</div>
  </div>
</template>

<script>
export default {
  name: 'my-login',
  mounted() {
    window.reCAPTCHACallback = function() {
      // eslint-disable-next-line no-undef
      grecaptcha.render('html_element', {
        sitekey : '6LcisZgkAAAAAF672HtUWKcJpDVwb-WZZOWXwjEf',
        callback : function(response) {
          console.log(response)
        },
      });
    };
    const obj = document.createElement('script')
    obj.id='reCAPTCHACallback'
    obj.src='https://www.recaptcha.net/recaptcha/api.js?onload=reCAPTCHACallback&render=explicit'
    // obj.src='https://www.google.com/recaptcha/api.js?onload=reCAPTCHACallback&render=explicit'
    document.body.appendChild(obj)
  },
  methods: {
    handleClose() {
      this.$emit('close')
    }
  },
  beforeDestroy() {
    document.getElementById('reCAPTCHACallback').remove()
  }
}
</script>

<style scoped lang="less">
.login-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 300;
}
</style>
