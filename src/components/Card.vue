<template>
  <div>
    <zi-card class="card" hoverable>{{text}}</zi-card>
  </div>
</template>

<script>
export default {
  name: 'ex-card-hoverable',
  props: ['text']
}
</script>
<style>
.card{
  height: 200px;
}
</style>
