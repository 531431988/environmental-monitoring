<template>
  <div class="flex flex-col h-full">
    <div class="w-80% m-auto py-24">
      <ConfigCard title="设备基本信息">
        <div class="flex items-center justify-center">
          <a-row :gutter="48">
            <a-col>
              <span class="mr-24">保持供电</span><a-switch />
            </a-col>
            <a-col>
              <span class="mr-24">报警指示灯</span><a-switch />
            </a-col>
            <a-col>
              <span class="mr-24">短信推送</span><a-switch />
            </a-col>
            <a-col>
              <span class="mr-24">微信推送</span><a-switch />
            </a-col>
          </a-row>
        </div>
      </ConfigCard>
      <ConfigCard title="RS485通信设置" class="my-32">
        <div class="flex items-center justify-center">
          <a-row :gutter="48">
            <a-col>
              <span class="mr-24">保持供电</span><a-switch />
            </a-col>
            <a-col>
              <span class="mr-24">报警指示灯</span><a-switch />
            </a-col>
            <a-col>
              <span class="mr-24">短信推送</span><a-switch />
            </a-col>
            <a-col>
              <span class="mr-24">微信推送</span><a-switch />
            </a-col>
          </a-row>
        </div>
      </ConfigCard>
      <ConfigCard title="报警阈值设置">
        <div class="flex items-center justify-center">
          <a-row :gutter="48">
            <a-col>
              <span class="mr-24">保持供电</span><a-switch />
            </a-col>
            <a-col>
              <span class="mr-24">报警指示灯</span><a-switch />
            </a-col>
            <a-col>
              <span class="mr-24">短信推送</span><a-switch />
            </a-col>
            <a-col>
              <span class="mr-24">微信推送</span><a-switch />
            </a-col>
          </a-row>
        </div>
      </ConfigCard>
      <div class="mt-48 flex justify-center">
        <a-button type="primary" ghost class="w-200 rounded-100 text-size-24 mx-24">取消</a-button>
        <a-button type="primary" class="w-200 rounded-100 text-size-24">确定</a-button>
      </div>
    </div>
  </div>
</template>
<!-- <route lang="yaml">
  meta:
    layout: admin
  </route>
 -->
 <route lang="json">{
  "name": "warning-config",
  "meta": {
    "requiresAuth": true
  }
}</route>
<script setup>
import ConfigCard from './components/ConfigCard.vue';
</script>

<style lang="less" scoped>
</style>
