<template>
  <a-layout class="!bg-transparent h-full relative z-50">
    <a-layout-header class="!px-16 flex items-center" style="background: rgba(255,255,255,.05);">
      <ul class="nav flex-1">
        <li v-for="item in navs" :key="item.key" class="text-size-30" :class="{ active: item.key === active }" @click="onclick(item)">
          {{ item.title }}
        </li>
      </ul>
        <a-button type="primary" size="large" @click="onHome">
          <span class="i-streamline:return-2-solid inline-block align-middle mr-8"></span>
          <span>返回首页</span>
        </a-button>
    </a-layout-header>
    <a-layout-content>
      <RouterView />
    </a-layout-content>
  </a-layout>
  <Bg />
</template>
<script setup lang="ts">
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
function onclick(item: any) {
  active.value = item.key
  router.push(item.url)
}
function onHome() {
  router.push('/')
}
</script>
<style lang="less" scoped>
.nav {
  display: flex;
  list-style: none;
  font-family: 'ddjbt';
  li{
    margin-right: 24px;
    color: #DCDCDC;
    cursor: pointer;
  }
  .active{
    position: relative;
    color: #23AF98;
    &::after{
      content: "";
      position: absolute;
      left:50%;
      transform: translateX(-50%);
      bottom: 0;
      height: 4px;
      width: 50%;
      background: #23AF98;
      border-radius: 100px;
    }
  }
}
</style>
