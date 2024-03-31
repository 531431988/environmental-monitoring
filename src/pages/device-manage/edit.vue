<template>
  <div class="flex flex-col h-full edit">
    <div class="w-90% m-auto py-24">
      <a-form ref="formRef" :model="form" autocomplete="off" @finish="onFinish">
        <ConfigCard title="设备基本信息">
          <div class="flex items-center justify-center">
            <a-row :gutter="48">
              <a-col>
                <a-form-item label="设备名称" name="name" :rules="[{ required: true, message: '请输入' }]">
                  <a-input readonly v-model:value="form.name" placeholder="请输入" suffix="柜" @click="onClick('name')" class="w-200" />
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item name="shelf" :rules="[{ required: true, message: '请输入' }]">
                  <a-input readonly v-model:value="form.shelf" placeholder="请输入" suffix="层" @click="onClick('shelf')" class="w-200" />
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item name="slot" :rules="[{ required: true, message: '请输入' }]">
                  <a-input readonly v-model:value="form.slot" placeholder="请输入" suffix="号" @click="onClick('slot')" class="w-200" />
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="设备类型" name="type" :rules="[{ required: true, message: '请选择' }]">
                  <a-radio-group v-model:value="form.type" button-style="solid">
                    <a-radio-button value="温度" class="w-100 text-center">温度</a-radio-button>
                    <a-radio-button value="电压" class="w-100 text-center">电压</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="地址/站号" name="code" :rules="[{ required: true, message: '请选择' }]">
                  <a-input readonly v-model:value="form.code" placeholder="请输入"@click="onClick('code')" class="w-200" />
                  <!-- <a-select v-model:value="form.code" placeholder="请选择" class="!w-200">
                  </a-select> -->
                </a-form-item>
              </a-col>
            </a-row>
          </div>
        </ConfigCard>
        <ConfigCard title="RS485通信设置" class="my-32">
          <div class="flex items-center justify-center">
            <a-row :gutter="48">
              <a-col>
                <a-form-item label="波特率" name="baudRate" :rules="[{ required: true, message: '请选择' }]">
                  <a-select v-model:value="form.baudRate" placeholder="请选择" class="!w-200">
                    <a-select-option value="4800">4800</a-select-option>
                    <a-select-option value="9600">9600</a-select-option>
                    <a-select-option value="14400">14400</a-select-option>
                    <a-select-option value="19200">19200</a-select-option>
                    <a-select-option value="38400">38400</a-select-option>
                    <a-select-option value="56000">56000</a-select-option>
                    <a-select-option value="57600">57600</a-select-option>
                    <a-select-option value="115200">115200</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="校验" name="parity" :rules="[{ required: true, message: '请选择' }]">
                  <a-radio-group v-model:value="form.parity" button-style="solid">
                    <a-radio-button value="无" class="w-80 text-center">无</a-radio-button>
                    <a-radio-button value="奇" class="w-80 text-center">奇</a-radio-button>
                    <a-radio-button value="偶" class="w-80 text-center">偶</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="数据位" name="databits" :rules="[{ required: true, message: '请选择' }]">
                  <a-radio-group v-model:value="form.databits" button-style="solid">
                    <a-radio-button value="7" class="w-80 text-center">7</a-radio-button>
                    <a-radio-button value="8" class="w-80 text-center">8</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="停止位" name="stopbits" :rules="[{ required: true, message: '请选择' }]">
                  <a-radio-group v-model:value="form.stopbits" button-style="solid">
                    <a-radio-button value="1" class="w-80 text-center">1</a-radio-button>
                    <a-radio-button value="2" class="w-80 text-center">2</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col>
                <a-button type="primary" class="w-200 text-size-24">连接测试</a-button>
              </a-col>
            </a-row>
          </div>
        </ConfigCard>
        <ConfigCard title="报警阈值设置">
          <div class="flex items-center justify-center">
            <a-row :gutter="32">
              <a-col>
                <a-form-item label="工作区间" name="range" :rules="[{ required: true, message: '请选择' }]">
                  <a-select v-model:value="form.range" placeholder="请选择" class="!w-200">
                    <a-select-option value="大于">大于</a-select-option>
                    <a-select-option value="小于">小于</a-select-option>
                    <a-select-option value="等于">等于</a-select-option>
                    <a-select-option value="区间值">区间值</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
                <a-col>
                  <a-form-item label="一级报警" name="oneWarn1" :rules="[{ required: true, message: '请选择' }]">
                    <div class="flex items-center">
                      <a-input readonly v-model:value="form.oneWarn1" placeholder="请输入" @click="onClick('oneWarn1')" class="w-200" />
                    </div>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item label="" name="oneWarn2" :rules="[{ required: true, message: '请选择' }]">
                    <div class="flex items-center">
                      <a-input readonly v-model:value="form.oneWarn2" placeholder="请输入" @click="onClick('oneWarn2')" class="w-200" />
                    </div>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item label="二级报警" name="twoWarn1" :rules="[{ required: true, message: '请选择' }]">
                    <div class="flex items-center">
                      <a-input readonly v-model:value="form.twoWarn1" placeholder="请输入" @click="onClick('twoWarn1')" class="w-200" />
                    </div>
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item label="" name="twoWarn2" :rules="[{ required: true, message: '请选择' }]">
                    <div class="flex items-center">
                      <a-input readonly v-model:value="form.twoWarn2" placeholder="请输入" @click="onClick('twoWarn2')" class="w-200" />
                    </div>
                  </a-form-item>
                </a-col>
            </a-row>
          </div>
        </ConfigCard>
        <div class="mt-48 flex justify-center">
          <a-button type="primary" ghost class="w-200 rounded-100 text-size-24 mx-24" @click="$router.go(-1)">取消</a-button>
          <a-button type="primary" class="w-200 rounded-100 text-size-24" html-type="submit">确定</a-button>
        </div>
      </a-form>
    </div>
  </div>
  <Keyboard v-model:open="show" @ok="onOk" />
</template>
<route lang="json">{
  "name": "device-manage-edit",
  "meta": {
    "requiresAuth": true
  }
}</route>
<script setup>
import ConfigCard from '../warning-config/components/ConfigCard.vue';
import * as api from '@/api/device-manage'
const formRef = ref();
const show = ref(false)
const key = ref('')
const form = ref({
  name: '',
  shelf: '',
  slot: '',
  range: undefined,
  oneWarn1: '',
  oneWarn2: '',
  twoWarn1: '',
  twoWarn2: '',
  com: undefined,
  baudRate: '9600',
  port: '',
  parity: '无',
  databits: '8',
  stopbits: '1',
});
const router = useRouter()
const route = useRoute()

watch(() => router.currentRoute.value, async (val) => {
  try {
    const { data } = await api.detail(val.query.code)
    form.value = data
  } catch (error) {
  }
}, { immediate: true, deep: true })

function onClick (name) {
  key.value = name
  show.value = true
}

const onFinish = async (values) => {
  const isEdit = route.query?.code !== undefined
  try {
    const {id, ...params} = from.value
    const { data } = isEdit ? await api.edit({
      id,
      ...params
    }) : await api.add(params)
  } catch (error) {
    console.log(error)
  }
};


async function onOk (val) {
  console.log(val, key.value);
  form.value[key.value] = val
}

</script>

<style lang="less" scoped>
:deep(.ant-radio-button-wrapper){
    border: none !important;
  }
</style>
