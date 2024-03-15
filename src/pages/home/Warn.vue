<template>
  <Card title="历史报警" class="h-full">
            <a-table :data-source="tableData" :pagination="false" size="small" class="card-table">
              <a-table-column data-index="device" title="设备" />
              <a-table-column data-index="port" title="端口号" />
              <a-table-column data-index="type" title="类型" />
              <a-table-column data-index="level" title="等级">
                <template #default="{ record }">
                  <a-badge status="error" v-if="record.level === 1" text="一级" />
                  <a-badge status="warning" v-if="record.level === 2" text="二级" />
                  <a-badge color="blue" v-if="record.level === 3" text="三级" />
                </template>
              </a-table-column>
              <a-table-column data-index="value" title="报警值" />
              <a-table-column data-index="date" title="时间" />
            </a-table>
          </Card>
</template>
<script setup lang="ts">
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
}])
</script>


<style lang="less" scoped>
.card-table {
  &:deep(.ant-table) {
    border-radius: 0;
    background: transparent !important;

    td.ant-table-cell-row-hover {
      background: none !important;
    }

    .ant-table-thead .ant-table-cell {
      background: #013B40;
    }

    .ant-table-cell,
    .ant-badge-status-text {
      color: #B0D9D9;
    }
  }
}
</style>
