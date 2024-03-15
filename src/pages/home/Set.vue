<template>
  <div class="flex flex-col"  style="height: 35vh">
    <div class="flex-1">&nbsp;</div>
    <div>
      <div class="flex justify-end">
        <div class="text-center" @click="onSet">
          <div class="i-ant-design:setting-outlined text-size-48 text-color-success"></div>
          <div class="text-cool-gray mt-8">设置</div>
        </div>
      </div>
      <!-- <div class="flex items-center justify-end text-center">
        <div @click="onLogout">
          <div class="i-wpf:shutdown m-auto text-size-40 text-color-error"></div>
          <div class="text-cool-gray mt-13">退出</div>
        </div>
      </div> -->
      <div class="mt-16 text-right text-size-24 web-font-dd" style="color: #829F9F">
        <div class="mb-8">{{ date.time }}</div>
        <div>{{ date.day }} {{ date.week }}</div>
      </div>
    </div>
  </div>
  <LoginModal v-model:open="open" />
</template>
<script setup lang="ts">
import { exit } from '@tauri-apps/api/process';
import { Modal } from 'ant-design-vue';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')
const date = reactive({
  day: dayjs().format('YYYY年MM月DD日'),
  week: dayjs().format('dddd'),
  time: dayjs().format('HH:mm:ss'),
})
let timer = 0
timer = setInterval(() => {
  date.time = dayjs().format('HH:mm:ss')
}, 1000)

const open = ref(false)

function onSet() {
  open.value = true
}
function onLogout() {
  Modal.confirm({
    centered: true,
    title: '确认退出',
    content: '确认要退出系统吗？您可以再次运行本程序来启用监控',
    okText: '确定',
    cancelText: '取消',
    async onOk() {
      await exit(1);
    },
    onCancel() { },
  });
}
onUnmounted(() => {
  clearInterval(timer)
  timer = 0
})
</script>

<route lang="yaml">
  meta:
    layout: default
  </route>

<style lang="less" scoped></style>
