const defaultState = {
  navItems: [
    {
      title: 'Contacts',
      key: 'contacts',
      route: '/contacts/list',
      subs: [
        {
          title: 'All Contacts',
          key: 'list',
          route: '/contacts/list',
        },
        {
          title: 'Add New',
          key: 'add',
          route: '/contacts/add',
        }
      ]
    },
    {
      title: 'Messages',
      key: 'messages',
      route: '/messages/list',
      subs: [
        {
          title: 'All Messages',
          key: 'list',
          route: '/messages/list',
        },
        {
          title: 'New Message',
          key: 'new',
          route: '/messages/new',
        }
      ]
    }
  ]
}

export const state = () => ({ ...defaultState })

export const actions = {}

export const mutations = {}
