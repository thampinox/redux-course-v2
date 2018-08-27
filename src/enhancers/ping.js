/*eslint-disable */
export const ping = store => next => action => {
  console.log(`Action type: ${action.type}, action payload: ${action.payload}`)
  return next(action)
}
/*eslint-enable */
