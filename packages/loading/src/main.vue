<template>
  <div class="btn-loading" :style="{ marginTop: -radius / 2 + 'px' }">
    <div class="lds-ring" :style="{ width: radius + 'px', height: radius + 'px' }">
      <div
        :style="{
          width: radius + 'px',
          height: radius + 'px',
          border: `${borderWidth}px solid`,
          borderColor: borderColor + ' transparent transparent transparent',
        }"
        v-for="(n, index) in 4"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    radius: {
      type: [Number, String],
      default: 10,
    },
    borderWidth: {
      type: [Number, String],
      default: 2,
    },
    borderColor: {
      type: String,
      default: 'var(--color-light)',
    },
  },
}
</script>
<style lang="scss" scoped>
.btn-loading {
  position: absolute;
  top: 50%;
  right: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lds-ring {
  display: inline-block;
  position: relative;
  border-radius: 50%;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
}

.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>