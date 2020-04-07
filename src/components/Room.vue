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
    <div class="room">
    <el-row type="flex" justify="space-around">
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
    </el-row>
    <el-row type="flex" justify="space-around">
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
        <el-col :span="2"><div class="seat">1</div></el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Room',
  data () {
    return {
      msg: 'Room1'
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
.room{
    width: 70%;
    margin: auto;
}
.el-row{
    margin-top: 20px;
}
.seat{
    border: 1px solid #000;
    width: 100%;
    height: 70px;
    border-radius: 4px;
}
</style>
