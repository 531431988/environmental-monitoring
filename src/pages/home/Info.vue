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
        <a-button type="primary">解除报警</a-button>
        <a-button type="primary" class="my-32">继电器合</a-button>
        <a-button type="primary" danger>继电器断</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
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
