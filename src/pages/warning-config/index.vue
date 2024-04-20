<template>
  <div class="config p-16">
    <ConfigCard title="一级报警处置方案" class="!pb-24">
      <a-row :gutter="16" class="flex items-center justify-center mt-24">
        <a-col>
          <span class="mr-24">保持供电</span><a-switch v-model:checked="form.levelOne.electricOn" />
        </a-col>
        <a-col>
          <span class="mr-24">报警指示灯</span><a-switch v-model:checked="form.levelOne.lightOn" />
        </a-col>
        <a-col class="flex items-center">
          <span class="mr-24">短信推送</span><a-switch v-model:checked="form.levelOne.pushSms" />
          <div v-if="form.levelOne.pushSms" @click="onClick('phone1')" class="readonly-input">
            <a-input type="text" placeholder="请输入手机号" class="w-150 ml-16" readonly :maxlength="11"
              v-model:value="form.phone1" />
          </div>
        </a-col>
        <a-col>
          <span class="mr-24">微信推送</span><a-switch v-model:checked="form.levelOne.pushWechat" />
        </a-col>
      </a-row>
    </ConfigCard>
    <ConfigCard title="二级报警处置方案" class="my-24 !pb-24">
      <a-row :gutter="16" class="flex items-center justify-center mt-24">
        <a-col>
          <span class="mr-24">保持供电</span><a-switch v-model:checked="form.levelTwo.electricOn" />
        </a-col>
        <a-col>
          <span class="mr-24">报警指示灯</span><a-switch v-model:checked="form.levelTwo.lightOn" />
        </a-col>
        <a-col class="flex items-center">
          <span class="mr-24">短信推送</span><a-switch v-model:checked="form.levelTwo.pushSms" />
          <div v-if="form.levelTwo.pushSms" @click="onClick('phone2')" class="readonly-input">
            <a-input type="text" placeholder="请输入手机号" class="w-150 ml-16" readonly :maxlength="11"
              v-model:value="form.phone2" />
          </div>
        </a-col>
        <a-col>
          <span class="mr-24">微信推送</span><a-switch v-model:checked="form.levelTwo.pushWechat" />
        </a-col>
      </a-row>
    </ConfigCard>
    <div class="mt-48 flex justify-center">
      <a-button type="primary" class="w-200 rounded-100 text-size-24" @click="onSave">保存</a-button>
    </div>
  </div>
  <Keyboard v-model:open="show" v-model:value="form[key]" :maxLength="11" @ok="onOk" />
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
const form = reactive({
  levelOne: {},
  levelTwo: {},
  phone1: '',
  phone2: '',
})
const key = ref('')
async function loadConfig () {
  try {
    const { data = [] } = await api.detail()
    form.levelOne = data[0]
    form.levelTwo = data[1]
    form.phone1 = data[0].receivers
    form.phone2 = data[1].receivers
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
  form[key.value] = val
}

async function onSave () {
  try {
    const params  = [
      {
        ...toRaw(form.levelOne),
        receivers: form.phone1
      },
      {
        ...toRaw(form.levelTwo),
        receivers: form.phone2
      }
    ]
    const { data, code } = await api.edit(params)
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
    height: 54px;
    line-height: 54px;
    width: 120px;

    .ant-switch-handle {
      width: 50px;
      height: 50px;
      border-radius: 100px;
      overflow: hidden;
    }

    &.ant-switch-checked .ant-switch-handle {
      inset-inline-start: calc(100% - 52px)
    }
  }
}
</style>
