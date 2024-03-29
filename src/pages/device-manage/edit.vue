<template>
  <div class="flex flex-col h-full edit">
    <div class="w-90% m-auto py-24">
      <a-form ref="formRef" :model="form" autocomplete="off" @finish="onFinish">
        <ConfigCard title="设备基本信息">
          <div class="flex items-center justify-center">
            <a-row :gutter="48">
              <a-col>
                <a-form-item label="设备名称" name="cupboard" :rules="[{ required: true, message: '请输入' }]">
                  <a-input readonly v-model:value="form.cupboard" placeholder="请输入" suffix="柜" @click="onClick('cupboard')" class="w-200" />
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item name="storey" :rules="[{ required: true, message: '请输入' }]">
                  <a-input readonly v-model:value="form.storey" placeholder="请输入" suffix="层" @click="onClick('storey')" class="w-200" />
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item name="number" :rules="[{ required: true, message: '请输入' }]">
                  <a-input readonly v-model:value="form.number" placeholder="请输入" suffix="号" @click="onClick('number')" class="w-200" />
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
                <a-form-item label="地址/站号" name="site" :rules="[{ required: true, message: '请选择' }]">
                  <a-select v-model:value="form.site" placeholder="请选择" class="!w-200">
                  </a-select>
                </a-form-item>
              </a-col>
            </a-row>
          </div>
        </ConfigCard>
        <ConfigCard title="RS485通信设置" class="my-32">
          <div class="flex items-center justify-center">
            <a-row :gutter="48">
              <a-col>
                <a-form-item label="波特率" name="baud" :rules="[{ required: true, message: '请选择' }]">
                  <a-select v-model:value="form.baud" placeholder="请选择" class="!w-200">
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
                <a-form-item label="校验" name="check" :rules="[{ required: true, message: '请选择' }]">
                  <a-radio-group v-model:value="form.check" button-style="solid">
                    <a-radio-button value="无" class="w-80 text-center">无</a-radio-button>
                    <a-radio-button value="奇" class="w-80 text-center">奇</a-radio-button>
                    <a-radio-button value="偶" class="w-80 text-center">偶</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="数据位" name="dataBit" :rules="[{ required: true, message: '请选择' }]">
                  <a-radio-group v-model:value="form.dataBit" button-style="solid">
                    <a-radio-button value="7" class="w-80 text-center">7</a-radio-button>
                    <a-radio-button value="8" class="w-80 text-center">8</a-radio-button>
                  </a-radio-group>
                </a-form-item>
              </a-col>
              <a-col>
                <a-form-item label="停止位" name="stop" :rules="[{ required: true, message: '请选择' }]">
                  <a-radio-group v-model:value="form.stop" button-style="solid">
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
              <template v-if="form.range === '区间值'">
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
              </template>
              <template v-else>
                <a-col>
                  <a-form-item label="一级报警" name="oneWarn1" :rules="[{ required: true, message: '请选择' }]">
                    <a-input readonly v-model:value="form.oneWarn1" placeholder="请输入" @click="onClick('oneWarn1')" class="w-200" />
                  </a-form-item>
                </a-col>
                <a-col>
                  <a-form-item label="二级报警" name="twoWarn1" :rules="[{ required: true, message: '请选择' }]">
                    <a-input readonly v-model:value="form.twoWarn1" placeholder="请输入" @click="onClick('twoWarn1')" class="w-200" />
                  </a-form-item>
                </a-col>
              </template>
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
import { useModalContainer } from '@/hooks/common'
import ConfigCard from '../warning-config/components/ConfigCard.vue';
defineProps({
  open: Boolean,
  data: Object
})
const emits = defineEmits(['update:open'])
const formRef = ref();
const show = ref(false)
const key = ref('')
const form = reactive({
  cupboard: '',
  storey: '',
  number: '',
  type: '温度',
  range: undefined,
  oneWarn1: '',
  oneWarn2: '',
  twoWarn1: '',
  twoWarn2: '',
  com: undefined,
  baud: '9600',
  port: '',
  check: '无',
  dataBit: '8',
  stop: '1'
});

watch(() => form.range, (val) => {
  form.oneWarn1 = ''
  form.oneWarn2 = ''
  form.twoWarn1 = ''
  form.twoWarn2 = ''
})
function onClick (name) {
  key.value = name
  show.value = true
}

const onFinish = (values) => {
  console.log('Success:', values);
};

function onCancel () {
  formRef.value.resetFields();
  emits('update:open', false)
}

function onOk (val) {
  console.log(val, key.value);
  form[key.value] = val
}

</script>

<style lang="less" scoped>
</style>
