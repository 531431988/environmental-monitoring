<template>
  <div class="form">
    <a-row>
      <a-col class="flex-1">
        <a-form>
          <a-form-item label="设备名称">{{form.name}}机柜{{form.shelf}}层{{ form.slot }}号温度</a-form-item>
          <a-form-item label="最近报警阈值（℃）">{{ form.lastAlarmData || '-' }}</a-form-item>
          <a-form-item label="最近报警时间">{{form.lastAlarmDate || '-'}}</a-form-item>
          <a-form-item label="当前温度（℃）">{{ form.currentData || '-' }}</a-form-item>
          <a-row>
            <a-col :span="12">
              <a-form-item label="地址/站号">{{ form.code || '-'  }}</a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="波特率">{{ form.baudRate }}</a-form-item>
            </a-col>
          </a-row>
          <a-form-item label="正常温度区间值（℃）">25-35</a-form-item>
          <a-form-item label="一级报警阈值（℃）">36-50</a-form-item>
          <a-form-item label="二级报警阈值（℃）">51-80</a-form-item>
        </a-form>
      </a-col>
      <a-col class="flex flex-col">
        <a-button type="primary" @click="onClick(1)">解除报警</a-button>
        <a-button type="primary" @click="onClick(2)" class="my-32">继电器合</a-button>
        <a-button type="primary" @click="onClick(3)" danger>继电器断</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { Modal, message } from 'ant-design-vue';
import { useModalContainer } from '@/hooks/common'
import { detail } from '@/api/device-manage'
import * as api from '@/api/home'
const form = ref({})
onMounted(async () => {
  try {
    const { data } = await detail(1)
    form.value = data
  } catch (error) {
  }
})
function onClick (type) {
  const url = {
    1: {
      title: '您确定要解除报警吗？',
      api: api.switchOn
    },
    2: {
      title: '您确定要继电器合吗？',
      api: api.switchOff
    },
    3: {
      title: '您确定要继电器断吗？',
      api: api.switchOn
    }
  }
  Modal.confirm({
    centered: true,
    title: '操作确认',
    content: url[type].title,
    okText: '确定',
    cancelText: '取消',
    width: '500',
    getContainer: useModalContainer,
    async onOk () {
      try {
        const { data, code } = await url[type].api()
        if(code === 200) message.success('操作成功')
      } catch (error) {

      }
    },
    onCancel () { },
  });
}
</script>

<style lang="less" scoped>
.form {
  :deep(.ant-form-item) {
    line-height: 1;
    color: #fff !important;
    font-size: 18px;
    margin-bottom: 0;
    .ant-form-item-label > label {
      height: 32px;
      color: rgba(255, 255, 255, 0.8) !important;
      font-size: 18px;
    }
    .ant-form-item-control-input {
      min-height: 32px;
      font-size: 18px;
    }
  }
}
</style>
