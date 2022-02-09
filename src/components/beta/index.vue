<style lang="less" scoped>
span {
  position: relative;
}

sup {
  top: 0;
  left: 100%;
  position: absolute;

  -webkit-text-stroke-color: transparent;

  font-family: fantasy;
}
</style>

<template>
  <span>
    <slot />
    <sup>BETA</sup>
  </span>
</template>
