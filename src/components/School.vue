<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="nav">
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
  </div>
</template>

<script>
export default {
  name: 'School',
  data () {
    return {
      msg: '选择一个纸条Room'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: 300;
  text-align: initial;
}
</style>
