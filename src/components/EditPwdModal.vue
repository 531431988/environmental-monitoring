<template>
  <a-modal :getContainer="useModalContainer" :open="open" centered :maskClosable="false" :closable="false" width="35%"
    :footer="null">
    <div
      class="absolute -top-60 left-50% -translate-x-50% w-100 h-100 rounded-100 bg-white flex justify-center items-center shadow-lg shadow-gray-300">
      <div class="i-ant-design:user-outlined text-size-48 text-gray-500"></div>
    </div>
    <div class="web-font-dd text-size-32 text-center mt-48 mb-32" style="color:#23AF98">修改密码</div>
    <a-form ref="formRef" :model="form" autocomplete="off" class="px-24" @finish="onFinish">
      <a-form-item name="password" :rules="[{ required: true, message: '请输入新密码' }]">
        <a-input type="text" v-model:value="form.password" class=" rounded-100 px-24" placeholder="请输入新密码" />
      </a-form-item>
      <a-form-item name="confirmPassword" :rules="[{ required: true, message: '请两次输入新密码' }]">
        <a-input type="text" v-model:value="form.confirmPassword" class=" rounded-100 px-24" placeholder="请两次输入新密码" />
      </a-form-item>
      <div class="flex my-32 justify-center m-auto">
        <a-button type="primary" ghost class="w-200 rounded-100 mr-24 text-size-24"
          @click="form = {}; $emit('update:open', false)">取消</a-button>
        <a-button type="primary" class="w-200 rounded-100 text-size-24" html-type="submit">确定</a-button>
      </div>
    </a-form>
  </a-modal>
</template>

<script setup>
import { USER_INFO } from '@/enume/cache'
import { useModalContainer } from '@/hooks/common'
import * as api from '@/api/user'
defineProps({
  open: Boolean,
})
const emits = defineEmits(['update:open'])

const router = useRouter()
const form = reactive({
  password: '',
  confirmPassword: ''
})
const formRef = ref()
const onFinish = async values => {
  try {
    const { data } = await api.resetPwd({
      password: form.password,
      confirmPassword: form.confirmPassword
    })
    sessionStorage.setItem(USER_INFO, `ups-${new Date().valueOf()}`)
    router.push('/device-manage')
    formRef.value.resetFields();
    emits('update:open', false)
  } catch (error) {

  }
}
</script>

<style lang="less" scoped></style>
