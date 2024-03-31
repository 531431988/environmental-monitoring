<template>
  <div class="h-full flex flex-col p-48" @click="onHide">
    <div class="list flex-1">
      <a-row :gutter="[16, 16]">
        <a-col :span="6" v-for="(item, index) in deviceList" :key="index">
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
</template>
<route lang="json">{
  "name": "device-manage",
  "meta": {
    "requiresAuth": true
  }
}</route>
<script setup>
import DeviceCard from './components/DeviceCard.vue'
import { Modal } from 'ant-design-vue'
import { useModalContainer } from '@/hooks/common'
import * as api from '@/api/device-manage'
const deviceList = ref([])
const router = useRouter()
async function loadData () {
  try {
    const { data } = await api.deviceList()
    deviceList.value = data
  } catch (error) {

  }
}
loadData()
function onShow (item) {
  onHide()
  item.show = !item.show
}
function onHide () {
  deviceList.value.forEach((item) => {
    item.show = false
  })
}

function onEdit (item) {
  router.push('/device-manage/edit')
}

function onDel (index) {
  Modal.confirm({
    centered: true,
    title: '提示',
    content: '确定要删除此条吗？',
    okText: '确定',
    cancelText: '取消',
    getContainer: useModalContainer,
    onOk () {
      data.splice(index, 1)
    },
    onCancel () { },
  })
}
</script>

<style lang="less" scoped></style>
