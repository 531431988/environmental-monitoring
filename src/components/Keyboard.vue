<template>
  <a-modal placement="bottom" :open="open" :maskClosable="false" :closable="false" style="bottom: -40%;top:initial">
    <div class="p-24">
      <div class="m-auto text-center">
        <a-input v-model:value="number" readonly class="mb-24 w-400 m-auto h-64" placeholder="请输入" style="font-size: 32px;" />
      </div>
        <div class="flex flex-wrap justify-between">
          <div v-for="item in list" :key="item" class="m-12">
            <a-button type="primary" class="h-80 w-80" @click="onClick(item)">{{ item }}</a-button>
          </div>
          <div class="m-12">
            <a-button type="primary" class="w-184 h-80" @click="onDel">
              <span class="i-ant-design:swap-left-outlined text-size-20"></span>
            </a-button>
          </div>
        </div>
    </div>
    <template #footer>
      <div class="text-center">
        <a-button class="mx-8 h-64 w-120" @click="$emit('update:open', false)">取消</a-button>
        <a-button type="primary" class="h-64 w-120" @click="onOk">确定</a-button>
      </div>
    </template>

  </a-modal>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'Keyboard'
})
withDefaults(defineProps<{
  open: boolean
}>(), {
  open: false
})
const emits = defineEmits(['update:open', 'ok'])
const number = ref('')
const list = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
function onClick(val) {
  number.value += val
}
function onDel() {
  number.value = number.value.slice(0, -1)
}
function onOk() {
  emits('update:open', false)
  emits('ok', number.value)
}
</script>

<style lang="less" scoped></style>
