<template>
  <svg class="round-line" v-if="round === 2">
    <!-- 1 -->
    <line x1="0" y1="45" x2="10" y2="45" />
    <line x1="10" y1="45" x2="10" y2="135" />
    <line x1="10" y1="135" x2="0" y2="135" />
    <line x1="10" y1="90" x2="20" y2="90" />
    <!-- 2 -->
    <line x1="0" y1="225" x2="10" y2="225" />
    <line x1="10" y1="225" x2="10" y2="314" />
    <line x1="10" y1="314" x2="0" y2="314" />
    <line x1="10" y1="270" x2="20" y2="270" />
  </svg>
  <svg class="round-line" v-else-if="round === 3">
    <line x1="0" y1="90" x2="10" y2="90" />
    <line x1="10" y1="90" x2="10" y2="270" />
    <line x1="10" y1="270" x2="0" y2="270" />
    <line x1="10" y1="180" x2="20" y2="180" />
  </svg>
</template>
<script>
export default {
  name: "RoundLine",
  props: ["round"]
};
</script>

<style scoped lang="scss">
.round-line {
  position: absolute;
  left: -3.3rem;
  top: 0;
  height: 100%;
}
line {
  stroke: rgb(61, 99, 204);
  stroke-width: 2;
}
</style>
