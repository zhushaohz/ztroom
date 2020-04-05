<template>
  <div class="bd">
    <div class="logo">
      <img src="../assets/zt.png">
    </div>
    <div class="hello">
      {{hello}}
    </div>
    <div class="msg">
      {{msg}}
    </div>
    <div class="go">
      <router-link to="/school">Go !</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      hello: 'Welcome To 纸条Room ！',
      msg: '纸条Room的创意来自上学的时候教室里传纸条，这是一个你曾经经历过的事情，但是是你从未有过的全新社交体验！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bd{
    user-select: none;
}
img{
  height: 100px;
}
a:link{
  text-decoration: none;
}
a {
  color: #000;
}
.hello{
  margin-top: 10px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 200;
  font-size: 60px;
}
.msg{
  margin-top: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
}
.go{
  margin: auto;
  margin-top: 60px;
  width: 300px;
  padding: 10px;
  border: 1px solid #000;
  color: #000;
  border-radius: 10px;
  font-size: 30px;
}
.go:hover{
  background-color: #000;
}
.go:hover a{
  color: #fff;
}
</style>
