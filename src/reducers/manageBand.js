export default function manageBand(state = {
  bands: [],
}, action) {

  switch (action.type) {
    
    case 'ADD_BAND':
      console.log(action.payload.name)
      return {
        bands: state.bands.concat(action.payload)
      }

    default:
      return state
  }
};
