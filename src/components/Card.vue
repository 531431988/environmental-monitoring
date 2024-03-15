<template>
  <div class="card p-24">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <h2 class="web-font-dd title mt-0">{{ title }}</h2>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String
});
</script>

<style lang="less" scoped>
.card {
  background: rgba(4, 59, 70, 0.3);
  position: relative;
  backdrop-filter: blur(4px);

  .line {
    width: 100%;
    height: 100%;
    pointer-events: none;

    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {

      &::before,
      &::after {
        position: absolute;
        content: "";
        background: #23AF98;
      }
    }

    &:nth-child(1) {

      &::after,
      &::before {
        left: 0;
        top: 0;
      }

      &::after {
        width: 10px;
        height: 2px;
      }

      &::before {
        width: 2px;
        height: 10px;
      }
    }

    &:nth-child(2) {

      &::after,
      &::before {
        right: 0;
        top: 0;
      }

      &::after {
        width: 10px;
        height: 2px;
      }

      &::before {
        width: 2px;
        height: 10px;
      }
    }

    &:nth-child(3) {

      &::after,
      &::before {
        bottom: 0;
        right: 0;
      }

      &::after {
        width: 10px;
        height: 2px;
      }

      &::before {
        width: 2px;
        height: 10px;
      }
    }

    &:nth-child(4) {

      &::after,
      &::before {
        bottom: 0;
        left: 0;
      }

      &::after {
        width: 10px;
        height: 2px;
      }

      &::before {
        width: 2px;
        height: 10px;
      }
    }
  }

  .title {
    color: #bfffff;
  }

}
</style>
