<script>
import { h } from 'vue'

export default {
  name: 'MButton',
  render() {
    return h(
      'button',
      {},
      this.$slots.default()
    )    
  }
}
</script>
