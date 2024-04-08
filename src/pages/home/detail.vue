<template>
  <div class="flex flex-col px-16 pt-10 pb-16 h-full">
    <a-row :gutter="16" class="h-full">
      <a-col :span="8" class="h-1/2">
        <Card title="数据采集-今日">
          <Chart mode="2" :title="title" :data="dailyQuery" color="#23AF98" :height="248" />
        </Card>
      </a-col>
      <a-col :span="8" class="h-1/2">
        <Card title="数据采集-7日">
          <Chart mode="2" :title="title" :data="weeklyQuery" :height="248" />
        </Card>
      </a-col>
      <a-col :span="8" class="h-1/2">
        <Card title="设备信息" class="h-332">
          <Info />
        </Card>
      </a-col>
      <a-col :span="14" class="h-1/2">
        <Card title="数据采集-30日">
          <Chart mode="2" :title="title" :data="monthlyQuery" color="#00C4F6" :height="264" />
        </Card>
      </a-col>
      <a-col :span="10" class="h-1/2">
        <Warn mode="2" :limitScrollNum="9" :data="alarmLog" />
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
const title = computed(() => {
  return route.query?.name
})

onMounted(async () => {
  try {
    const { data } = await api.dailyQuery(1)
    dailyQuery.value = data.map(item => ({
      name: dayjs(item.createTime).format('HH:mm'),
      value: item.data
    }))
  } catch (error) {

  }
  try {
    const { data } = await api.weeklyQuery(1)
    weeklyQuery.value = data.map(item => ({
      name: dayjs(item.createTime).format('MM-DD'),
      value: item.data
    }))
  } catch (error) {

  }
  try {
    const { data } = await api.monthlyQuery(1)
    monthlyQuery.value = data.map(item => ({
      name: dayjs(item.createTime).format('YYYY-MM-DD'),
      value: item.data
    }))
  } catch (error) {

  }
  try {
    const { data } = await api.alarmLog({
      device: route.query?.code || undefined,
      pageSize: 30
    })
    alarmLog.value = data.data
  } catch (error) {

  }
})
</script>

<style lang="less" scoped></style>
