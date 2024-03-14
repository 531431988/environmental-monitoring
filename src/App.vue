<template>
  <a-config-provider :theme="{
    token: {
      colorBgBase: '#022F30',
      colorTextBase: '#fff',
      colorPrimary: '#23af98',
      colorLink: '#23af98',
      colorWarning: '#ffe703',
      colorError: '#f44546',
      fontSize: 18,
    },
  algorithm: theme.darkAlgorithm,
  components: {
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
}

body {
  margin: 0;
}
ul{
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
}
</style>
