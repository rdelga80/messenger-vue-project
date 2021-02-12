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

<style lang="scss">
.m-submit {
  background-color: var(--main-green-bg);
  border: 2px solid var(--main-green);
  border-radius: 4px;
  margin: 0.25rem 0.5rem;
  padding: 0.5rem;

  &:focus {
    outline: none;
  }
}
</style>
