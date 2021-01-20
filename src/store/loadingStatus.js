export default (store) => {
  store.subscribeAction(({ type }) => {
    if (type === 'contacts/addContact') {
      store.dispatch(
        'loading/setStatus',
        { type: 'addContact', value: true },
        { root: true }
      )
    }
  })

  store.subscribe(({ type }) => {
    if (type === 'contacts/ADD_CONTACT') {
      store.dispatch(
        'loading/setStatus',
        { type: 'addContact', value: false },
        { root: true }
      )
    }
  })
}