<style lang="less" scoped>
.sholder {
  width: @space;
  height: @space;

  padding: 0;

  top: @unit;
  right: @unit;

  position: fixed;
}
</style>

<template>
  <a-button type="primary" danger class="sholder" @click="sholder">
    <build-outlined />
  </a-button>

  <a-drawer v-model:visible="visible" :title="title" placement="right">
    <a-form>
      <a-statistic-countdown :value="day1" @finish="countdown">
        <template #title>
          <span>Guess what will happen ?</span>
        </template>
      </a-statistic-countdown>
    </a-form>
    <a-form>
      <a-form-item label="author">{{ author }}</a-form-item>
    </a-form>
    <a-form>
      <a-form-item label="i18n">
        {{ $t('lang') }}
      </a-form-item>
    </a-form>
    <a-form>
      <a-form-item label="filter">
        <a-space>
          <a-switch v-model:checked="currency" checked-children="Dollar" un-checked-children="Euro" />
          <a-button type="dashed">
            {{ currency ? $filter.cash(100, 'dollar') : $filter.cash(100, 'euro') }}
          </a-button>
        </a-space>
      </a-form-item>
    </a-form>
    <a-form>
      <a-form-item label="directive">
        <a-slider id="test" v-model:value="distance" :min="0" :max="100" :step="5" />
        <fire-outlined v-move="{ left: `${distance}%`, marginLeft: `-7px` }" />
      </a-form-item>
    </a-form>
    <a-form>
      <a-form-item label="custom">
        <a-input-number :style="inputSpace" v-model:value="a" :min="-100" :max="100" />
        +
        <a-input-number :style="inputSpace" v-model:value="b" :min="-100" :max="100" />
        =
        {{ custom.plus(a, b) }}
      </a-form-item>
    </a-form>
  </a-drawer>
</template>

<script>
import { name, version, author } from '../../../package.json';

import { message } from 'ant-design-vue';

export default {
  data() {
    return {
      author,
      visible: false,
      distance: 50,
      currency: true,
      a: 10,
      b: 20,
      inputSpace: { width: `100px` },
      day1: Date.now() + 1000 * 60,
    };
  },

  computed: {
    title() {
      return `${name} - v${version}`;
    },
  },

  methods: {
    sholder() {
      this.visible = !this.visible;
    },
    countdown() {
      message.info('Anita Mui - 1963.10.10', 6);
    },
  },
};
</script>
