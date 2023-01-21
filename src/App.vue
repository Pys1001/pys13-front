<template>
  <div class="body2">
    <p>
      Welcome to pysthirteen!
    </p>
    <RouterLink to="/home">————————点 击 进 入————————</RouterLink>
  </div>
  <RouterView/>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      loginBg: 'url(' + require('./assets/layout.png') + ')'
    }
  },
  // 进入VUE时首先调用的钩子函数
  mounted () {
    // 添加背景图片
    document.body.style.backgroundSize = '100%'
    document.body.style.backgroundImage = this.loginBg
  },
  // 离开VUE时调用的钩子函数
  beforeUnmount () {
    // 清除背景图片
    document.body.style.backgroundImage = ''
  }
}
</script>
<style scoped>
.body2 {

  position: fixed;
  font-family: 'Poppins', sans-serif;
  line-height: 1.7;
  color: #c4c3ca;
  overflow-x: hidden;
}

</style>
