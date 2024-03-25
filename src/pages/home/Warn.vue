<template>
  <Card title="历史报警" class="h-full">
    <div class="flex justify-between table-th">
      <span class="w-200">设备</span>
      <span class="w-100">类型</span>
      <span class="w-100">等级</span>
      <span class="w-100">报警值</span>
      <span class="w-200">时间</span>
    </div>
    <div class="flex-1">
      <vue3-seamless-scroll :list="tableData" class="scroll" :limitScrollNum="21">
        <div class="flex justify-between table-td" v-for="(item, index) in tableData" :key="index">
          <span class="w-200">{{ item.device }} </span>
          <span class="w-100">{{ item.type }}</span>
          <span class="w-100">
            <a-badge status="error" v-if="item.level === 1" text="一级" />
            <a-badge status="warning" v-if="item.level === 2" text="二级" />
            <a-badge color="blue" v-if="item.level === 3" text="三级" />
          </span>
          <span class="w-100">{{ item.value }}</span>
          <span class="w-200">{{ item.date }}</span>
        </div>
      </vue3-seamless-scroll>
    </div>
  </Card>
</template>
<script setup>
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
const tableData = reactive([{
  key: '1',
  device: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 1,
  value: 80,
  date: '2024-03-13'
}, {
  key: '2',
  device: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 2,
  value: 80,
  date: '2024-03-13'
}, {
  key: '3',
  device: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 3,
  value: 80,
  date: '2024-03-13'
}, {
  key: '4',
  device: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 3,
  value: 80,
  date: '2024-03-13'
}, {
  key: '5',
  device: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 3,
  value: 80,
  date: '2024-03-13'
}, {
  key: '5',
  device: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 3,
  value: 80,
  date: '2024-03-13'
}, {
  key: '5',
  device: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 3,
  value: 80,
  date: '2024-03-13'
}, {
  key: '5',
  device: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 3,
  value: 80,
  date: '2024-03-13'
}, {
  key: '5',
  device: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 3,
  value: 80,
  date: '2024-03-13'
}, {
  key: '5',
  device: '1机柜2号UPS',
  port: 90,
  type: '温度',
  level: 3,
  value: 80,
  date: '2024-03-13'
}])
</script>


<style lang="less" scoped>
.scroll {
  overflow: hidden;

  :deep(.ant-badge-status-text) {
    color: #b0d9d9;
  }
}

.table-th {
  background: #013b40;
}

.table-th,
.table-td {
  font-size: 18px;
  color: #b0d9d9;
  padding: 6px 12px;
}

.card-table {
  &:deep(.ant-table) {
    border-radius: 0;
    background: transparent !important;

    td.ant-table-cell-row-hover {
      background: none !important;
    }

    .ant-table-thead .ant-table-cell {
      background: #013b40;
    }

    .ant-table-cell,
    .ant-badge-status-text {
      color: #b0d9d9;
    }
  }
}
</style>
