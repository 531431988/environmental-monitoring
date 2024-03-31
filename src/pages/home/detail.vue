<template>
  <div class="flex flex-col p-24 h-full">
    <a-row :gutter="[24, 24]" class="h-full">
      <a-col :span="8">
        <Card title="数据采集-今日" class="h-368">
          <Chart :title="chartData.title" :data="chartData.data" color="#23AF98" />
        </Card>
      </a-col>
      <a-col :span="8">
        <Card title="数据采集-7日" class="h-368">
          <Chart :title="chartData.title" :data="chartData.data" />
        </Card>
      </a-col>
      <a-col :span="8">
        <Card title="设备信息" class="h-368">
          <Info />
        </Card>
      </a-col>
      <a-col :span="14">
        <Card title="数据采集-30日" style="height: calc(100vh - 368px - 24px)">
          <Chart :title="chartData.title" :data="chartData.data" color="#00C4F6" :height="416" />
        </Card>
      </a-col>
      <a-col :span="10">
        <Warn mode="2" :limitScrollNum="9" style="height: calc(100vh - 368px - 24px)" />
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import Warn from './Warn.vue'
import Chart from './Chart.vue'
import Info from './Info.vue'
import * as api from '@/api/home'
const chartData = ref({
  title: '1机柜1号UPS',
  data: [
    { value: 60, name: '10:15' },
    { value: 65, name: '10:20' },
    { value: 94, name: '10:25' },
    { value: 75, name: '10:30' },
  ],
})
onMounted(async() => {
  try {
    const { data } = await api.weeklyQuery(0)
  } catch (error) {

  }
})
</script>

<style lang="less" scoped>
</style>
