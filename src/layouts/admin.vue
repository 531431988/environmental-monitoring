<template>
  <a-layout class="!bg-transparent h-full relative z-50">
    <a-layout-header class="!px-16 flex items-center" style="background: rgba(255,255,255,.05);">
      <ul class="nav flex-1">
        <li v-for="item in navs" :key="item.key" class="text-size-30" :class="{ active: item.key === active }" @click="onclick(item)">
          {{ item.title }}
        </li>
      </ul>
      <a-button class="mx-16" type="primary" size="large" @click="onHome">
        <template #icon>
          <span class="i-ant-design:home-outlined text-size-20"></span>
        </template>
      </a-button>
      <a-button type="primary" size="large" @click="onLogout">
        <template #icon>
          <span class="i-ant-design:logout-outlined text-size-20"></span>
        </template>
      </a-button>
    </a-layout-header>
    <a-layout-content>
      <RouterView />
    </a-layout-content>
  </a-layout>
  <Bg />
</template>
<script setup>
import { exit } from '@tauri-apps/api/process';
import { Modal } from 'ant-design-vue';
import { useModalContainer } from '@/hooks/common'
const active = ref('1')
const navs = reactive([{
  key: '1',
  url: '/data-gather',
  title: '数据采集',
},
{
  key: '2',
  url: '/warning-config',
  title: '报警配置',
}
])
const router = useRouter()
function onclick (item) {
  active.value = item.key
  router.push(item.url)
}
function onHome () {
  router.push('/')
}
function onLogout () {
  Modal.confirm({
    centered: true,
    title: '确认退出',
    content: '确认要退出系统吗？您可以再次运行本程序来启用监控',
    okText: '确定',
    cancelText: '取消',
    getContainer: useModalContainer,
    async onOk () {
      await exit(1);
    },
    onCancel () { },
  });
}
</script>
<style lang="less" scoped>
.nav {
  display: flex;
  list-style: none;
  font-family: 'ddjbt';

  li {
    margin-right: 24px;
    color: #dcdcdc;
    cursor: pointer;
  }

  .active {
    position: relative;
    color: #23af98;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      height: 4px;
      width: 50%;
      background: #23af98;
      border-radius: 100px;
    }
  }
}
</style>
