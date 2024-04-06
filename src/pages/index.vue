<template>
  <div class="h-full flex flex-col p-24">
    <a-row :gutter="24" class="h-full">
      <a-col :span="8">
        <Card title="实时温度监控" class="h-full">
          <a-row :gutter="[12, 12]">
            <a-col :span="12" v-for="(item, index) in temperature" :key="index">
              <Chart :title="item.title" :data="item.data"
                @click="$router.push(`/home/detail?code=${item.code}&type=${item.type}`)" class=" px-16" />
            </a-col>
          </a-row>
        </Card>
      </a-col>
      <a-col :span="8">
        <Card title="实时电压监控" class="h-full">
          <a-row :gutter="[12, 12]">
            <a-col :span="12" v-for="(item, index) in voltage" :key="index">
              <Chart :title="item.title" :data="item.data" color="#02FFEE"
                @click="$router.push(`/home/detail?code=${item.code}&type=${item.type}`)" class=" px-16" />
            </a-col>
          </a-row>
        </Card>
      </a-col>
      <a-col :span="8">
        <Warn :data="warnData" />
      </a-col>
    </a-row>
  </div>
</template>
<script setup>
import Chart from './home/Chart.vue'
import Warn from './home/Warn.vue'
import { useRequest } from 'vue-request';
import * as api from '@/api/home'
import dayjs from 'dayjs';
const temperature = ref([])
const voltage = ref([])
const warnData = ref([])
function formatChartData (data) {
  return data.map(item => ({
    ...item,
    title: item.name,
    data: {
      name: dayjs(item.date).format('HH:mm:ss'),
      value: item.data
    }
  }))
}

useRequest(api.dashboard, {
  pollingInterval: 10000,
  onSuccess: ({data}) => {
    temperature.value = formatChartData(data.filter(item => item.type === 1))
    voltage.value = formatChartData(data.filter(item => item.type === 2))
  },
});
onMounted(async () => {
  try {
    const { data } = await api.alarmLog()
    warnData.value = data.data
  } catch (error) {

  }
})

</script>

<route lang="yaml">
  meta:
    layout: default
  </route>

<style lang="less" scoped></style>
