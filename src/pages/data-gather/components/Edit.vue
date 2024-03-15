<template>
  <a-modal :open="open" width="600px" centered :maskClosable="false" :closable="false" :footer="null"
    wrapClassName="modal">
    <div slot="title" class="text-size-24">新增设备</div>
    <a-form :model="form" autocomplete="off" :label-col="{ style: { width: '120px' } }" @finish="onFinish">
      <div class="py-32">
        <a-form-item label="设备名称" name="name" :rules="[{ required: true, message: '请选择' }]">
          <div class="flex">
            <a-input readonly v-model:value="form.name" class="flex-1" placeholder="请选择" suffix="柜" />
            <a-input readonly v-model:value="form.name" class="flex-1 mx-16" placeholder="请选择" suffix="层" />
            <a-input readonly v-model:value="form.name" class="flex-1" placeholder="请选择" suffix="号" />
          </div>
        </a-form-item>
        <a-form-item label="设备类型" :rules="[{ required: true, message: '请选择' }]">
          <a-radio-group v-model:value="form.type" button-style="solid">
            <a-radio-button value="温度">温度</a-radio-button>
            <a-radio-button value="电压">电压</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="工作区间" :rules="[{ required: true, message: '请选择' }]">
          <a-radio-group v-model:value="form.type" button-style="solid">
            <a-radio-button value="大于">大于</a-radio-button>
            <a-radio-button value="小于">小于</a-radio-button>
            <a-radio-button value="等于">等于</a-radio-button>
            <a-radio-button value="区间值">区间值</a-radio-button>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="一级报警" :rules="[{ required: true, message: '请选择' }]">
          <a-slider v-model:value="form.warn" :range="false" />
        </a-form-item>
        <a-form-item label="二级报警" :rules="[{ required: true, message: '请选择' }]">
          <a-slider v-model:value="form.warn" :range="false" />
        </a-form-item>
        <a-row>
          <a-col :span="12">
            <a-form-item label="串口" :rules="[{ required: true, message: '请选择' }]">
              <a-select placeholder="请选择">
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="波特率" :rules="[{ required: true, message: '请选择' }]">
              <a-select placeholder="请选择">
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
            <a-form-item label="校验" :rules="[{ required: true, message: '请选择' }]">
              <a-radio-group v-model:value="form.type" button-style="solid">
                <a-radio-button value="无">无</a-radio-button>
                <a-radio-button value="奇">奇</a-radio-button>
                <a-radio-button value="偶">偶</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="数据位" :rules="[{ required: true, message: '请选择' }]">
              <a-radio-group v-model:value="form.type" button-style="solid">
                <a-radio-button value="7">7</a-radio-button>
                <a-radio-button value="8">8</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item label="停止位" :rules="[{ required: true, message: '请选择' }]">
          <a-radio-group v-model:value="form.type" button-style="solid">
            <a-radio-button value="1">1</a-radio-button>
            <a-radio-button value="2">2</a-radio-button>
          </a-radio-group>
        </a-form-item>
      </div>
      <div slot="footer" class="text-right">
        <a-button type="primary" ghost class="mx-16" @click="onCancel">取消</a-button>
        <a-button type="primary" html-type="submit">确定</a-button>
      </div>
    </a-form>
  </a-modal>
</template>

<script lang="ts" setup>
defineProps({
  open: Boolean,
  data: Object
})
const emits = defineEmits(['update:open'])

const form = reactive({
  name: '',
  type: '',
  port: '',
  warn: 0
});
const onFinish = (values: any) => {
};

function onCancel() {
  emits('update:open', false)
}



</script>
<style lang="less"></style>
