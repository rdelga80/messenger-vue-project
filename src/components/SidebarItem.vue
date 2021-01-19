<script>
import { h } from 'vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'SideBarItem',
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  render() {
    const displayItems = (items) => {
      return items.map(item => {
        if (item.subs) {
          return h('div', { class: 'nav-item' }, [
            h(RouterLink, { to: item.route, class: 'heading' }, () => item.title),
            h('div', { class: 'sub' }, ...displayItems(item.subs))
          ])
        } else {
          return [
            h(RouterLink, { to: item.route }, () => item.title)
          ]
        }
      })
    }
    
    return h('div', {}, displayItems(this.items))
  }
}
</script>

<style>
.nav-item {
  margin-bottom: 0.5rem;
}

.nav-item > .heading {
  font-size: 1.25rem;
}

.nav-item > .sub {
  display: flex;
  flex-direction: column;
  padding-left: 1.25rem;
}
</style>
