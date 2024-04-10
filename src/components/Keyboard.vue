<template>
  <a-modal placement="bottom" :open="open" :maskClosable="false" :closable="false" centered
    :getContainer="useModalContainer">
    <div class="p-24 keyboard">
      <div class="m-auto text-center readonly">
        <a-input v-model:value="number" :maxlength="maxLength" readonly class="mb-24  h-54 text-size-18 w-400 m-auto"
          placeholder="请输入" />
      </div>
      <div class="flex flex-wrap justify-between">
        <div v-for="item in list" :key="item" class="m-8">
          <a-button type="primary" class="h-80 w-80 text-size-20" @click="onClick(item)">{{ item }}</a-button>
        </div>
        <div class="m-8">
          <a-button type="primary" class="w-80 h-80" @click="onDel">
            <span class="i-ant-design:swap-left-outlined text-size-28"></span>
          </a-button>
        </div>
        <div class="m-8">
          <a-button type="primary" danger class="w-80 h-80" @click="number = ''">
            <span class="i-ant-design:delete-outlined text-size-24"></span>
          </a-button>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="text-center">
        <a-button class="mx-8 w-120 h-54 text-size-18" @click="number = ''; $emit('update:open', false)">取消</a-button>
        <a-button type="primary" class="w-120 h-54 text-size-18" @click="onOk">确定</a-button>
      </div>
    </template>

  </a-modal>
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
  }
})
const emits = defineEmits(['update:open', 'ok'])
const number = ref('')
const list = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
function onClick (val) {
  if (number.value.length < props.maxLength) {
    number.value += val
  }
}
function onDel () {
  number.value = number.value.slice(0, -1)
}
function onOk () {
  emits('update:open', false)
  emits('ok', number.value)
  number.value = ''
}
</script>

<style lang="less" scoped>
.keyboard {
  :deep(.readonly) {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%
    }
  }
}
</style>
