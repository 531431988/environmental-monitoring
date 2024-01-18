<template>
  <div v-show="show" class="absolute top-0 right-0 bottom-0 left-0 z-10  warning">
    <audio controls="controls" hidden src="./music.mp3" ref="audio" class="hidden"></audio>
  </div>
</template>

<script>
import { ref, onUnmounted, onMounted } from 'vue'
import { message } from 'ant-design-vue'
export default {
  setup () {
    const list = ['温度过高', '电压过高']
    const show = ref(false)
    const audio = ref(null)
    let timer = 0
    onMounted(() => {
      message.config({
        getContainer: () => document.body.querySelector('#warning'),
        top: '100px',
      })
      timer = window.setInterval(() => {
        message.destroy()
        show.value = true
        audio.value.play()
        audio.value.loop = true
        message.error(list[Math.floor(Math.random() * list.length)], 20, () => {
          audio.value.pause()
          show.value = false
        })
      }, 1000 * 60)
    })

    onUnmounted(() => {
      message.destroy()
      clearInterval(timer)
      timer = 0
    })
    return {
      list,
      show,
      audio
    }
  }
}
</script>

<style lang="less" scoped>
.warning {
  pointer-events: none;
  box-shadow: inset 0 0 30px 30px red;
  animation: opacity 1s ease-in-out infinite;
}

@keyframes opacity {

  0%,
  100% {
    opacity: 0.35;
  }

  50% {
    opacity: 0.1;
  }
}
</style>
