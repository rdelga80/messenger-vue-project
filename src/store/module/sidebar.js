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
          key: 'add-contact',
          route: '/contacts/add-contact',
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
          key: 'new-message',
          route: '/messages/new-message',
        }
      ]
    }
  ]
}

export const state = () => ({ ...defaultState })

export const actions = {}

export const mutations = {}
