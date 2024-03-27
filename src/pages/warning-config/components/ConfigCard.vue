<template>
  <div class="config-card p-32">
    <div class="text-center web-font-dd text-size-32 mb-32">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style lang="less" scoped>
.config-card {
  background: rgba(4, 59, 70, 0.3);
  backdrop-filter: blur(6.5px);
  border-radius: 16px;
  color: #bfffff;
  :deep(.ant-form-item) {
    .ant-form-item-label > label {
      color: #fff !important;
    }
  }
}
</style>
