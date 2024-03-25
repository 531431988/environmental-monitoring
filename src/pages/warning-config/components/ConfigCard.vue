<template>
  <div class="config-card p-24">
    <p class="web-font-dd text-size-24">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.config-card {
  background: rgba(4, 59, 70, 0.3);
  backdrop-filter: blur(6.5px);
  border-radius: 8px;
}
</style>
