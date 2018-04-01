<template lang="html">
  <div class="home">Home</div>
</template>

<script>
export default {
  methods: {
    jump () {
      this.$router.push({
        name: 'HelloWorld'
      })
    }
  }
}
</script>

<style lang="css">
</style>
