<template lang="html">
  <div class="with-router">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>多页面之Buy Page的WithRouter Page</span>
      </div>
      <el-row>
        <el-button type="success" @click="jump">通过路由跳转到首页--Buy Page</el-button>
      </el-row>
      <el-row>
        <el-button type="primary">
          <a href="index.html">跳转到多页面--Index Page</a>
        </el-button>
      </el-row>
      <el-row>
        <el-button type="primary">
          <a href="rent.html">跳转到多页面--Rent Page</a>
        </el-button>
      </el-row>
  </el-card>
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

<style lang="scss" scoped>
.with-router {
  a {
    color: #fff;
  }
  .box-card {
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
