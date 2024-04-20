<template>
  <a-config-provider :theme="{
    token: {
      colorTextBase: '#000',
      colorPrimary: '#23af98',
      colorLink: '#23af98',
      colorError: '#f44546',
      colorBorderSecondary: 'transparent',
      controlHeight: 64,
      fontSize: 20,
      fontFamily: 'alph'
    }
  }">
    <Datav :width="1280" :height="800" id="datav" mode="fit" class="flex flex-col">
      <Header />
      <RouterView />
    </Datav>
  </a-config-provider>
</template>
<script setup lang="ts">
window.addEventListener("contextmenu", (e) => e.preventDefault(), false);
</script>
<style lang="less">
body,
html,
#app {
  height: 100%;
  background: #022f30;
  color: #b0d9d9;
  font-family: "alph";
}

body {
  margin: 0;
  overflow: hidden;
}

ul {
  padding: 0;
  margin: 0;
}

#app {
  overflow: hidden;
.ant-btn{
  line-height: 1;
}
  .readonly-input {
    position: relative;

    &::after {
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%
    }
  }

  .datav {
    background-color: #000;
    user-select: none;
    height: 100vh;
  }

  .ant-modal {
    font-family: 'ddjbt';
  }

  .ant-modal-confirm-content {
    font-size: 26px;
    padding: 16px 0;
  }

  .ant-modal-confirm-btns {
    button {
      border-radius: 100px;
      min-width: 160px;
      margin-left: 16px;
      font-family: 'ddjbt';
    }
  }
}
</style>
