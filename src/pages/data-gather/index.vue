<template>
  <div class="h-full flex flex-col p-32" @click="onHide">
    <div class="list flex-1">
      <a-row :gutter="[16, 16]">
        <a-col :span="6" v-for="(item, index) in data" :key="index">
          <div @click.stop="onShow(item)">
            <DeviceCard :data="item" />
          </div>
        </a-col>
      </a-row>
    </div>
    <div>
      <div class="rounded-100 h-64 w-64 bg-success m-auto i-ant-design:plus-circle-filled"></div>
    </div>
  </div>
</template>
<route lang="yaml">
  meta:
    layout: admin
  </route>

<script lang="ts" setup>
import DeviceCard from './components/DeviceCard.vue';
const data = reactive([{
  type: '温度',
  status: '正常',
  name: '1机柜1号UPS',
  port: '121313',
  baud: '9300',
  check: '奇',
  data: 8,
  stop: 1,
}, {
  type: '温度',
  status: '正常',
  name: '1机柜1号UPS',
  port: '121313',
  baud: '9300',
  check: '奇',
  data: 8,
  stop: 1
}, {
  type: '温度',
  status: '告警',
  name: '1机柜1号UPS',
  port: '121313',
  baud: '9300',
  check: '奇',
  data: 8,
  stop: 1
}, {
  type: '温度',
  status: '正常',
  name: '1机柜1号UPS',
  port: '121313',
  baud: '9300',
  check: '奇',
  data: 8,
  stop: 1
}, {
  type: '温度',
  status: '正常',
  name: '1机柜1号UPS',
  port: '121313',
  baud: '9300',
  check: '奇',
  data: 8,
  stop: 1
}, {
  type: '温度',
  status: '正常',
  name: '1机柜1号UPS',
  port: '121313',
  baud: '9300',
  check: '奇',
  data: 8,
  stop: 1
}, {
  type: '电压',
  status: '连接失败',
  name: '1机柜1号UPS',
  port: '121313',
  baud: '9300',
  check: '奇',
  data: 8,
  stop: 1
}, {
  type: '电压',
  status: '正常',
  name: '1机柜1号UPS',
  port: '121313',
  baud: '9300',
  check: '奇',
  data: 8,
  stop: 1
}])
function onShow(item) {
  item.show = !item.show
}
function onHide() {
  data.forEach(item => {
    item.show = false
  });
}
</script>

<style lang="less" scoped></style>
