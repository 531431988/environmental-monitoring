<template>
  <div class="flex items-center justify-between px-24px relative header">
    <slot></slot>
    <svg class="absolute left-0 right-0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1920.49 91">
      <defs>
        <linearGradient id="a" x1="0.047" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#124a50" />
          <stop offset="1" stop-color="#022a2b" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="b" x1="0.953" x2="0" xlink:href="#a" />
        <linearGradient id="c" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stop-color="#002326" stop-opacity="0" />
          <stop offset="1" stop-color="#135b50" />
        </linearGradient>
      </defs>
      <g transform="translate(-10165.51 579)">
        <path d="M463.49,8H-22.978L-60,82l522.88-.047Z" transform="translate(11622.51 -571)" fill="url(#a)" />
        <path d="M0,8H486.468L523.49,82,.61,81.953Z" transform="translate(10165.51 -571)" fill="url(#b)" />
        <path d="M95,4h910L962.883,89.971,137.961,90Z" transform="translate(10575.51 -583)" fill="url(#c)" />
        <path d="M-1,0H21.5l30,60H29Z" transform="translate(10695.51 -559.878)" fill="#12494f" />
        <path d="M1,5.3H23.5L46,52.052H23.5Z" transform="translate(10731.006 -551.931)" fill="#0f5455" />
        <path d="M3,9H25.5L43,46.5H20.5Z" transform="translate(10764.01 -546.378)" fill="#126766" />
        <path d="M-1,60H21.5l30-60H29Z" transform="translate(11555.13 -499.879) rotate(180)" fill="#12494f" />
        <path d="M1,52.052H23.5L46,5.3H23.5Z" transform="translate(11519.634 -494.58) rotate(180)" fill="#0f5455" />
        <path d="M3,46.5H25.5L43,9H20.5Z" transform="translate(11486.63 -490.879) rotate(180)" fill="#126766" />
        <path d="M261,0H756l42.145,85.031,408.842.306L1206.719,91l-412.067-.038L753,6H261Z"
          transform="translate(9904.51 -579)" fill="#12494f" />
        <path d="M1206.987,0h-495L669.842,85.031,231,85.337,231.269,91l442.067-.038L714.987,6h492Z"
          transform="translate(10878.51 -579)" fill="#12494f" />
      </g>
    </svg>

    <div class="flex items-center absolute left-24 right-24 top-16">
      <div class="flex-1 flex items-center">
        <div class="text-size-20 text-success pr-24">
          <div class="mb-6">{{ week }}</div>
          <div>{{ date }}</div>
        </div>
        <span class="text-size-32 ">{{ time }}</span>
      </div>
      <div class="flex items-center justify-between w-480px">
        <div class="pl-45">
          <div class="mb-6">系统型号 LINUX</div>
          <div>软件版本 V1.01</div>
        </div>
        <div class="flex items-center">
          <div v-if="!isHome" class="w-60 h-60 rounded-100 btn flex justify-center items-center"
            @click="$router.push('/')">
            <div class="i-ant-design:home-outlined text-size-32 text-success"></div>
          </div>
          <div class="mx-32 w-60 h-60 rounded-100 btn flex justify-center items-center" @click="onSet">
            <div class="i-ant-design:setting-outlined text-size-32 text-success"></div>
          </div>
          <div class="w-64 h-64 rounded-100 btn flex justify-center items-center" @click="onLogout">
            <div class="i-mingcute:power-fill text-size-32 text-error"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute title text-size-42px" @click="$router.push('/')">
      <span v-for="(item, index) in title" :key="index">{{ item }}</span>
    </div>
  </div>
  <LoginModal v-model:open="open" />
</template>

<script setup>
import dayjs from 'dayjs'
import zh from 'dayjs/locale/zh-cn'
import anime from 'animejs'
import { onMounted, onUnmounted, ref } from 'vue'
import { exit } from '@tauri-apps/api/process';
import { Modal } from 'ant-design-vue';
import { USER_INFO } from '@/enume/cache'
import { useModalContainer } from '@/hooks/common'
dayjs.locale(zh)

const date = ref(dayjs().format('YYYY年MM日DD'))
const week = ref(dayjs().format('dddd'))
const time = ref(dayjs().format('hh:mm:ss'))
let timer = window.setInterval(() => {
  time.value = dayjs().format('hh:mm:ss')
}, 1000)
const title = ref('UPS蓄电池在线监测系统')
const route = useRoute()

const isHome = computed(() => {
  return route.path === '/'
})
const open = ref(false)
function onSet () {
  open.value = true
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
      localStorage.removeItem(USER_INFO)
      await exit(1);
    },
    onCancel () { },
  });
}
onMounted(() => {
  /* anime({
    targets: '.dot-left-top',
    translateX: 520,
    direction: 'alternate',
    autoplay: true,
    loop: true,
  })
  anime({
    targets: '.dot-right-top',
    translateX: -520,
    direction: 'alternate',
    loop: true,
  })
  anime({
    targets: '.dot-left-bottom',
    translateX: -120,
    direction: 'alternate',
    loop: true,
  })
  anime({
    targets: '.dot-right-bottom',
    translateX: 120,
    direction: 'alternate',
    loop: true,
  }) */
})

onUnmounted(() => {
  clearInterval(timer)
  timer = 0
})
</script>

<style lang="less" scoped>
.header {
  border-top: 5px solid #022B2D;
  height: 90px;
  color: #c7eafd;

  .btn {
    background: linear-gradient(to bottom, #013b4090, #23af9854);
  }

  .title {
    left: 50%;
    transform: translateX(-50%);
    font-size: 48px;
    font-weight: 700;
    top: 9px;

    span {
      background-image: linear-gradient(to bottom, #fff, #4BECD3);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: light 1.5s linear infinite;

      &:nth-child(1) {
        animation-delay: 0s;
      }

      &:nth-child(2) {
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        animation-delay: 0.4s;
      }

      &:nth-child(4) {
        animation-delay: 0.6s;
      }

      &:nth-child(5) {
        animation-delay: 0.8s;
      }

      &:nth-child(6) {
        animation-delay: 1s;
      }

      &:nth-child(7) {
        animation-delay: 1.2s;
      }

      &:nth-child(8) {
        animation-delay: 1.4s;
      }
    }
  }
}

@keyframes light {

  0%,
  75% {
    color: #B0D9D9;
    text-shadow: none;
  }

  0% {
    color: #fff;
    text-shadow: 0 0 30px rgba(255, 255, 255, .5);
  }
}
</style>
