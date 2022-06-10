<template>
  <button
    class="ab-button"
    :class="`${type} ${status}`"
    :aria-disabled="disable"
    tabindex="0"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script>

export default {
  name: 'AbButton',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    status: {
      type: String,
      default: ''
    },
    disable: Boolean
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
};
</script>

<style lang="scss">
.ab-button {
  box-sizing: border-box;
  cursor: pointer;
  transition: opacity .3s;
  outline: none;

  &:hover {
    opacity: .8;
  }

  &.primary {
    box-sizing: border-box;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: var(--blue);
    border-radius: var(--radius-sm);
    color: #000;
    font-family: Poppins-Medium, Poppins, "Microsoft YaHei", "微软雅黑", "PingFang SC", serif;
    font-weight: 400;
    font-size: 12px;
  }

  &.danger {
    background: #F84960;
  }

  &.disabled {
    background-color: var(--color-disable);
    color: var(--color-content);
    &:hover {
      opacity: 1;
    }
  }

  &.text {
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    font-family: Poppins-Medium, Poppins, "Microsoft YaHei", "微软雅黑", "PingFang SC", serif;
    font-weight: 400;
    color: var(--color-content);
  }

  &.submit {
    background: var(--blue);
    color: #000;
  }
}
</style>
