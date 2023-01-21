<template>
  <div class="body2"  v-show="$route.meta.showFooter">

    <p>
      欢迎登录本系统!
    </p>
    <RouterLink to="/news" class="zxc">————————    点 击 进 入    ————————</RouterLink>
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
<style lang="scss" scoped>
.body2 {
  width: 100%;
  position: fixed;
  font-family: 'Poppins', sans-serif;
  line-height: 1.7;
  color: #c4c3ca;
  overflow-x: hidden;
}
.body2 p{
  font-size: 50px;
  font-weight: 700;
  color: white;
  padding: 30px;
}
.zxc{
  color: white;
  position: fixed;
  bottom: 100px;
  width: 100%;
  text-align: center;
}
</style>
