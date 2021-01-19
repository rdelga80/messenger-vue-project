import vue from '@vitejs/plugin-vue'
const path = require('path')

/**
 * @type {import('vite').UserConfig}
 */
export default {
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  plugins: [vue()],
}
