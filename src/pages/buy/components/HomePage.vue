<template>
  <div class="home-page">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>
          多页面之默认页面Buy Page
          <a
            href="https://github.com/BiYuqi/vue-multiple-pages"
            target="_blank"
            class="author">@author</a>
        </span>
      </div>
      <el-row>
        <el-button type="success" @click="jump">通过路由跳转到其他组件</el-button>
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
  name: 'HomePage',
  methods: {
    jump () {
      this.$router.push({
        name: 'with-router'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home-page {
  a {
    color: #fff;
    &.author {
      color: #666;
    }
  }
  .box-card {
    width: 80%;
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
