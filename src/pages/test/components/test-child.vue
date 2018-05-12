<template lang="html">
  <div class="test-child">
    Test的路由页面
    <button type="button" name="button" @click="jump">
      返回
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    jump () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="css">
.test-child{
  text-align: center;
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
