<template>
  <div class="card p-24">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
    <div class="web-font-dd hd mb-16 text-size-24">
      <span class="title">{{ title }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: String,
})
</script>

<style lang="less" scoped>
.card {
  background: rgba(4, 59, 70, 0.3);
  position: relative;
  overflow: hidden;
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
        content: '';
        background: #23af98;
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
  .hd {
    .title {
      position: relative;
      color: #bfffff;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -6px;
        width: 50%;
        height: 3px;
        background: #bfffff;
      }
    }
  }
}
</style>
