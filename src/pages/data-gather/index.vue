<template>
  <div class="h-full flex flex-col p-32" @click="onHide">
    <div class="list flex-1">
      <a-row :gutter="[16, 16]">
        <a-col :span="6" v-for="(item, index) in data" :key="index">
          <div @click.stop="onShow(item)">
            <DeviceCard :data="item" @edit="onEdit(item)" @del="onDel(index)" />
          </div>
        </a-col>
      </a-row>
    </div>
    <div>
      <div class="rounded-100 h-64 w-64 bg-success m-auto i-ant-design:plus-circle-filled" @click="onEdit({})"></div>
    </div>
  </div>
  <Edit v-model:open="open" :data="row" />
</template>
<route lang="yaml">
  meta:
    layout: admin
  </route>

<script lang="ts" setup>
import DeviceCard from './components/DeviceCard.vue';
import Edit from './components/Edit.vue';
import { Modal } from 'ant-design-vue';
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
const open = ref(false)
const row = ref({})
function onShow(item) {
  onHide()
  item.show = !item.show
}
function onHide() {
  data.forEach(item => {
    item.show = false
  });
}

function onEdit(item) {
  open.value = true
  row.value = item
}

function onDel(index) {
  Modal.confirm({
    centered: true,
    title: '提示',
    content: '确定要删除此条吗？',
    okText: '确定',
    cancelText: '取消',
    onOk() {
      data.splice(index, 1)
    },
    onCancel() { },
  });
}
</script>

<style lang="less" scoped></style>
