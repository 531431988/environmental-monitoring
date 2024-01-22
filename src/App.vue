<template>
  <a-config-provider :theme="{
    token: {
      colorPrimary: '#000000',
    },
  }">
    <Bg />
    <a-layout class="h-full">
      <a-layout-header class="!px-24 relative z-1">
        <a-flex justify="space-between" align="center" class="h-64">
          <h1 class="text-white title">环境数据监测系统</h1>
          <div class="text-white">
            <a-flex align="center">
              <div class="text-size-32 font-bold">
                {{ date.time }}
              </div>
              <div class="text-right pl-24">
                <div class="mb-8">{{ date.day }}</div>
                <div>{{ date.week }}</div>
              </div>
            </a-flex>
          </div>
        </a-flex>
      </a-layout-header>
      <a-layout-content>
        <a-row class="h-full px-10% py-100">
          <a-col :span="8" v-for="(item, index) in list" :key="index" class="flex">
            <Card :data="item" :class="{
              'card-0': index === 0,
              'card-1': index === 1,
              'card-2': index === 2,
              warning: item.number > 60 && index < 2
            }" @click="onClick(item)">
              <img width="40%" class="mt-2% mx-auto" src="@/assets/icon-temp.svg" v-if="index == 0" />
              <img width="40%" class="mt-2% mx-auto" src="@/assets/icon-pressure.svg" v-if="index == 1" />
              <img width="40%" class="mt-2% mx-auto" src="@/assets/icon-alarm.svg" v-if="index == 2" />
            </Card>
          </a-col>
        </a-row>
      </a-layout-content>
    </a-layout>
    <a-modal centered v-model:open="open" title="告警信息" :footer="null">
      <p>我是告警信息</p>
    </a-modal>
  </a-config-provider>
</template>
<script setup>
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { ref, reactive, onUnmounted } from 'vue'
import Card from '@/components/Card.vue'
import Bg from '@/components/Bg.vue'
dayjs.locale('zh-cn')
function createList () {
  return [{
    title: '温度',
    number: parseInt(Math.random() * 100),
    unit: '°C',
    icon: 'icon-temp',
    style: [{
      top: '-5%',
      left: '-5%',
      width: '60px',
      height: '60px',
      'animation-delay': '.1s',
      opacity: '0.3',
    }, {
      top: '60%',
      left: '-20%',
      width: '80px',
      height: '80px',
      'animation-delay': '.2s',
      opacity: '0.3',
    }, {
      top: '10%',
      left: '60%',
      'animation-delay': '.3s',
      opacity: '0.6',
    }, {
      top: '70%',
      left: '50%',
      width: '90px',
      height: '90px',
      'animation-delay': '.4s',
      opacity: '0.4',
    }]
  }, {
    title: '压力',
    number: parseInt(Math.random() * 100),
    unit: 'V',
    icon: 'icon-pressure',
    style: [{
      top: '15%',
      left: '-10%',
      'animation-delay': '.3s',
      opacity: '0.6',
    }, {
      top: '60%',
      left: '-20%',
      width: '120px',
      height: '120px',
      'animation-delay': '.2s',
      opacity: '0.3',
    }, {
      top: '5%',
      right: '-10%',
      width: '150px',
      height: '150px',
      'animation-delay': '.1s',
      opacity: '0.3',
    }, {
      top: '70%',
      left: '60%',
      width: '90px',
      height: '90px',
      'animation-delay': '.4s',
      opacity: '0.4',
    }]

  }, {
    title: '告警',
    number: parseInt(Math.random() * 100),
    unit: '条',
    icon: 'icon-alarm',
    style: [{
      top: '-5%',
      left: '-5%',
      width: '90px',
      height: '90px',
      'animation-delay': '.1s',
      opacity: '0.3',
    }, {
      top: '60%',
      left: '-20%',
      'animation-delay': '.2s',
      opacity: '0.3',
    }, {
      top: '10%',
      left: '60%',
      width: '80px',
      height: '80px',
      'animation-delay': '.3s',
      opacity: '0.6',
    }, {
      top: '70%',
      left: '50%',
      width: '120px',
      height: '120px',
      'animation-delay': '.4s',
      opacity: '0.4',
    }]

  }]
}

const date = reactive({
  day: dayjs().format('YYYY年MM月DD日'),
  week: dayjs().format('dddd'),
  time: dayjs().format('HH:mm:ss'),
})
const list = ref(createList())
const open = ref(false)
let timer = null
let timer2 = null


timer = setInterval(() => {
  date.time = dayjs().format('HH:mm:ss')
}, 1000)

timer2 = setInterval(() => {
  list.value = createList()
}, 5000)
function onClick (item) {
  console.log(item)
  open.value = true
}

onUnmounted(() => {
  clearInterval(timer)
  clearInterval(timer2)
  timer = null
  timer2 = null
})
</script>

<style lang="less" scoped>
.ant-layout {
  background: transparent;

  .title {
    background: #fff -webkit-linear-gradient(left, #fff, #e1e1e1 50%, #e1e1e1 90%, #fff) no-repeat 0 0;
    background-size: 20% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: slideShine 1s linear infinite;
  }

  .ant-layout-header {
    line-height: 1;
    background: rgba(255, 255, 255, .1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    border-radius: 10px;
  }

  .a-layout-content {
    background: transparent;
  }
}

.card-0 {
  background-image: linear-gradient(to bottom, #46B9FE, #1572FE);

}

.card-1 {
  background-image: linear-gradient(to bottom, #1DD675, #02A3B0);
}

.card-2 {
  background-image: linear-gradient(to bottom, #FF9B5B, #FF001F);
}

.warning {
  background-image: linear-gradient(to bottom, #ff0000, #bd0016);
}

@keyframes slideShine {

  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 100% 100%;
  }

}
</style>
