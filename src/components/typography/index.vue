<style lang='less' scoped>
.typography(@size) {
  img {
    width: calc(@size * 64 / 12);
  }
  h1 {
    font-size: @size;
    -webkit-text-stroke-width: calc(@size * 64 / 1000);
  }
  h2 {
    font-size: calc(@size * 64 / 100);
  }
}

// < 576
@media (min-width: @screen-xs) and (max-width: @screen-sm) {
  .typography(4rem);
}

// > 576 and < 768
@media (min-width: @screen-sm) and (max-width: @screen-md) {
  .typography(5rem);
}

// > 768 and < 992
@media (min-width: @screen-md) and (max-width: @screen-lg) {
  .typography(6rem);
}

// > 992 and < 1200
@media (min-width: @screen-lg) and (max-width: @screen-xl) {
  .typography(8rem);
}

// > 1200 and < 1400
@media (min-width: @screen-xl) and (max-width: @screen-gt) {
  .typography(9rem);
}

// > 1400
@media (min-width: @screen-gt) {
  .typography(10rem);
}
</style>

<template>
  <main class="typography">
    <img :src="src" />
    <h1>
      <beta>{{ title }}</beta>
    </h1>
    <h2>{{ sub }}</h2>
  </main>
</template>

<script>
export default {
  props: {
    logo: {
      type: [String],
      default: '',
    },

    title: {
      type: [String],
      default: '',
    },

    sub: {
      type: [String],
      default: '',
    },
  },

  computed: {
    src() {
      return navigator.onLine ? `${this.state.oss}/${this.logo}` : this.$util.uri(this.logo);
    },
  },
};
</script>
