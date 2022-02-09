<style lang="less" scoped>
.welcome {
  margin: 0 auto;
}
</style>

<template>
  <!-- Corner of Git -->
  <git :url="start.git" />

  <!-- Sholder -->
  <shold />

  <!-- Screen Welcome -->
  <screen class="welcome">
    <typography :logo="start.logo" :title="start.title" :sub="start.sub" />
  </screen>
</template>

<script>
export default {};
</script>
