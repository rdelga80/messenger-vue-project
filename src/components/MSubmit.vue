<script>
import { h } from 'vue'

export default {
  name: 'MSubmit',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  render() {
    return h(
      'input',
      {
        class: 'm-submit',
        type: 'submit',
        value: this.value
      }
    )
  }
}
</script>

<style>
.m-submit {
  margin: 0.25rem 0.5rem;
  padding: 0.5rem;
  background-color: rgb(8, 51, 92) 
}
</style>
