<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <circle class="outer" cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
    <circle class="mid" cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <circle class="inner" cx="12" cy="12" r="2" fill="none" stroke="currentColor" stroke-width="1"/>
  </svg>
</template>

<script>
export default {
  name: 'LoadingIcon'
}
</script>

<style lang="scss" scoped>
svg {
  width: 40px;
}

.outer {
  stroke-dasharray: 80;
  stroke-dashoffset: 80;
  animation: dash 2.5s linear infinite;
}

.mid {
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: dash 2s linear infinite;
}

.inner {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: dash 5s linear infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
