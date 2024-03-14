<template>
  <div class="h-full flex flex-col p-48">
    <a-row :gutter="24">
      <a-col :span="12">
        <Card title="实时温度监控">
          <a-row :gutter="[12, 12]">
            <a-col :span="6" v-for="item in data">
              <Chart :title="item.title" :data="item.data" />
            </a-col>
          </a-row>
        </Card>
      </a-col>
      <a-col :span="12">
        <Card title="实时电压监控">
          <a-row :gutter="[12, 12]">
            <a-col :span="6" v-for="item in data">
              <Chart :title="item.title" :data="item.data" color="#02FFEE" />
            </a-col>
          </a-row>
        </Card>
      </a-col>
    </a-row>
    <div class="flex-1 mt-24">
      <a-row :gutter="24" class="h-full">
        <a-col :span="12" class="h-full">
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
        </a-col>
        <a-col :span="12" class="h-full">
          <div class="flex flex-col h-full">
            <div class="flex-1">&nbsp;</div>
            <div>
              <div class="flex items-center justify-end text-center">
                <div class="mx-32" @click="onSet">
                  <div class="i-ant-design:setting-outlined m-auto text-size-48 text-color-success"></div>
                  <div  class="text-cool-gray">设置</div>
                </div>
                <div @click="onLogout">
                  <div class="i-wpf:shutdown m-auto text-size-40 mb-5 text-color-error"></div>
                  <div class="text-cool-gray">退出</div>
                </div>
              </div>
              <div class="mt-16 text-right" style="color: #829F9F">
                运行时间：108天10小时25分28秒 当前版本：v1.240313
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script setup lang="ts">
import { exit } from '@tauri-apps/api/process';
import { Modal } from 'ant-design-vue';
const data = reactive([
  {
    title: '1机柜1号UPS',
    data: [
      { value: 60, name: "10:15" },
      { value: 65, name: "10:20" },
      { value: 94, name: "10:25" },
      { value: 75, name: "10:30" }
    ]
  },
  {
    title: '1机柜2号UPS',
    data: [
      { value: 60, name: "10:15" },
      { value: 65, name: "10:20" },
      { value: 94, name: "10:25" },
      { value: 75, name: "10:30" }
    ]
  },
  {
    title: '1机柜3号UPS',
    data: [
      { value: 60, name: "10:15" },
      { value: 65, name: "10:20" },
      { value: 94, name: "10:25" },
      { value: 75, name: "10:30" }
    ]
  },
  {
    title: '1机柜4号UPS',
    data: [
      { value: 60, name: "10:15" },
      { value: 65, name: "10:20" },
      { value: 94, name: "10:25" },
      { value: 75, name: "10:30" }
    ]
  },
  {
    title: '1机柜5号UPS',
    data: [
      { value: 60, name: "10:15" },
      { value: 65, name: "10:20" },
      { value: 94, name: "10:25" },
      { value: 75, name: "10:30" }
    ]
  }
])

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

function onSet() { }
function onLogout() {
  Modal.confirm({
    centered: true,
    title: '确认退出',
    content: '确认要退出系统吗？您可以再次运行本程序来启用监控',
    okText: '确定',
    cancelText: '取消',
    async onOk() {
      await exit(1);
    },
    onCancel() { },
  });
}
</script>

<route lang="yaml">
  meta:
    layout: default
  </route>

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
