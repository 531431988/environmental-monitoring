<template>
  <div class="flex flex-col h-full items-center config">
    <div class="w-80% py-24">
      <ConfigCard title="一级报警处置方案" class="my-32">
        <a-row :gutter="48" class="flex items-center justify-center">
          <a-col>
            <span class="mr-24">保持供电</span><a-switch />
          </a-col>
          <a-col>
            <span class="mr-24">报警指示灯</span><a-switch />
          </a-col>
          <a-col class="flex items-center">
            <span class="mr-24">短信推送</span><a-switch />
            <a-input placeholder="请输入手机号" class="w-180 ml-16" readonly value="13554291081" @click="show = true" />
          </a-col>
          <a-col>
            <span class="mr-24">微信推送</span><a-switch />
          </a-col>
        </a-row>
      </ConfigCard>
      <ConfigCard title="二级报警处置方案">
        <a-row :gutter="48" class="flex items-center justify-center">
          <a-col>
            <span class="mr-24">保持供电</span><a-switch />
          </a-col>
          <a-col>
            <span class="mr-24">报警指示灯</span><a-switch />
          </a-col>
          <a-col class="flex items-center">
            <span class="mr-24">短信推送</span><a-switch />
            <a-input placeholder="请输入手机号" class="w-180 ml-16" readonly value="13554291081" @click="show = true" />
          </a-col>
          <a-col>
            <span class="mr-24">微信推送</span><a-switch />
          </a-col>
        </a-row>
      </ConfigCard>
      <div class="mt-48 flex justify-center">
        <a-button type="primary" class="w-200 rounded-100 text-size-24">保存</a-button>
      </div>
    </div>
    <Keyboard v-model:open="show" @ok="onOk" />
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
import * as api from '@/api/warning-config'
const show = ref(false)
const levelOne = ref({})
const levelTwo = ref({})
onMounted(async () => {
  try {
    const { data } = await api.detail()
    levelOne.value = data.first_alarm
    levelTwo.value = data.second_alarm
  } catch (error) {

  }
})

function onOk (val) {
  console.log(val, key.value);
  // form[key.value] = val
}
</script>

<style lang="less" scoped>
.config {
  font-family: 'ddjbt' !important;
}
</style>
