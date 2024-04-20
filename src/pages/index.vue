<template>
  <a-row :gutter="[24, 24]" class="h-full px-12 pt-6 pb-12">
    <a-col :span="24" class="h-full">
      <Card title="实时监控" class="h-full">
        <a-row :gutter="[16, 16]">
          <a-col :span="8" v-for="(item, index) in chartData" :key="index">
            <Chart :height="170" :status="item.status" :type="item.type" :title="item.title" :data="item.data" @click="onLookDetail(item)" />
          </a-col>
        </a-row>
      </Card>
    </a-col>
    <!-- <a-col :span="24" style="height: calc(30% - 16px)">
      <Warn :data="warnData" :limitScrollNum="15" class="h-full" />
    </a-col> -->
  </a-row>
</template>
<script setup>
import Chart from './home/Chart.vue'
import Warn from './home/Warn.vue'
import { useRequest } from 'vue-request';
import * as api from '@/api/home'
import dayjs from 'dayjs';
const chartData = ref([])
const warnData = ref([])
const router = useRouter()
function formatChartData (data) {
  return data.map(item => ({
    ...item,
    title: `${item.name}机柜${item.shelf}层${item.slot}号`,
    data: {
      name: dayjs(item.date).format('HH:mm:ss'),
      value: item.data
    }
  }))
}

useRequest(api.dashboard, {
  pollingInterval: 60000,
  pollingWhenHidden: true,
  onSuccess: ({ data = [] }) => {
    chartData.value = formatChartData(data)
  },
});

function onLookDetail (item) {
  router.push(`/home/detail?code=${item.code}&type=${item.type}&name=${item.name}机柜${item.shelf}层${item.slot}号`)
}

onMounted(async () => {
  try {
    const { data } = await api.alarmLog({
      pageSize: 30
    })
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
