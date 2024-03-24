<template>
  <a-modal :getContainer="useModalContainer" :open="open" centered :maskClosable="false" :closable="false"
    :footer="null">
    <div
      class="absolute -top-60 left-50% -translate-x-50% w-100 h-100 rounded-100 bg-white flex justify-center items-center shadow-lg shadow-gray-300">
      <div class="i-ant-design:user-outlined text-size-48 text-gray-500"></div>
    </div>
    <h1 class="web-font-dd text-center mt-48 mb-32" style="color:#23AF98">UPS监测控制系统</h1>
    <a-form :model="formState" autocomplete="off" class="px-24" @finish="onFinish">
      <a-form-item name="password" :rules="[{ required: true, message: '请输入管理密码' }]">
        <a-input-password v-model:value="formState.password" class="h-64 rounded-100 px-24" placeholder="请输入管理密码" />
      </a-form-item>
      <div class="flex mt-64 mb-24 w-80% justify-center m-auto">
        <a-button type="primary" ghost class="flex-1 h-64 rounded-100 text-size-24 mx-24"
          @click="formState.password = ''; $emit('update:open', false)">取消</a-button>
        <a-button type="primary" class="flex-1 h-64 rounded-100 text-size-24" html-type="submit">登录</a-button>
      </div>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
import { USER_INFO } from '@/enume/cache'
import { useModalContainer } from '@/hooks/common'
defineProps({
  open: Boolean
})
const emits = defineEmits(['update:open'])


const router = useRouter()
const formState = reactive({
  password: ''
});
const onFinish = (values: any) => {
  localStorage.setItem(USER_INFO, 'ups-tosk')
  router.push('/device-manage')
  emits('update:open', false)
};



</script>

<style lang="less" scoped></style>
