<template>
  <div :class="`datav ${mode}`">
    <template v-if="showEntity">
      <div ref="entityRef" class="datav-entity">
        <div ref="previewRef" class="datav-scale">
          <div :style="datavStyle">
            <slot></slot>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div ref="previewRef" class="datav-scale">
        <div :style="datavStyle">
          <slot></slot>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  usePreviewFitScale,
  usePreviewScrollYScale,
  // usePreviewScrollXScale,
  usePreviewFullScale,
} from './usePreviewScale.hook'

const props = defineProps({
  width: {
    type: Number,
    default: 1920,
  },
  height: {
    type: Number,
    default: 1080,
  },
  mode: {
    type: String,
    default: 'fit', // 'fit','scroll-y',scroll-x','full'
  },
})
const emits = defineEmits(['update:scale'])
const entityRef = ref(null)
const previewRef = ref(null)
const datavStyle = computed(() => {
  return {
    width: `${props.width}px`,
    height: `${props.height}px`,
    position: 'relative',
    display: 'flex',
    'flex-direction': 'column',
  }
})

const showEntity = computed(() => {
  return props.mode === 'scroll-y' || props.mode === 'scroll-x'
})

// 屏幕适配
onMounted(() => {
  switch (props.mode) {
    case 'fit':
      ;(() => {
        const { calcRate, windowResize, unWindowResize } = usePreviewFitScale(
          props.width as number,
          props.height as number,
          previewRef.value,
          (scale) => {
            emits('update:scale', scale)
          },
        )
        calcRate()
        windowResize()
        onUnmounted(() => {
          unWindowResize()
        })
      })()
      break
    case 'scroll-y':
      ;(() => {
        const { calcRate, windowResize, unWindowResize } = usePreviewScrollYScale(
          props.width as number,
          props.height as number,
          previewRef.value,
          (scale) => {
            const dom = entityRef.value
            dom.style.width = `${props.width * scale.width}px`
            dom.style.height = `${props.height * scale.height}px`
          },
        )
        calcRate()
        windowResize()
        onUnmounted(() => {
          unWindowResize()
        })
      })()

      break
    /* case 'scroll-x':
      ; (() => {
        const { calcRate, windowResize, unWindowResize } = usePreviewScrollXScale(
          props.width as number,
          props.height as number,
          previewRef.value,
          (scale) => {
            const dom = entityRef.value
            dom.style.width = `${props.width * scale.width}px`
            dom.style.height = `${props.height * scale.height}px`
          },
        )
        calcRate()
        windowResize()
        onUnmounted(() => {
          unWindowResize()
        })
      })()

      break */
    case 'full':
      ;(() => {
        const { calcRate, windowResize, unWindowResize } = usePreviewFullScale(
          props.width as number,
          props.height as number,
          previewRef.value,
        )
        calcRate()
        windowResize()
        onUnmounted(() => {
          unWindowResize()
        })
      })()
      break
    default:
  }
})
</script>

<style lang="less" scoped>
.datav {
  position: relative;

  &.fit,
  &.full {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .datav-scale {
      transform-origin: center center;
    }
  }

  &.scroll-y {
    overflow-x: hidden;

    .datav-scale {
      transform-origin: left top;
    }
  }

  /* &.scroll-x {
    overflow-y: hidden;

    .datav-scale {
      overflow-x: auto;
      transform-origin: center;
    }
  }
 */
  .datav-entity {
    margin: auto;
    overflow: auto;
  }
}
</style>
