<template>
  <div id="app">
    <!-- <loading :radius="40" :border-width="4" border-color="blue" /> -->
    <AbCheckbox v-model="checked1" @change="handleChange1">同意</AbCheckbox>
    <p>checked1: {{ checked1 }}</p>
    <hr />
    <DefaultCheckbox v-model="checked2" label="哈哈" @change="handleChange2"></DefaultCheckbox>
    <p>checked2: {{ checked2 }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      checked1: true,
      checked2: false,
    };
  },
  methods: {
    handleChange1(val) {
      console.log('data1: ', val)
    },
    handleChange2(val) {
      console.log('data2: ', val)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
