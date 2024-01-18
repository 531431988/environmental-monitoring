import { defineConfig, presetAttributify, presetUno, transformerVariantGroup } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    // presetAttributify(),
    presetUno(),
    presetRemToPx({
      baseFontSize: 4
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  rules: [
    /*  [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
     [/^mx-([\.\d]+)$/, ([_, num]) => ({ 'margin-left': `${num}px`, 'margin-right': `${num}px` })],
     [/^my-([\.\d]+)$/, ([_, num]) => ({ 'margin-top': `${num}px`, 'margin-bottom': `${num}px` })],
     [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
     [/^px-([\.\d]+)$/, ([_, num]) => ({ 'padding-left': `${num}px`, 'padding-right': `${num}px` })],
     [/^py-([\.\d]+)$/, ([_, num]) => ({ 'padding-top': `${num}px`, 'padding-bottom': `${num}px` })], */
  ]
})
