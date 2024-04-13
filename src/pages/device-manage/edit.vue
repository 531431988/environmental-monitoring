<template>
  <div class="flex flex-col h-full edit">
    <div class="p-16">
      <a-form ref="formRef" :model="form" autocomplete="off" @finish="onFinish">
        <ConfigCard title="设备基本信息">
          <div class="flex items-center justify-center">
            <a-row :gutter="24">
              <a-col>
                <a-form-item label="设备名称" name="name" :rules="[{ required: true, message: '请输入' }]">
                  <div @click="onClick('name')" class="readonly-input">
                    <a-input type="text" readonly v-model:value="form.name" placeholder="请输入" suffix="柜"
                      class="w-120" />
                  </div>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item name="shelf" :rules="[{ required: true, message: '请输入' }]">
                  <div @click="onClick('shelf')" class="readonly-input">
                    <a-input type="text" readonly v-model:value="form.shelf" placeholder="请输入" suffix="层"
                      class="w-120" />
                  </div>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item name="slot" :rules="[{ required: true, message: '请输入' }]">
                  <div @click="onClick('slot')" class="readonly-input">
                    <a-input type="text" readonly v-model:value="form.slot" placeholder="请输入" suffix="号"
                      class="w-120" />
                  </div>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="设备类型" name="type" :rules="[{ required: true, message: '请选择' }]">
                  <a-radio-group v-model:value.number="form.type" button-style="solid">
                    <a-radio-button :value="1" class="w-80 text-center">温度</a-radio-button>
                    <a-radio-button :value="2" class="w-80 text-center">电压</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="地址/站号" name="code" :rules="[{ required: true, message: '请选择' }]">
                  <div @click="onClick('code')" class="readonly-input">
                    <a-input type="text" readonly v-model:value.number="form.code" placeholder="请输入" class="w-120" />
                  </div>
                </a-form-item>
              </a-col>
            </a-row>
          </div>
        </ConfigCard>
        <ConfigCard title="RS485通信设置" class="my-16">
          <div class="flex items-center justify-center">
            <a-row :gutter="24">
              <a-col>
                <a-form-item label="波特率" name="baudRate" :rules="[{ required: true, message: '请选择' }]">
                  <a-dropdown overlayClassName="baud-rate">
                    <div class="readonly-input">
                      <a-input type="text" readonly v-model:value="form.baudRate" placeholder="请选择" class="w-120" />
                    </div>
                    <template #overlay>
                      <a-menu @click="onSelect($event, 'baudRate')">
                        <a-menu-item key="4800">4800</a-menu-item>
                        <a-menu-item key="9600">9600</a-menu-item>
                        <a-menu-item key="14400">14400</a-menu-item>
                        <a-menu-item key="19200">19200</a-menu-item>
                        <a-menu-item key="38400">38400</a-menu-item>
                        <a-menu-item key="56000">56000</a-menu-item>
                        <a-menu-item key="57600">57600</a-menu-item>
                        <a-menu-item key="115200">115200</a-menu-item>
                      </a-menu>
                    </template>
                  </a-dropdown>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="校验" name="parity" :rules="[{ required: true, message: '请选择' }]">
                  <a-radio-group v-model:value="form.parity" button-style="solid">
                    <a-radio-button value="0" class="w-60 text-center">无</a-radio-button>
                    <a-radio-button value="1" class="w-60 text-center">奇</a-radio-button>
                    <a-radio-button value="2" class="w-60 text-center">偶</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="数据位" name="databits" :rules="[{ required: true, message: '请选择' }]">
                  <a-radio-group v-model:value="form.databits" button-style="solid">
                    <a-radio-button value="7" class="w-60 text-center">7</a-radio-button>
                    <a-radio-button value="8" class="w-60 text-center">8</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="停止位" name="stopbits" :rules="[{ required: true, message: '请选择' }]">
                  <a-radio-group v-model:value="form.stopbits" button-style="solid">
                    <a-radio-button value="1" class="w-60 text-center">1</a-radio-button>
                    <a-radio-button value="2" class="w-60 text-center">2</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
            </a-row>
          </div>
        </ConfigCard>
        <ConfigCard title="报警阈值设置">
          <div class="flex items-center justify-center">
            <a-row :gutter="24">
              <!-- 大于正常就是一级 -->
              <a-col>
                <a-form-item label="测量值超过" name="firstAlarmMin" :rules="[{ required: true, message: '请输入' }]">
                  <div class="flex items-center">
                    <div @click="onClick('firstAlarmMin')" class="readonly-input">
                      <a-input type="text" readonly v-model:value="form.firstAlarmMin" placeholder="请输入"
                        class="w-120" />
                    </div>
                    <span class="text-white ml-8 text-size-16">
                      时自动1级报警
                    </span>
                  </div>
                  <span class="text-white text-size-14 opacity-80">测量值低于一级报警值时为正常状态</span>
                </a-form-item>
              </a-col>
              <!-- 大于一级就是二级 -->
              <a-col>
                <a-form-item label="测量值超过" name="secondAlarmMin" :rules="[{ required: true, message: '请输入' }]">
                  <div class="flex items-center">
                    <div @click="onClick('secondAlarmMin')" class="readonly-input">
                      <a-input type="text" readonly v-model:value="form.secondAlarmMin" placeholder="请输入" class="w-120" />
                    </div>
                    <span class="text-white ml-8 text-size-16">
                      时自动2级报警
                    </span>
                  </div>
                </a-form-item>
              </a-col>
            </a-row>
          </div>
        </ConfigCard>
        <div class="flex justify-center mt-48">
          <a-button type="primary" class="w-200 rounded-100 text-size-24">连接测试</a-button>
          <a-button type="primary" ghost class="w-200 rounded-100 mx-24 text-size-24"
            @click="$router.go(-1)">取消</a-button>
          <a-button type="primary" class="w-200 rounded-100 text-size-24" html-type="submit">保存</a-button>
        </div>
      </a-form>
    </div>
  </div>
  <Keyboard v-model:open="show" v-model:value="form[key]" @ok="onOk" />
</template>
<route lang="json">{
  "name": "device-manage-edit",
  "meta": {
    "requiresAuth": true
  }
}</route>
<script setup>
import ConfigCard from '../warning-config/components/ConfigCard.vue';
import { message } from 'ant-design-vue';
import * as api from '@/api/device-manage'
const formRef = ref();
const show = ref(false)
const key = ref('')
const form = ref({
  name: '',
  shelf: '',
  slot: '',
  type: 1,
  code: '',
  baudRate: '9600',
  parity: '0',
  databits: '8',
  stopbits: '1',
  range: undefined,
  firstAlarmMin: '',
  firstAlarmMax: '',
  secondAlarmMin: '',
  secondAlarmMax: '',
});
const router = useRouter()
const route = useRoute()

watch(() => router.currentRoute.value, async (val) => {
  if (val?.query?.code) {
    try {
      const { data } = await api.detail(val.query.code)
      form.value = data
    } catch (error) {
    }
  }
}, { immediate: true, deep: true })

function onClick (name) {
  key.value = name
  show.value = true
}
function onSelect (e, name) {
  form.value[name] = e.key
}
const onFinish = async (values) => {
  const isEdit = route.query?.code !== undefined
  try {
    const { id, ...params } = form.value
    const { data, code } = isEdit ? await api.edit({
      id,
      ...params
    }) : await api.add(params)
    if (code === 200) {
      message.success('操作成功')
      router.go(-1)
    }
  } catch (error) {
    console.log(error)
  }
};


function onOk (val) {
  form.value[key.value] = val
  if (key.value === 'secondAlarmMin') {
    if (form.value.secondAlarmMin <= form.value.firstAlarmMin) {
      message.error('二级报警不能小于一级报警')
      form.value[key.value] = ''
    }
  }

}


</script>

<style lang="less" scoped>
:deep(.ant-radio-button-wrapper) {
  border: none !important;
}

.edit {
  :deep(.ant-radio-button-wrapper) {
    &:not(:first-child)::before {
      inset-block-start: 0;
      padding-block: 0;
    }
  }
}
</style>
<style>
.baud-rate .ant-dropdown-menu-item{
  padding: 8px !important;
}
</style>
