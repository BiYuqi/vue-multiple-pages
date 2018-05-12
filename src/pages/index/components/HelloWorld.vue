<template>
  <div class="hello">
    <h2>多页面之默认页面index.html
      <span style="color:#c33;font-size:12px">
        {{msg}}
      </span>
    </h2>
    <button type="button" name="button" @click="jump">通过路由跳转到index的home页面</button><br/>
    <a href="test.html">多页面之测试页面test.html</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '后续完善多页面细节'
    }
  },
  methods: {
    jump () {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
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
