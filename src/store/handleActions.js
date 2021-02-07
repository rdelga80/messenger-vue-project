export const state = {
  
}

export const actions = {
  /**
   * Handles action calls
   *
   * @param {string} action - path of actions
   * @param {object} args - object of 
   */
  handleActions({ dispatch }, { action, args, uid }) {
    dispatch(
      action,
      { ...args, uid },
      { root: true }
    )
  }
}
