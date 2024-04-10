<template>
  <div class="config p-16">
    <ConfigCard title="一级报警处置方案" class="!pb-24">
      <a-row :gutter="16" class="flex items-center justify-center mt-24">
        <a-col>
          <span class="mr-24">保持供电</span><a-switch v-model:checked="levelOne.electricOn" />
        </a-col>
        <a-col>
          <span class="mr-24">报警指示灯</span><a-switch v-model:checked="levelOne.lightOn" />
        </a-col>
        <a-col class="flex items-center">
          <span class="mr-24">短信推送</span><a-switch v-model:checked="levelOne.pushSms" />
          <a-input v-if="levelOne.pushSms" placeholder="请输入手机号" class="w-150 h-54 text-size-18 ml-16" readonly
            :maxlength="11" v-model:value="levelOne.receivers" @click="onClick('levelOne')" />
        </a-col>
        <a-col>
          <span class="mr-24">微信推送</span><a-switch v-model:checked="levelOne.pushWechat" />
        </a-col>
      </a-row>
    </ConfigCard>
    <ConfigCard title="二级报警处置方案" class="my-24 !pb-24">
      <a-row :gutter="16" class="flex items-center justify-center mt-24">
        <a-col>
          <span class="mr-24">保持供电</span><a-switch v-model:checked="levelTwo.electricOn" />
        </a-col>
        <a-col>
          <span class="mr-24">报警指示灯</span><a-switch v-model:checked="levelTwo.lightOn" />
        </a-col>
        <a-col class="flex items-center">
          <span class="mr-24">短信推送</span><a-switch v-model:checked="levelTwo.pushSms" />
          <a-input v-if="levelTwo.pushSms" placeholder="请输入手机号" class="w-150 h-54 text-size-18 ml-16" readonly
            :maxlength="11" v-model:value="levelTwo.receivers" @click="onClick('levelTwo')" />
        </a-col>
        <a-col>
          <span class="mr-24">微信推送</span><a-switch v-model:checked="levelTwo.pushWechat" />
        </a-col>
      </a-row>
    </ConfigCard>
    <div class="mt-32 flex justify-center">
      <a-button type="primary" class="w-200 h-54 text-size-18 rounded-100" @click="onSave">保存</a-button>
    </div>
  </div>
  <Keyboard v-model:open="show" :maxLength="11" @ok="onOk" />
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
import { message } from 'ant-design-vue';
const show = ref(false)
const levelOne = ref({})
const levelTwo = ref({})
const key = ref('')
async function loadConfig () {
  try {
    const { data = [] } = await api.detail()
    levelOne.value = data[0]
    levelTwo.value = data[1]
  } catch (error) {
  }
}
onMounted(() => {
  loadConfig()
})

function onClick (name) {
  key.value = name
  show.value = true
}

function onOk (val) {
  if (key.value === 'levelOne') levelOne.value.receivers = val
  if (key.value === 'levelTwo') levelTwo.value.receivers = val
}

async function onSave () {
  try {
    const { data, code } = await api.edit([toRaw(levelOne.value), toRaw(levelTwo.value)])
    if (code === 200) {
      message.success('保存成功')
      loadConfig()
    }
  } catch (error) {

  }
}
</script>

<style lang="less" scoped>
.config {
  font-family: 'ddjbt' !important;

  :deep(.ant-switch) {
    height: 48px;
    line-height: 48px;
    width: 80px;

    .ant-switch-handle {
      width: 42px;
      height: 42px;
      border-radius: 100px;
      overflow: hidden;
    }

    &.ant-switch-checked .ant-switch-handle {
      inset-inline-start: calc(100% - 42px)
    }
  }
}
</style>
