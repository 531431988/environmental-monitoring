<template>
  <a-config-provider :theme="{
    token: {
      colorTextBase: '#000',
      colorPrimary: '#23af98',
      colorLink: '#23af98',
      colorError: '#f44546',
      colorBorderSecondary: 'transparent',
      controlHeight: 48,
      fontSize: 20
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
<style>
body,
html,
#app {
  height: 100%;
  background: #022F30;
  font-family: 'ddjbt';
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

  }
}
</style>
