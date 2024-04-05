<template>
  <Card title="历史报警" class="h-full pb-24">
    <div class="flex w-full table-thead">
      <span class="table-th w-120">设备</span>
      <span class="table-th w-90" v-if="mode == 1">类型</span>
      <span class="table-th w-110">等级(值)</span>
     <!--  <span class="table-th w-100">报警值</span> -->
      <span class="table-th w-230">时间</span>
    </div>
    <div class="flex-1">
      <vue3-seamless-scroll :list="data" class="scroll" :limitScrollNum="limitScrollNum">
        <div class="flex w-full" :class="{'bg-[rgba(255,255,255,0.1)]': index % 2 > 0}" v-for="(item, index) in data" :key="index">
          <span class="table-td w-120 text-ellipsis whitespace-nowrap overflow-hidden">{{ item.deviceName }} </span>
          <span class="table-td w-90" v-if="mode == 1">{{ item.typeName }}</span>
          <span class="table-td w-110 ">
            <a-badge status="error" v-if="item.level === 1" :text="`一级${item.message}`" />
            <a-badge status="warning" v-if="item.level === 2" :text="`二级${item.message}`" />
            <a-badge color="blue" v-if="item.level === 3" :text="`三级${item.message}`"  />
          </span>
         <!--  <span class="table-td w-100">{{ item.message }}</span> -->
          <span class="table-td w-230">{{ item.createdDate }}</span>
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
    default: () => ([])
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
