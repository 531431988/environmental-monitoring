<template>
  <a-modal :open="open" width="600px" centered :maskClosable="false" :closable="false" :footer="null"
    wrapClassName="modal">
    <div slot="title" class="text-size-24">新增设备</div>
    <a-form ref="formRef" :model="form" autocomplete="off" :label-col="{ style: { width: '120px' } }"
      @finish="onFinish">
      <div class="pt-32">
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="设备名称" name="cupboard" :rules="[{ required: true, message: '请输入' }]">
              <a-input readonly v-model:value="form.cupboard" placeholder="请输入" suffix="柜" @click="onClick('cupboard')" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item name="storey" :rules="[{ required: true, message: '请输入' }]">
              <a-input readonly v-model:value="form.storey" placeholder="请输入" suffix="层" @click="onClick('storey')" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item name="number" :rules="[{ required: true, message: '请输入' }]">
              <a-input readonly v-model:value="form.number" placeholder="请输入" suffix="号" @click="onClick('number')" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-form-item label="设备类型" name="type" :rules="[{ required: true, message: '请选择' }]">
              <a-radio-group v-model:value="form.type" button-style="solid">
                <a-radio-button value="温度">温度</a-radio-button>
                <a-radio-button value="电压">电压</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="工作区间" name="range" :rules="[{ required: true, message: '请选择' }]">
              <a-select v-model:value="form.range" placeholder="请选择" class="!w-full">
                <a-select-option value="大于">大于</a-select-option>
                <a-select-option value="小于">小于</a-select-option>
                <a-select-option value="等于">等于</a-select-option>
                <a-select-option value="区间值">区间值</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <template v-if="form.range === '区间值'">
          <a-row :gutter="16">
            <a-col :span="14">
              <a-form-item label="一级报警" name="oneWarn1" :rules="[{ required: true, message: '请选择' }]">
                <div class="flex items-center">
                  <a-input readonly v-model:value="form.oneWarn1" placeholder="请输入"  @click="onClick('oneWarn1')" />
                </div>
              </a-form-item>
            </a-col>
            <a-col :span="10">
              <a-form-item label="" name="oneWarn2" :rules="[{ required: true, message: '请选择' }]">
                <div class="flex items-center">
                  <a-input readonly v-model:value="form.oneWarn2" placeholder="请输入" @click="onClick('oneWarn2')"  />
                </div>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="14">
              <a-form-item label="二级报警" name="twoWarn1" :rules="[{ required: true, message: '请选择' }]">
                <div class="flex items-center">
                  <a-input readonly v-model:value="form.twoWarn1" placeholder="请输入" @click="onClick('twoWarn1')" />
                </div>
              </a-form-item>
            </a-col>
            <a-col :span="10">
              <a-form-item label="" name="twoWarn2" :rules="[{ required: true, message: '请选择' }]">
                <div class="flex items-center">
                  <a-input readonly v-model:value="form.twoWarn2" placeholder="请输入" @click="onClick('twoWarn2')" />
                </div>
              </a-form-item>
            </a-col>
          </a-row>
        </template>
        <template v-else>
          <a-form-item label="一级报警" name="oneWarn1" :rules="[{ required: true, message: '请选择' }]">
            <a-input readonly v-model:value="form.oneWarn1" placeholder="请输入" @click="onClick('oneWarn1')" />
          </a-form-item>
          <a-form-item label="二级报警" name="twoWarn1" :rules="[{ required: true, message: '请选择' }]">
            <a-input readonly v-model:value="form.twoWarn1" placeholder="请输入" @click="onClick('twoWarn1')" />
          </a-form-item>
        </template>
        <a-row>
          <a-col :span="12">
            <a-form-item label="串口" name="com" :rules="[{ required: true, message: '请选择' }]">
              <a-select v-model:value="form.com" placeholder="请选择">
                <a-select-option value="1">1</a-select-option>
                <a-select-option value="2">2</a-select-option>
                <a-select-option value="3">3</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="波特率" name="baud" :rules="[{ required: true, message: '请选择' }]">
              <a-select v-model:value="form.baud" placeholder="请选择">
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
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="校验" name="check" :rules="[{ required: true, message: '请选择' }]">
              <a-radio-group v-model:value="form.check" button-style="solid">
                <a-radio-button value="无">无</a-radio-button>
                <a-radio-button value="奇">奇</a-radio-button>
                <a-radio-button value="偶">偶</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="数据位" name="dataBit" :rules="[{ required: true, message: '请选择' }]">
              <a-radio-group v-model:value="form.dataBit" button-style="solid">
                <a-radio-button value="7">7</a-radio-button>
                <a-radio-button value="8">8</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item label="停止位" name="stop" :rules="[{ required: true, message: '请选择' }]">
          <a-radio-group v-model:value="form.stop" button-style="solid">
            <a-radio-button value="1">1</a-radio-button>
            <a-radio-button value="2">2</a-radio-button>
          </a-radio-group>
        </a-form-item>
      </div>
      <div slot="footer" class="text-right">
        <a-button type="primary">连接测试</a-button>
        <a-button type="primary" ghost class="mx-16" @click="onCancel">取消</a-button>
        <a-button type="primary" html-type="submit">确定</a-button>
      </div>
    </a-form>
  </a-modal>
  <Keyboard v-model:open="show" @ok="onOk" />
</template>

<script lang="ts" setup>
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
function onClick(name) {
  key.value = name
  show.value = true
}

const onFinish = (values: any) => {
  console.log('Success:', values);
};

function onCancel() {
  formRef.value.resetFields();
  emits('update:open', false)
}

function onOk(val) {
  console.log(val, key.value);
  form[key.value] = val
}


</script>
<style lang="less"></style>
