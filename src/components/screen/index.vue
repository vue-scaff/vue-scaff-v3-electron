<style lang="less" scoped>
.screen {
  // Preset Variables
  @space: 100;

  // Resize of Ratio
  width: @space * @screen-ratio * 1vh;
  height: ~'@{space}vh';
  padding-top: ~'@{screen-ratio}%';

  // Relative as Screen
  position: relative;
}

.stage {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.text {
  h1,
  h2 {
    white-space: nowrap;
    word-break: normal;
  }
}

.sheet {
  h1,
  h2 {
    font-family: 'heaver';
    display: contents;
    white-space: nowrap;
    word-wrap: normal;
    font-weight: lighter;
    margin: 0 auto;
    line-height: 1.24;
  }

  h1 {
    color: #e23;
    letter-spacing: -3px;
    -webkit-text-stroke-color: #100;
  }

  h2 {
    color: #000;
    letter-spacing: -2px;
  }
}

:deep(main) {
  .stage;
  .flex;
  .text;
  .sheet;
}
</style>

<template>
  <div class="screen">
    <slot />
  </div>
</template>