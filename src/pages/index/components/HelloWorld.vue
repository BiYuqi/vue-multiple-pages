<template>
  <div class="hello">
    <h2>多页面之默认页面index<span style="color:#c33;font-size:12px">{{msg}}</span></h2>
    <a href="test.html">多页面之测试页面</a>
    <button type="button" name="button" @click="jump">跳转到index的home页面</button>
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
}
</style>
