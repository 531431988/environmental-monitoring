<template>
  <div class="card text-center flex-1 text-white flex flex-col justify-between py-10%">
    <div>
      <h3 class="text-size-24 !my-0">{{ data.title }}</h3>
      <count-up :end-val="data.number" class="text-size-56 font-bold">
        <template #suffix>
          <span class="text-size-20 ml-6">{{ data.unit }}</span>
        </template>
      </count-up>
    </div>
    <slot></slot>
    <span :class="`absolute bubble-${index + 1}`" :style="item" :key="index" v-for="(item, index) in data.style"></span>
    <audio controls="controls" hidden src="./music.mp3" ref="audio" class="hidden"></audio>
  </div>
</template>

<script setup>
import CountUp from 'vue-countup-v3'
import { ref, watch, nextTick, computed } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
const audio = ref(null)
watch(() => props.data, (val) => {
  if (val.number > 60) {
    nextTick(() => {
      audio.value.play()
      audio.value.loop = true
    })
  } else {
    audio.value.pause()
  }
})


</script>

<style lang="less" scoped>
.card {
  position: relative;
  border-radius: 10px;
  margin: 0 8%;
  height: 100%;
  overflow: hidden;

  &.warning {
    transition: transform 0.3s ease;
    animation: shadowAnimation 1s infinite ease-in-out;
  }

  .bubble-1,
  .bubble-2,
  .bubble-3,
  .bubble-4 {
    width: 100px;
    height: 100px;
    position: absolute;
    background: linear-gradient(0deg, transparent, rgba(255, 255, 255, 0.35));
    border-radius: 100%;
    opacity: 0.5;
    animation: keyframes-rotate-blubs 4s infinite linear;
  }

  .bubble-1 {
    top: -5%;
    left: -5%;
    width: 60px;
    height: 60px;
    animation-delay: .1s;
    opacity: 0.3;
  }

  .bubble-2 {
    top: 60%;
    left: -20%;
    width: 80px;
    height: 80px;
    animation-delay: .2s;
    opacity: 0.3;
  }

  .bubble-3 {
    top: 10%;
    left: 60%;
    animation-delay: .3s;
    opacity: 0.6;
  }

  .bubble-4 {
    top: 70%;
    left: 50%;
    width: 90px;
    height: 90px;
    animation-delay: .4s;
    opacity: 0.4;
  }
}

@keyframes keyframes-rotate-blubs {
  0% {
    transform: translate(10px) rotate(360deg);
  }

  50% {
    transform: translate(-5px, 10px) rotate(180deg);
  }

  100% {
    transform: translate(10px) rotate(0deg);
  }
}

@keyframes shadowAnimation {
  0% {
    box-shadow: 0 0 30px #ca2121, 0 0 30px #ca2121;
  }

  50% {
    box-shadow: 0 0 0 #bd3f3f, 0 0 0 #b93131;
  }

  100% {
    box-shadow: 0 0 30px #ca2727, 0 0 30px #bd3f3f;
  }
}
</style>