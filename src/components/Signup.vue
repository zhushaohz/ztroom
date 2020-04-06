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
  methods: {
    register () {
      if (this.name === '' || this.pass === '') {
        alert('请输入用户名或密码')
      } else if (this.email === '') {
        alert('请输入邮箱')
      } else if (this.value === '') {
        alert('请输入性别')
      } else {
        let data = {'name': this.name, 'email': this.email, 'pass': this.pass, 'gender': this.value}
        console.log(data)
        this.$http.post('http://localhost:8080/signup/vuesignup.php', data).then((res) => {
          console.log(res)
        })
      }
      console.log('submit!')
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
