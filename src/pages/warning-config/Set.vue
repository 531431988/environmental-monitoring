<template>
  <a-modal title="处置指令设置" :open="open" centered :maskClosable="false" :closable="false">
    <template #footer>
      <a-button type="primary" class="h-64 rounded-100 text-size-24">确定</a-button>
      <a-button type="link" class="h-64  text-size-24" @click="$emit('update:open', false)">取消</a-button>
    </template>
  </a-modal>
</template>

<script setup>
defineProps({
  open: Boolean
})
defineEmits(['update:open'])

const router = useRouter()
const formState = reactive({
  password: ''
});



</script>

<style lang="less" scoped></style>
