<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <router-link class="nav-link" to="/signup">注册</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">登录</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">账户</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">教程</a>
      </li>
    </ul>
    <zi-button v-on:click="logout">退出登录</zi-button>
  </div>
</template>

<script>
import {delCookie} from '../assets/cookie.js'
export default {
  name: 'User',
  data () {
    return {
      msg: '你好'
    }
  },
  methods: {
    logout () {
      delCookie('username')
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
</style>
