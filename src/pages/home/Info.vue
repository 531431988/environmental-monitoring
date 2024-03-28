<template>
  <div class="form">
    <a-row>
      <a-col class="flex-1">
        <a-form>
          <a-form-item label="设备名称">1机柜2层3号温度</a-form-item>
          <a-form-item label="最近报警阈值（℃）">55</a-form-item>
          <a-form-item label="最近报警时间">2024-03-24 13：59：01</a-form-item>
          <a-form-item label="当前温度（℃）">40</a-form-item>
          <a-row>
            <a-col :span="12">
              <a-form-item label="地址/站号">2</a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="波特率">9600</a-form-item>
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
import { Modal } from 'ant-design-vue';
import { useModalContainer } from '@/hooks/common'
function onClick (type) {
  const content = {
    1: '您确定要解除报警吗？',
    2: '您确定要继电器合吗？',
    3: '您确定要继电器断吗？'
  }
  Modal.confirm({
    centered: true,
    title: '操作确认',
    content: content[type],
    okText: '确定',
    cancelText: '取消',
    width: '500',
    getContainer: useModalContainer,
    async onOk () {
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
      color: #fff !important;
      font-size: 18px;
    }
    .ant-form-item-control-input {
      min-height: 35px;
    }
  }
}
</style>
