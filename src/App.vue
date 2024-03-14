<template>
  <a-config-provider :theme="{
    token: {
      colorTextBase: '#000',
      colorPrimary: '#23af98',
      colorLink: '#23af98',
      colorWarning: '#ffe703',
      colorError: '#f44546',
      colorBorderSecondary: 'transparent',
    }
  }">
    <RouterView />
  </a-config-provider>
</template>
<script setup lang="ts">
import { theme } from 'ant-design-vue';
</script>
<style>
body,
html {
  height: 100%;
  background-color: #022F30;
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
  height: 100%;
  overflow: hidden;
}
</style>
