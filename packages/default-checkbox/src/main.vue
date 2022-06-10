<template>
  <label class="ab-checkbox">
    <span class="checkbox__input" :class="{ 'is-checked': checked }">
      <span class="checkbox__inner"></span>
      <input
        class="checkbox__original"
        type="checkbox"
        :checked="checked"
        @change="handleChange"
      />
    </span>
    <span class="checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "DefaultCheckbox",
  // 父组件绑定的v-model值默认传给value，如果要使用checked，需要通过model显示声明checked
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    label: String,
    checked: Boolean
  },
  data() {
    return {};
  },
  computed: {

  },
  methods: {
    handleChange(e) {
      this.$emit("change", e.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.ab-checkbox {
  display: flex;
  align-items: flex-start;
  .checkbox__input {
    position: relative;
    display: flex;
    align-items: center;
    white-space: nowrap;
    line-height: 1;
    vertical-align: middle;
    outline: 0;
    cursor: pointer;
  }
  .checkbox__inner {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid #444df7;
    border-radius: 2px;
    box-sizing: border-box;
    transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
      background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
    z-index: 1;
    &::after {
      position: absolute;
      top: 1px;
      left: 4px;
      width: 3px;
      height: 7px;
      content: "";
      border: 1px solid #f84960;
      border-left: 0;
      border-top: 0;
      transform: rotate(45deg) scaleY(0);
      transition: transform 0.15s ease-in 0.05s,
        -webkit-transform 0.15s ease-in 0.05s;
      transform-origin: center;
      box-sizing: content-box;
    }
  }
  .checkbox__original {
    opacity: 0;
    outline: 0;
    position: absolute;
    margin: 0;
    width: 0;
    height: 0;
    z-index: -1;
  }
  .checkbox__label {
    display: inline-block;
    padding-left: 0.5rem;
    color: #a3ebed;
    line-height: 14px;
    font-size: 0.18rem;
  }

  .checkbox__input.is-checked .checkbox__inner::after {
    transform: rotate(45deg) scaleY(1);
  }
}
</style>