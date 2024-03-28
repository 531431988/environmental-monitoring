<template>
  <Card title="历史报警" class="h-full  web-font-dd">
    <div class="flex justify-between table-thead">
      <span class="table-th w-200">设备</span>
      <span class="table-th w-90" v-if="mode == 1">类型</span>
      <span class="table-th w-100">等级</span>
      <span class="table-th w-120">报警值</span>
      <span class="table-th w-180">时间</span>
    </div>
    <div class="flex-1">
      <vue3-seamless-scroll :list="data" class="scroll" :limitScrollNum="limitScrollNum">
        <div class="flex justify-between" v-for="(item, index) in data" :key="index">
          <span class="table-td w-200 text-ellipsis whitespace-nowrap overflow-hidden">{{ item.device }} </span>
          <span class="table-td w-90" v-if="mode == 1">{{ item.type }}</span>
          <span class="table-td w-100 ">
            <a-badge status="error" v-if="item.level === 1" text="一级" />
            <a-badge status="warning" v-if="item.level === 2" text="二级" />
            <a-badge color="blue" v-if="item.level === 3" text="三级" />
          </span>
          <span class="table-td w-120">{{ item.value }}</span>
          <span class="table-td w-180">{{ item.date }}</span>
        </div>
      </vue3-seamless-scroll>
    </div>
  </Card>
</template>
<script setup>
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
defineProps({
  mode: {
    type: [String, Number],
    default: 1
  },
  limitScrollNum: {
    type: Number,
    default: 21
  },
  data: {
    type: Array,
    default: () => ([{
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
  }
})
</script>


<style lang="less" scoped>
.scroll {
  overflow: hidden;

  :deep(.ant-badge-status-text) {
    color: #b0d9d9;
  }
}

.table-thead {
  background: #013b40;
}

.table-th,
.table-td {
  &,
  :deep(.ant-badge-status-text) {
    font-size: 20px !important;
    line-height: 32px;
  }
  color: #b0d9d9;
  padding: 10px 12px;
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
