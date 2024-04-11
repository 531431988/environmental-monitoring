<template>
  <div class="form">
    <a-row class="items-center">
      <a-col class="flex-1">
        <a-form>
          <a-form-item label="设备名称">{{ form.name }}机柜{{ form.shelf }}层{{ form.slot }}号{{ form.type == 1 ? '温度' : '电压'
            }}</a-form-item>
          <a-form-item :label="`最近报警阈值（${unit}）`">{{ form.lastAlarmData }}</a-form-item>
          <a-form-item label="最近报警时间">{{ form.lastAlarmDate }}</a-form-item>
          <a-form-item :label="`当前温度（${unit}）`">{{ form.currentData }}</a-form-item>
          <a-row>
            <a-col :span="12">
              <a-form-item label="地址/站号">{{ form.code }}</a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="波特率">{{ form.baudRate }}</a-form-item>
            </a-col>
          </a-row>
          <a-form-item label="工作区间">{{ form.range }}</a-form-item>
          <a-form-item :label="`一级报警阈值（${unit}）`">{{ form.firstAlarmMin }}-{{ form.firstAlarmMax }}</a-form-item>
          <a-form-item :label="`二级报警阈值（${unit}）`">{{ form.secondAlarmMin }}-{{ form.secondAlarmMax }}</a-form-item>
        </a-form>
      </a-col>
      <a-col class="flex flex-col">
        <a-button type="primary" @click="onClick(1)" class="text-size-20">解除报警</a-button>
        <a-button type="primary" @click="onClick(2)" class="text-size-20 my-32">继电器合</a-button>
        <a-button type="primary" @click="onClick(3)" danger class="text-size-20">继电器断</a-button>
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
const route = useRoute()
const unit = computed(() => {
  return form.value.type == 1 ? '℃' : 'V'
})
onMounted(async () => {
  try {
    const { data } = await detail(route.query?.code || undefined)
    form.value = data
  } catch (error) {
  }
})
function onClick (type) {
  const url = {
    1: {
      title: '您确定要解除报警吗？',
      api: () => api.closeAlarm(form.value.code)
    },
    2: {
      title: '继电器合闸将恢复电路，确定合闸吗？',
      api: api.switchOff
    },
    3: {
      title: '继电器断开将切断电路，确定断开吗？',
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
        if (code === 200) message.success('操作成功')
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
    font-size: 13px;
    margin-bottom: 0;

    .ant-form-item-label>label {
      height: 32px;
      color: rgba(255, 255, 255, 0.6) !important;
      font-size: 13px;
    }

    .ant-form-item-control-input {
      min-height: 32px;
      font-size: 15px;
    }
  }
}
</style>
