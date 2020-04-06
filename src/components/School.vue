<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Service</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Team</a>
      </li>
    </ul>
    <el-row type="flex" justify="space-around">
        <el-col :span="4"><mcard text="Room1"></mcard></el-col>
        <el-col :span="4"><mcard text="Room2"></mcard></el-col>
        <el-col :span="4"><mcard text="Room3"></mcard></el-col>
        <el-col :span="4"><mcard text="Room4"></mcard></el-col>
        <el-col :span="4"><mcard text="Room5"></mcard></el-col>
    </el-row>
    <div></div>
    <el-row type="flex" justify="space-around">
        <el-col :span="4"><mcard text="Room6"></mcard></el-col>
        <el-col :span="4"><mcard text="Room7"></mcard></el-col>
        <el-col :span="4"><mcard text="Room8"></mcard></el-col>
        <el-col :span="4"><mcard text="Room9"></mcard></el-col>
        <el-col :span="4"><mcard text="Room10"></mcard></el-col>
    </el-row>
  </div>
</template>

<script>
import mcard from './Card'
export default {
  name: 'School',
  data () {
    return {
      msg: '选择一个纸条Room'
    }
  },
  components: {
    mcard
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
.el-row{
    margin-top: 20px;
}
</style>
