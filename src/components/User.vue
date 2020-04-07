<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link class="nav-link" to="/school">回到Room</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">登录</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/user">账户</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/help">教程</router-link>
      </li>
    </ul>
    <zi-button v-on:click="logout">退出登录</zi-button>
  </div>
</template>

<script>
import {getCookie, delCookie} from '../assets/cookie.js'
export default {
  name: 'User',
  data () {
    return {
      msg: '你好'
    }
  },
  mounted () {
  /* 页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录 */
    if (!getCookie('username')) {
      this.$message({
        message: '您未登录，请注册或登录',
        type: 'warning',
        duration: 3000
      })
      setTimeout(function () {
        this.$router.push('/login')
      }.bind(this), 3000)
    }
  },
  methods: {
    logout () {
      delCookie('username')
      this.$message({
        message: '您已退出登录',
        type: 'success'
      })
      setTimeout(function () {
        this.$router.push('/login')
      }.bind(this), 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/aqua.min.css";
@import "../assets/aqua.css";
.hello{
    user-select: none;
}
h1 {
  font-weight: 300;
  text-align: initial;
  position: absolute;
  top: 30px;
  left: 50px;
  z-index: 99;
}
.nav{
    width: 100%;
    --underline-color: #cdcdcd;
    --active-link-color: #000;
}
button{
    outline: none;
}
</style>
