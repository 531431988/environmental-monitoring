<template>
  <div style="background: rgba(255, 255, 255, 0.1);">
    <p class="web-font-dd text-center my-0 pt-12 text-size-18" style="color: #bfffff;">{{ title }}{{ `-${type == 1 ?
      '温度' :
      '电压'}` }}</p>
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
    default: 112
  },
  mode: {
    type: String,
    default: '1'   // 1 实时  2 历史
  },
  type: {
    type: [Number, String],
    default: 1
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
    top: 24,
    left: '5%',
    right: '5%',
    bottom: 8,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: ['10%', '10%'],
    splitLine: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 14
      },
    },
    data: [],
  },
  yAxis: {
    type: 'value',
    scale: false,
    splitNumber: 2,
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 14
      },
    },
  },
  series: [
    {
      name: "1号",
      type: "line",
      symbol: 'circle',
      smooth: true,
      data: [],
      label: {
        show: true,
        fontSize: 14,
        color: '#fff',
        textBorderColor: 'transparent'
      },
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
  if (props.mode == 1) {
    if (option.series[0].data.length > 2) {
      option.xAxis.data.shift()
      option.series[0].data.shift()
    }
    option.xAxis.data.push(props.data?.name)
    option.series[0].data.push(props.data)
  } else {
    option.xAxis.data = props.data.map(item => item.name) || []
    option.series[0].data = props.data || []
  }
  option.color = [props.color || '#23AF84'],
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
}, {
  deep: true,
  immediate: true
})

</script>

<style scoped>
.chart {
  overflow: hidden;
}
</style>
