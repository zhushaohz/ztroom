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
        <router-link class="nav-link" to="/user">账户</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/help">教程</router-link>
      </li>
    </ul>
    <div class="biao">
        <form>
            <label class="zlabel">用户名</label>
            <zi-input v-model="name" clearable size="big" class="zinput"></zi-input>
            <label class="zlabel">邮箱</label>
            <zi-input v-model="email" clearable size="big" class="zinput"></zi-input>
            <label class="zlabel">密码</label>
            <zi-input _type="password" v-model="pass" clearable size="big" class="zinput"></zi-input>
            <label class="zlabel">性别</label>
            <zi-select class="zinput" v-model="value">
                <zi-option label="男" value="1"></zi-option>
                <zi-option label="女" value="0"></zi-option>
                <zi-option label="保密" value="2"></zi-option>
            </zi-select>
            <zi-button v-on:click="register">注册</zi-button>
        </form>
    </div>
  </div>
</template>

<script>
import {getCookie} from '../assets/cookie.js'
export default {
  name: 'School',
  data () {
    return {
      msg: '纸条Room 注册',
      name: '',
      email: '',
      pass: '',
      value: ''
    }
  },
  mounted () {
  /* 页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录 */
    if (getCookie('username')) {
      this.$message({
        message: '您已登录',
        type: 'success'
      })
      setTimeout(function () {
        this.$router.push('/school')
      }.bind(this), 1000)
    }
  },
  methods: {
    register () {
      if (this.name === '' || this.pass === '') {
        // alert('请输入用户名或密码')
        this.$alert('请输入用户名或密码', '纸条Room', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
      } else if (this.email === '') {
        // alert('请输入邮箱')
        this.$alert('请输入邮箱', '纸条Room', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
      } else if (this.value === '') {
        // alert('请输入性别')
        this.$alert('请输入性别', '纸条Room', {
          confirmButtonText: '确定',
          callback: action => {
          }
        })
      } else {
        let data = 'name=' + this.name + '&email=' + this.email + '&pass=' + this.pass + '&gender=' + this.value
        console.log(data)
        this.$axios.post('/api/signup/vuesignup.php', data).then((res) => {
          console.log(res)
          if (res.data === '注册成功') {
            this.$message({
              message: '注册成功',
              type: 'success'
            })
            setTimeout(function () {
              this.$router.push('/login')
            }.bind(this), 1000)
          } else {
            this.$message.error('注册失败，请稍后再试！')
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/aqua.min.css";
@import "../assets/aqua.css";
.hello {
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
.nav {
  width: 100%;
  --underline-color: #cdcdcd;
  --active-link-color: #000;
}
.biao{
    width: 40%;
    border: 0px solid #000;
    margin: auto;
    margin-top: 20px;
}
.zlabel{
    width: 20%;
    text-align: right;
}
.zinput{
    margin: 10px;
    width: 70%;
}
button{
    width: 70%;
    margin-left: 20%;
    margin-top: 20px;
    outline: none;
}
</style>
