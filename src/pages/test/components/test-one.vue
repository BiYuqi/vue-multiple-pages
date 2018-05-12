<template lang="html">
  <div class="home">
    <h2>多页面之默认页面test.html</h2>
    <button type="button" name="button" @click="jump">通过路由跳转到test的test页面</button><br/>
    <a href="index.html">多页面之测试页面index.html</a>
  </div>
</template>

<script>
export default {
  methods: {
    jump () {
      this.$router.push({
        name: 'test_child'
      })
    }
  }
}
</script>

<style lang="css">
.home{
  text-align: center;
}
a {
  color: #42b983;
  font-size: 16px;
  display: inline-block;
  padding: 7px;
  background-color: rgb(103, 176, 217);
  color: #fff;
}
button{
  outline: none;
  border: none;
  background-color: rgb(52, 197, 204);
  color: #fff;
  padding: 10px;
  margin-bottom: 30px;
}
</style>
