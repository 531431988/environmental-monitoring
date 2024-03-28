<template>
  <a-config-provider :theme="{
    token: {
      colorTextBase: '#000',
      colorPrimary: '#23af98',
      colorLink: '#23af98',
      colorError: '#f44546',
      colorBorderSecondary: 'transparent',
      controlHeight: 64,
    fontSize: 24,
    switchHeight: 64
    }
  }">
    <Datav id="datav" mode="fit" class="flex flex-col">
      <Header />
      <RouterView />
    </Datav>
  </a-config-provider>
</template>
<script setup lang="ts">
</script>
<style lang="less">
body,
html,
#app {
  height: 100%;
  background: #022f30;
  font-family: 'ddjbt';
  color: #b0d9d9;
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

  .datav {
    background-color: #000;
    user-select: none;
    height: 100vh;
  }
  .ant-modal-body {
    font-family: 'ddjbt';
  }
  .ant-modal-confirm-content {
    padding: 24px 24px 24px 0;
    font-size: 32px;
  }
  .ant-modal-confirm-btns {
    button {
      border-radius: 100px;
      width: 140px;
      margin-left: 16px;
      font-family: 'ddjbt';
    }
  }
}
</style>
