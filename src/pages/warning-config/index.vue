<template>
  <div class="flex flex-col">
    <ConfigCard title="设备基本信息">
      <div class="flex items-center">
        <div>
          <span>标题文案</span><a-switch />
        </div>
        <div>
          <span>标题文案</span><a-switch />
        </div>
        <div>
          <span>标题文案</span><a-switch />
        </div>
      </div>
    </ConfigCard>
    <ConfigCard title="RS485通信设置"></ConfigCard>
    <ConfigCard title="报警阈值设置"></ConfigCard>
    <div class="flex mt-24 justify-center">
      <a-button type="primary" ghost class="rounded-100 text-size-24 mx-24">取消</a-button>
      <a-button type="primary" class="rounded-100 text-size-24">确定</a-button>
    </div>
  </div>
</template>
<!-- <route lang="yaml">
  meta:
    layout: admin
  </route>
 -->
<script setup>
import ConfigCard from './components/ConfigCard.vue';
</script>

<style lang="less" scoped>
</style>
