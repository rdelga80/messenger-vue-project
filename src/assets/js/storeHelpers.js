import { useStore } from 'vuex'

export const modularAction = ({ action, args, uid }) => {
  const store = useStore()

  store.dispatch(
    'handleActions',
    {
      action,
      args,
      uid
    }
  )
}