<template>
  <div class="device-card p-16" :class="className">
    <div class="flex justify-between">
      <div class="flex items-center">
        <template v-if="data.currentStat === 'NORMAL'">
          <div class="w-10 h-10 rounded-100 bg-white mr-8"></div>
          <span class="text-size-18 text-white">在线</span>
        </template>
       <!--  <template v-if="['FIRST_LEVEL', 'SECOND_LEVEL'].includes(data.currentStat)">
          <div class="w-10 h-10 rounded-100 bg-error mr-8"></div>
          <span class="text-size-18 text-error" v-if="data.currentStat === 'FIRST_LEVEL'">一级告警</span>
          <span class="text-size-18 text-error" v-if="data.currentStat === 'SECOND_LEVEL'">二级告警</span>
        </template> -->
        <template v-if="['OFFLINE', null].includes(data.currentStat)">
          <div class="w-10 h-10 rounded-100 bg-warning mr-8"></div>
          <span class="text-size-18 text-warning">离线</span>
        </template>
      </div>
      <span class="text-size-24 text-white" v-if="data.type == 1">温度</span>
      <span class="text-size-24 text-white" v-if="data.type == 2">电压</span>
      <span class="text-size-24 text-white" v-if="data.type == 3">继电器</span>
      <span class="text-size-24 text-white" v-if="data.type == 4">通信设备</span>
    </div>
    <h1 class="text-size-24 text-white my-12">{{ data.name }}机柜{{ data.shelf }}层{{ data.slot }}号</h1>
    <div class="flex items-center justify-between text-size-14">
      <div>地址/站号：{{ data.code }}</div>
      <div>波特率：{{ data.baudRate }}</div>
    </div>
    <div class="flex items-center justify-between text-size-14 mt-8">
      <div>校验：{{ data.parity }}</div>
      <div>数据位：{{ data.databits }}</div>
      <div>停止位：{{ data.stopbits }}</div>
    </div>
    <div class="line"></div>
    <transition>
      <div class="operate flex justify-center items-center" v-if="data.show">
        <div class="i-ant-design:form-outlined text-size-52 text-success" @click.stop="$emit('edit')"></div>
        <div class="i-ant-design:delete-outlined  text-size-52 ml-32 text-error" @click.stop="$emit('del')"></div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object
})
defineEmits(['edit', 'del'])
const className = computed(() => {
  // 0连接失败 1正常 2告警
  return {
    c: props.data.type === 1,
    v: props.data.type === 2,
    j: props.data.type === 3,
    t: props.data.type === 4,
    // warn: ['FIRST_LEVEL', 'SECOND_LEVEL'].includes(props.data.currentStat),
    error: [1,2].includes(props.data.type) && ['OFFLINE', null].includes(props.data.currentStat),
  }
})
</script>

<style lang="less" scoped>
.device-card {
  position: relative;
  color: #dcdcdc;
  border-radius: 16px;
  overflow: hidden;
  &.c {
    background: #b35400;
    //animation: warnBg 1s linear infinite;
  }

  &.v {
    background: #4577af;
  }

  &.j {
    background: #2c2c2c;
  }

  &.t {
    background: #51205a;
  }

  &.error {
    background: #6e6e6e;
  }

  :deep(.ant-badge-status-text) {
    font-size: 20px;
    color: #fff;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
  }

  &::after {
    font-family: ddjbt;
    top: 50px;
    right: 40px;
    font-size: 42px;
    opacity: 0.15;
  }

  /*   &.c::after {
    content: '°C';
  }

  &.v::after {
    content: 'V';
  } */

  &::before {
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    top: -50px;
    left: -50px;
  }

  .line {

    &::after,
    &::before {
      content: '';
      position: absolute;
      top: 0;
      transform: rotate(45deg) scaleY(2);
    }

    &::before {
      background: rgba(255, 255, 255, 0.03);
      width: 64px;
      right: 92px;
      height: 300px;
    }

    &::after {
      width: 64px;
      right: -24px;
      background: rgba(255, 255, 255, 0.05);
      height: 300px;
    }
  }

  .operate {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
  }
}

@keyframes warnBg {
  0% {
    background: rgba(244, 69, 70, 0.1);
  }

  50% {
    background: rgba(244, 69, 70, 0.5);
  }

  100% {
    background: rgba(244, 69, 70, 0.2);
  }
}
</style>
