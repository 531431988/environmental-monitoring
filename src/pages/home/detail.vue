<template>
  <div class="flex flex-col p-24 h-full">
    <a-row :gutter="[24, 24]" class="h-full">
      <a-col :span="8">
        <Card title="数据采集-今日" class="h-368">
          <Chart title="设备名称" :data="dailyQuery" color="#23AF98" />
        </Card>
      </a-col>
      <a-col :span="8">
        <Card title="数据采集-7日" class="h-368">
          <Chart title="设备名称" :data="weeklyQuery" />
        </Card>
      </a-col>
      <a-col :span="8">
        <Card title="设备信息" class="h-368">
          <Info />
        </Card>
      </a-col>
      <a-col :span="14">
        <Card title="数据采集-30日" style="height: calc(100vh - 368px - 24px)">
          <Chart mode="2" title="设备名称" :data="monthlyQuery" color="#00C4F6" :height="416" />
        </Card>
      </a-col>
      <a-col :span="10">
        <Warn mode="2" :limitScrollNum="9" :data="alarmLog" style="height: calc(100vh - 368px - 24px)" />
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import Warn from './Warn.vue'
import Chart from './Chart.vue'
import Info from './Info.vue'
import dayjs from 'dayjs'
import * as api from '@/api/home'
const dailyQuery = ref([])
const weeklyQuery = ref([])
const monthlyQuery = ref([])
const route = useRoute()
const alarmLog = ref([])
onMounted(async() => {
  try {
    const { data } = await api.dailyQuery(1)
    dailyQuery.value = data.map(item => ({
      ...item,
      name: dayjs(item.createTime).format('hh:mm'),
      value: item.data
    }))
  } catch (error) {

  }
  try {
    const { data } = await api.weeklyQuery(1)
    weeklyQuery.value = data.map(item => ({
      ...item,
      name: dayjs(item.createTime).format('MM-DD'),
      value: item.data
    }))
  } catch (error) {

  }
  try {
    const { data } = await api.monthlyQuery(1)
    monthlyQuery.value = data.map(item => ({
      ...item,
      name: dayjs(item.createTime).format('YYYY-MM-DD'),
      value: item.data
    }))
  } catch (error) {

  }
  try {
    const { data } = await api.alarmLog({
      device: route.query?.id || 1
    })
    alarmLog.value = data.data
  } catch (error) {

  }
})
</script>

<style lang="less" scoped>
</style>
