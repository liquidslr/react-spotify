export const sound = (state = { volume: 100 }, action) => {
  switch (action.type) {
    case 'UPDATE_VOLUME':
      return {
        volume: action.volume
      }

    default:
      return state
  }
}

export default sound
