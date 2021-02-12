<script>
import { h, resolveComponent } from 'vue'
import Icon from '@/components/MIcon.vue'

export default {
  name: 'MSubmit',

  components: { Icon },

  props: {
    loading: Boolean,
    value: {
      type: String,
      required: true
    }
  },

  render(props) {
    if (props.loading) {
      const Icon = resolveComponent('Icon')

      return h(
        'div',
        {
          class: 'm-submit'
        },
        h(
          Icon,
          {
            icon: 'loading'
          }
        )
      )
    } else {
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
