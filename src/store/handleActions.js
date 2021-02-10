export const state = {
  
}

export const actions = {
  /**
   * Handles modular action calls
   *
   * @param {string} action - path of modular action
   * @param {object} args - object of arguments for actions
   * @param {string} uid - uid of modular component instance
   */
  modularAction({ dispatch }, { action, args, uid }) {
    dispatch(
      action,
      { ...args, uid },
      { root: true }
    )
  }
}
