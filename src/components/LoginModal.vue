<template>
  <a-modal :open="open" centered :maskClosable="false" :closable="false" :footer="null">
    <h1 class="web-font-dd text-center mb-32" style="color:#23AF98">UPS监测控制系统</h1>
    <a-form :model="formState" autocomplete="off" @finish="onFinish">
      <a-form-item name="password" :rules="[{ required: true, message: '请输入管理密码' }]">
        <a-input-password v-model:value="formState.password" class="h-64" placeholder="" />
      </a-form-item>
      <div class="flex flex-col mt-64">
        <a-button type="primary" class="h-64 rounded-100 text-size-24"
          html-type="submit">登录</a-button>
        <a-button type="link" class="h-64  text-size-24" @click="formState.password = ''; $emit('update:open', false)">取消</a-button>
      </div>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
defineProps({
  open: Boolean
})
defineEmits(['update:open'])

const router = useRouter()
const formState = reactive({
  password: ''
});
const onFinish = (values: any) => {
  router.push('/data-gather')
};



</script>

<style lang="less" scoped></style>
