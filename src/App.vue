<template>
  <a-config-provider :theme="{
    token: {
      colorPrimary: '#000000',
    },
  }">
  <RouterView />
  </a-config-provider>
</template>
<script setup lang="ts">
</script>