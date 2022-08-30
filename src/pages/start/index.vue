<style lang="less" scoped>
.welcome {
  margin: 0 auto;
}
</style>

<template>
  <!-- Corner of Git -->
  <git :url="start.git" />

  <!-- Sholder -->
  <shold :author="author" :cash="cash" />

  <!-- Screen Welcome -->
  <screen class="welcome">
    <typography :logo="start.logo" :title="start.title" :sub="start.sub" />
  </screen>
</template>

<script>
export default {
  data() {
    return {
      author: '',
      cash: 0,
    };
  },

  async mounted() {
    const { author, cash } = await this.$store.dispatch('start/GET_MOCK');

    this.author = author;
    this.cash = cash;
  },
};
</script>
