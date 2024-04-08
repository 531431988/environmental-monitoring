<template>
  <Card title="历史报警" class="h-full">
    <div class="flex w-full table-thead text-center">
      <span class="table-th" :class="mode == 1 ? 'w-160' : 'flex-1'">设备</span>
      <span class="table-th w-90" v-if="mode == 1">类型</span>
      <span class="table-th" :class="mode == 1 ? 'w-90' : 'flex-1'">等级</span>
      <span class="table-th w-90">报警值</span>
      <span class="table-th" :class="mode == 1 ? 'w-210' : 'flex-1'">时间</span>
    </div>
    <div class="flex-1">
      <vue3-seamless-scroll :list="data" class="scroll" :limitScrollNum="limitScrollNum">
        <div class="flex w-full  text-center" :class="{ 'bg-[rgba(255,255,255,0.1)]': index % 2 > 0 }"
          v-for="(item, index) in data" :key="index">
          <span class="table-td w-120 text-ellipsis whitespace-nowrap overflow-hidden"
            :class="mode == 1 ? 'w-160' : 'flex-1'">{{ item.name }}机柜{{ item.shelf }}层{{ item.slot }}号 </span>
          <span class="table-td w-90" v-if="mode == 1">{{ item.typeName }}</span>
          <span class="table-td" :class="mode == 1 ? 'w-90' : 'flex-1'">
            <a-badge status="error" v-if="item.level === 1" :text="`一级`" />
            <a-badge status="warning" v-if="item.level === 2" :text="`二级`" />
            <a-badge color="blue" v-if="item.level === 3" :text="`三级`" />
          </span>
          <span class="table-td w-90">{{ item.message }}</span>
          <span class="table-td" :class="mode == 1 ? 'w-210' : 'flex-1'">{{ item.createdDate }}</span>
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
  color: #b0d9d9;

  :deep(.ant-badge-status-text) {
    color: #b0d9d9;
  }
}

.table-thead {
  background: #013b40;
}


.table-td,
.table-th {

  &,
  :deep(.ant-badge-status-text) {
    font-size: 14px !important;
    line-height: 32px;
  }

  padding:6px 4px;
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
