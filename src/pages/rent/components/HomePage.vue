<template>
  <div class="home-page">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>多页面之默认页面Rent Page</span>
      </div>
      <el-row>
        <el-button type="success">该页面未配置路由</el-button>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home-page {
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
