<template>
  <a-modal :getContainer="useModalContainer" :open="open" centered :maskClosable="false" :closable="false" width="35%"
    :footer="null">
    <div
      class="absolute -top-60 left-50% -translate-x-50% w-100 h-100 rounded-100 bg-white flex justify-center items-center shadow-lg shadow-gray-300">
      <div class="i-ant-design:user-outlined text-size-48 text-gray-500"></div>
    </div>
    <div class="web-font-dd text-size-32 text-center mt-48 mb-32" style="color:#23AF98">{{ title }}</div>
    <a-form ref="formRef" :model="form" autocomplete="off" class="px-24" @finish="onFinish">
      <a-form-item name="password" :rules="[{ required: true, message: '请输入管理密码' }]">
        <div @click="onClick('password')" class="readonly-input">
          <a-input-password readonly v-model:value="form.password" class="rounded-100 px-24" placeholder="请输入管理密码" />
        </div>
      </a-form-item>
      <div class="flex my-32 justify-center m-auto">
        <a-button type="primary" ghost class="w-200 rounded-100 text-size-24"
          @click="form.password = ''; $emit('update:open', false)">取消</a-button>
        <a-button type="primary" class="w-200 rounded-100 ml-24 text-size-24" html-type="submit">登录</a-button>
      </div>
    </a-form>
  </a-modal>
  <Keyboard v-model:open="show" @ok="onOk" />
</template>

<script setup>
import { USER_INFO } from '@/enume/cache'
import { useModalContainer } from '@/hooks/common'
import { exit } from '@tauri-apps/api/process';
import { Modal } from 'ant-design-vue';
import * as api from '@/api/user'
const props = defineProps({
  open: Boolean,
  title: {
    type: String,
    default: 'UPS蓄电池在线监测系统'
  }
})
const emits = defineEmits(['update:open', 'exit'])
const show = ref(false)
const key = ref('')
const router = useRouter()
const form = reactive({
  password: ''
})
const formRef = ref()

function onClick (name) {
  key.value = name
  show.value = true
}
async function onOk (val) {
  console.log(val, key.value);
  form[key.value] = val
}

const onFinish = async values => {

  try {
    const { data } = await api.login({
      password: form.password
    })
    if (props.title == '退出登录') {
      Modal.confirm({
        centered: true,
        title: '确认退出',
        content: '确认要退出系统吗？您可以再次运行本程序来启用监控',
        okText: '确定',
        cancelText: '取消',
        width: '35%',
        getContainer: useModalContainer,
        async onOk () {
          Modal.destroyAll()
          emits('update:open', false)
          sessionStorage.removeItem(USER_INFO)
          await exit(1);
        },
        onCancel () { },
      });
    } else {
      sessionStorage.setItem(USER_INFO, `ups-${new Date().valueOf()}`)
      router.push('/device-manage')
      formRef.value.resetFields();
      emits('update:open', false)
    }
  } catch (error) {
  }
}
</script>

<style lang="less" scoped></style>
