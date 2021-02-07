import { getCurrentInstance } from "vue"

export const handleActionsPlugin = (store) => {
  store.subscribeAction(({ type, payload }) => {
    console.log(type, payload)
    // store.dispatch()
  })
}

export const handleActions = (actionPath, args, uid) => {
  const dispatchOptions = {}
  store.dispatch(
    actionPath,
    { ...args, uid },
    { root: true }
  )
}

export const state = {
  
}

export const actions = {
  /**
   * Handles action calls
   * @param {string} action - path of actions
   * @param {object} args - object of 
   */
  handleActions() {}
}
