<template>
  <div class="h-full flex flex-col p-24">
    <a-row :gutter="24" class="h-full">
      <a-col :span="8">
        <Card title="实时温度监控" class="h-full">
          <a-row :gutter="[12, 12]">
            <a-col :span="12" v-for="item in data">
              <Chart :title="item.title" :data="item.data" />
            </a-col>
          </a-row>
        </Card>
      </a-col>
      <a-col :span="8">
        <Card title="实时电压监控" class="h-full">
          <a-row :gutter="[12, 12]">
            <a-col :span="12" v-for="item in data">
              <Chart :title="item.title" :data="item.data" color="#02FFEE" />
            </a-col>
          </a-row>
        </Card>
      </a-col>
      <a-col :span="8">
        <Warn />
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import Chart from './home/Chart.vue'
import Warn from './home/Warn.vue'
const data = reactive([
  {
    title: '1机柜1号UPS',
    data: [
      { value: 60, name: '10:15' },
      { value: 65, name: '10:20' },
      { value: 94, name: '10:25' },
      { value: 75, name: '10:30' },
    ],
  },
  {
    title: '1机柜2号UPS',
    data: [
      { value: 60, name: '10:15' },
      { value: 65, name: '10:20' },
      { value: 94, name: '10:25' },
      { value: 75, name: '10:30' },
    ],
  },
  {
    title: '1机柜3号UPS',
    data: [
      { value: 60, name: '10:15' },
      { value: 65, name: '10:20' },
      { value: 94, name: '10:25' },
      { value: 75, name: '10:30' },
    ],
  },
  {
    title: '1机柜4号UPS',
    data: [
      { value: 60, name: '10:15' },
      { value: 65, name: '10:20' },
      { value: 94, name: '10:25' },
      { value: 75, name: '10:30' },
    ],
  },
  {
    title: '1机柜5号UPS',
    data: [
      { value: 60, name: '10:15' },
      { value: 65, name: '10:20' },
      { value: 94, name: '10:25' },
      { value: 75, name: '10:30' },
    ],
  },
])
</script>

<route lang="yaml">
  meta:
    layout: default
  </route>

<style lang="less" scoped>
</style>
