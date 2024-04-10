<template>
  <a-drawer placement="bottom" :open="open" :maskClosable="false" height="300" width="40%" rootClassName="keyboard"
    :getContainer="useModalContainer" @close="$emit('update:open', false); number = ''"
    :style="{ background: 'rgba(4, 59, 70, 0.9)' }">
    <div class="keyboard w-50% m-x-auto">
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
        <a-button type="primary" class="m-8 w-80 h-80" @click="onDel">
          <span class="i-ant-design:swap-left-outlined text-size-28"></span>
        </a-button>
        <a-button type="primary" danger class="m-8 w-80 h-80" @click="number = ''; $emit('ok', '')">
          <span class="i-ant-design:delete-outlined text-size-24"></span>
        </a-button>

      </div>
    </div>
    <!-- <template #footer>
      <div class="text-center">
        <a-button class="w-200 text-size-24 rounded-100" @click="number = ''; $emit('update:open', false)">取消</a-button>
        <a-button type="primary" class="w-200 text-size-24 rounded-100 ml-24" @click="onOk">确定</a-button>
      </div>
    </template> -->

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
  }
})
const emits = defineEmits(['update:open', 'ok'])
const number = ref('')
const list = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
function onClick (val) {
  if (number.value.length < props.maxLength) {
    number.value += val
  }
  emits('ok', number.value)
}
function onDel () {
  number.value = number.value.slice(0, -1)
  emits('ok', number.value)
}
/* function onOk () {
  emits('update:open', false)
  emits('ok', number.value)
  number.value = ''
} */
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
