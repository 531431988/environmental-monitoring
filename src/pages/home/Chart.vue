<template>
  <div style="background: rgba(255, 255, 255, 0.1);" class="px-24">
    <p class="web-font-dd text-center my-0 pt-16 text-size-20" style="color: #bfffff;">{{ title }}</p>
    <v-chart class="chart" :option="option" :autoresize="true" :style="`height: ${height}px`" />
  </div>
</template>

<script setup>
import { use, graphic } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  GridComponent
} from "echarts/components";
import VChart from "vue-echarts";

const props = defineProps({
  data: [Object, Array],
  title: String,
  color: String,
  height: {
    type: Number,
    default: 235
  },
  mode: {
    type: String,
    default: '1'   // 1 实时  2 历史
  }
})
use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  GridComponent
]);
const option = reactive({
  grid: {
    top: 32,
    left: 0,
    right: 0,
    bottom: 24,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    splitLine: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 15
      },
    },
    data: [],
  },
  yAxis: {
    type: 'value',
    min: 0,
    splitNumber: 4,
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 15
      },
    },
  },
  series: [
    {
      name: "1号",
      type: "line",
      symbol: 'none',
      smooth: true,
      data: [],
      lineStyle: {
        color: "#23AF84", // 线条颜色
      },
      areaStyle: { //区域填充样式
        color: new graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#23AF84'
        },
        {
          offset: 1,
          color: 'rgba(0,0,0,0)'
        }
        ], false),
      },
    }
  ]
});
watch(() => props.data, (newVal) => {
  if (props.mode === 1) {
    if (option.series[0].data.length > 3) {
      option.xAxis.data.shift()
      option.series[0].data.shift()
    }
    option.xAxis.data.push(props.data?.name)
    option.series[0].data.push(props.data || { value: 1, name: '111' })
  } else {
    option.xAxis.data = props.data.map(item => item.name) || []
    option.series[0].data = props.data || []
  }
  option.series[0].lineStyle.color = props.color || '#23AF84'
  option.series[0].areaStyle = {
    color: new graphic.LinearGradient(0, 0, 0, 1, [{
      offset: 0,
      color: props.color || '#23AF84'
    },
    {
      offset: 1,
      color: 'rgba(0,0,0,0)'
    }
    ], false),
  }
})

</script>

<style scoped>
.chart {
  overflow: hidden;
}
</style>
