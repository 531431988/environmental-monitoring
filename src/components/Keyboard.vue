<template>
  <a-drawer placement="bottom" :open="open" :closable="false" :maskClosable="false" height="360" width="40%"
    rootClassName="keyboard" :getContainer="useModalContainer" :style="{ background: 'rgba(4, 59, 70, 0.9)' }">
    <div class="keyboard w-400 m-x-auto">
      <div class="flex items-center mb-16">
        <!-- <div class="m-auto text-center readonly-input">
          <a-input type="text" v-model:value="number" :maxlength="maxLength" readonly class="text-size-32"
            placeholder="请输入" />
        </div> -->
      </div>
      <div class="flex flex-wrap justify-between">
        <div v-for="item in list" :key="item" class="m-8">
          <a-button class="h-80 w-80 text-size-28 " @click="onClick(item)">{{ item }}</a-button>
        </div>
        <a-button type="primary" danger class="m-8 w-80 h-80" @click="onDel">
          <span class="i-ant-design:swap-left-outlined text-size-28"></span>
        </a-button>
        <!-- <a-button type="primary" danger class="m-8 w-80 h-80" @click="number = ''; $emit('ok', '')">
          <span class="i-ant-design:delete-outlined text-size-24"></span>
        </a-button> -->
        <a-button type="primary" class="m-8 w-80 h-80 text-size-24" @click="onOk">完成</a-button>
      </div>
    </div>

  </a-drawer>
</template>

<script setup>
import { useModalContainer } from '@/hooks/common'
defineOptions({
  name: 'Keyboard'
})
/* withDefaults(defineProps < {
  open: boolean
} > (), {
  open: false
}) */
const props = defineProps({
  open: Boolean,
  maxLength: {
    type: Number,
    default: 5
  },
  value: {
    type: String,
    default: ''
  }
})
const emits = defineEmits(['update:open', 'update:value', 'ok'])
const list = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
function onClick (val) {
  if (String(props.value).length < props.maxLength) emits('update:value', props.value += val)

}
function onDel () {
  emits('update:value', props.value.slice(0, -1))
}
function onOk () {
  emits('update:open', false)
  emits('update:value', props.value)
  emits('ok', props.value)
}
</script>

<style lang="less">
.keyboard {
  .ant-drawer-close {
    position: absolute;
    right: 0;
    top: 16px;
    color: #999;
  }
}
</style>
