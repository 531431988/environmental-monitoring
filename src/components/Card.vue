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
    <view class="absolute bubble-1"></view>
    <view class="absolute bubble-2"></view>
    <view class="absolute bubble-3"></view>
  </div>
</template>

<script>
import CountUp from 'vue-countup-v3'
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  setup () {

  }
}

</script>

<style lang="less" scoped>
.card {
  position: relative;
  border-radius: 10px;
  margin: 0 8%;
  height: 100%;
  overflow: hidden;

  .bubble-1,
  .bubble-2,
  .bubble-3 {
    border-radius: 10000px;
    background: rgba(255, 255, 255, .5);
    opacity: 0.18;
  }

  .bubble-1 {
    top: -50px;
    left: -100px;
    width: 200px;
    height: 200px;
    animation: down 8s ease-in-out infinite;
  }

  .bubble-2 {
    top: -80px;
    right: -80px;
    width: 150px;
    height: 150px;
    animation: down 10s ease-in-out infinite;
    animation-delay: -3s;
  }

  .bubble-3 {
    bottom: -100px;
    right: -200px;
    width: 400px;
    height: 400px;
    animation: down 12s ease-in-out infinite;
    animation-delay: -10s;

  }
}

@keyframes down {

  0%,
  100% {
    transform: translateY(-20px);
  }

  50% {
    transform: translateY(20px);
  }
}
</style>