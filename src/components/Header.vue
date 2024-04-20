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

    <div class="flex items-center justify-between absolute left-24 right-24 top-20">
      <div class="flex items-center">
        <template v-if="isHome">
          <div class="text-size-12 text-success pr-24">
            <div>{{ week }}</div>
            <div>{{ date }}</div>
          </div>
          <span class="text-size-32 web-font-dd">{{ time }}</span>
        </template>
        <template v-else>
          <ul class="nav list-none flex text-size-16 web-font-dd" v-if="$route.path !== '/device-manage/edit'">
            <li v-for="(item, index) in navList" :class="{ item: true, active: $route.path === item.to }" :key="index"
              @click="$router.push(item.to)">{{ item.text }}</li>
          </ul>

        </template>
      </div>
      <div class="flex items-center justify-between text-size-12 w-300px">
        <div>
          <div>系统型号 U2204FN41</div>
          <div>软件版本 V1.0.0</div>
        </div>
        <div class="flex items-center">
          <div v-if="route.path !== '/'" class="w-40 h-40 rounded-100 btn flex justify-center items-center"
            @click="onGoHome">
            <div class="i-ant-design:home-outlined text-size-20 text-success"></div>
          </div>
          <template v-if="isHome">
            <div class="mx-16 w-40 h-40 rounded-100 btn flex justify-center items-center" @click="onLogin">
              <div class="i-ant-design:setting-outlined text-size-20 text-success"></div>
            </div>
          </template>
          <template v-else>
            <div class="mx-16 w-40 h-40 rounded-100 btn flex justify-center items-center" @click="openEditPwd = true">
              <div class="i-ph:key-bold text-size-20 text-success"></div>
            </div>
          </template>
          <div class="w-40 h-40 rounded-100 btn flex justify-center items-center"
            @click="loginTitle = '退出登录'; openLogin = true">
            <div class="i-mingcute:power-fill text-size-20 text-error"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute title text-size-38px web-font-dd" @click="onGoHome">
      <span v-for="(item, index) in title" :key="index">{{ item }}</span>
    </div>
  </div>
  <LoginModal v-model:open="openLogin" :title="loginTitle" />
  <EditPwdModal v-model:open="openEditPwd" />
</template>

<script setup>
import dayjs from 'dayjs'
import zh from 'dayjs/locale/zh-cn'
import anime from 'animejs'
import { onMounted, onUnmounted, ref } from 'vue'
import { USER_INFO } from '@/enume/cache'
dayjs.locale(zh)

const date = ref(dayjs().format('YYYY年MM日DD'))
const week = ref(dayjs().format('dddd'))
const time = ref(dayjs().format('HH:mm:ss'))
let timer = window.setInterval(() => {
  time.value = dayjs().format('HH:mm:ss')
}, 1000)
const title = ref('蓄电池火灾防护系统')
const loginTitle = ref('退出登录')
const router = useRouter()
const route = useRoute()

const isHome = computed(() => {
  return ['/', '/home/detail'].includes(route.path)
})
const openLogin = ref(false)
const openEditPwd = ref(false)

const navList = ref([{
  to: '/device-manage',
  text: '设备管理'
}, {
  to: '/warning-config',
  text: '报警配置'
}])

function onGoHome () {
  sessionStorage.removeItem(USER_INFO)
  router.push('/')
}
function onLogin () {
  loginTitle.value = '蓄电池火灾防护系统'
  openLogin.value = true
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
  border-top: 5px solid #022b2d;
  height: 70px;
  color: #c7eafd;

  .btn {
    background: linear-gradient(to bottom, #013b4090, #23af9854);
  }

  .nav {
    .item {
      font-size: 20px;
      border-bottom: 3px solid transparent;
      padding: 8px 0;
      cursor: pointer;
      margin-right: 24px;

      &.active {
        color: #4becd3;
        border-color: #4becd3;
      }
    }
  }

  .title {
    left: 50%;
    transform: translateX(-50%);
    font-weight: 700;
    top: 10px;

    span {
      background-image: linear-gradient(to bottom, #fff, #4becd3);
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
    color: #b0d9d9;
    text-shadow: none;
  }

  0% {
    color: #fff;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
  }
}
</style>
