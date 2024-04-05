<template>
  <div class="h-full flex flex-col p-24">
    <a-row :gutter="24" class="h-full">
      <a-col :span="8">
        <Card title="实时温度监控" class="h-full">
          <a-row :gutter="[12, 12]">
            <a-col :span="12" v-for="(item, index) in chartData" :key="index">
              <Chart :title="item.title" :data="item.data" @click="$router.push(`/home/detail?device=${item.id}&type=${item.type}`)" class=" px-16" />
            </a-col>
          </a-row>
        </Card>
      </a-col>
      <a-col :span="8">
        <Card title="实时电压监控" class="h-full">
          <a-row :gutter="[12, 12]">
            <a-col :span="12" v-for="(item, index) in chartData" :key="index">
              <Chart :title="item.title" :data="item.data" color="#02FFEE" @click="$router.push(`/home/detail?device=${item.id}&type=${item.type}`)"
                class=" px-16" />
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
import { useWebSocket } from '@vueuse/core'
import * as api from '@/api/home'
const chartData = reactive([
  {
    title: '1机柜1号UPS',
    data: { value: 60, name: '10:15' },
  }, {
    title: '1机柜2号UPS',
    data: { value: 65, name: '10:15' },
  }, {
    title: '1机柜3号UPS',
    data: { value: 94, name: '10:15' },
  }, {
    title: '1机柜4号UPS',
    data: { value: 75, name: '10:15' },
  },
])
const warnData = ref([])
const temperature = ref([])
const voltage = ref([])
onMounted(async () => {
  setInterval(() => {
    chartData.forEach((item,index) => {
    item.data = {value: parseInt(Math.random()*10), name: `10: ${20+index}`}
   })
  }, 1000);
  try {
    const { data } = await api.alarmLog()
    warnData.value = data.data
  } catch (error) {

  }
})

const { status, data, send, open, close } = useWebSocket(`ws:${import.meta.env.VITE_GLOB_API_URL}/monitor/ws/9999`, {
  //autoReconnect: true,
  heartbeat: true,
  onMessage: (ws, event) => {
    console.log(event.data)
    chartData.value.push(JSON.parse(event.data))
    temperature.value = chartData.map(item => item.type === '温度计')
    voltage.value = chartData.map(item => item.type === '电压计')
  },
  onError: (ws, event) => {
    console.log(event)
  }
})


onUnmounted(() => {
  close()
})

</script>

<route lang="yaml">
  meta:
    layout: default
  </route>

<style lang="less" scoped></style>
