import { useStore } from 'vuex'

export const modularAction = ({ action, args, uid }) => (
  useStore().dispatch(
    'handleActions',
    {
      action,
      args,
      uid
    }
  )
)