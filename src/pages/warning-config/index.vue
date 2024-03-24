<template>
  <a-config-provider :theme="{
    token: {
      colorBgContainer: 'rgba(4, 59, 70, 0.3)',
    }
  }">
    <div class="p-32">
      <a-table :data-source="tableData" :pagination="false" size="small" class="card-table">
        <a-table-column data-index="name" title="名称" />
        <a-table-column data-index="port" title="串口号" />
        <a-table-column data-index="type" title="类型" />
        <a-table-column data-index="range" title="正常工作区间值（不含最大值）" />
        <a-table-column data-index="level" title="一级报警阈值" />
        <a-table-column data-index="level" title="二级报警阈值" />
        <a-table-column data-index="key" title="处置指令" align="center">
          <a-button type="primary">设置</a-button>
        </a-table-column>
      </a-table>
    </div>
  </a-config-provider>
  <Set v-modal:open="open" />
</template>
<route lang="yaml">
  meta:
    layout: admin
  </route>

<script setup>
import Set from './Set.vue'
const open = ref(false)
const tableData = reactive([{
  key: '1',
  name: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 1,
  range: '<45',
  date: '2024-03-13'
}, {
  key: '2',
  name: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 2,
  range: '<45',
  date: '2024-03-13'
}, {
  key: '3',
  name: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 3,
  range: '<45',
  date: '2024-03-13'
}, {
  key: '4',
  name: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 3,
  range: '<45',
  date: '2024-03-13'
}, {
  key: '5',
  name: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 3,
  range: '<45',
  date: '2024-03-13'
}])
</script>

<style lang="less" scoped>
.card-table{
  :deep(.ant-table){
    th, td{
      color:#B0D9D9 ;
    }
    .ant-btn {
      box-shadow: none;
    }
  }
}
</style>
