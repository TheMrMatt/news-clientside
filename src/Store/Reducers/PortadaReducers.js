export default (state, action) => {
    switch(action.type) {
      case 'GET_PORTADAS':
        return {
          ...state,
          portadas: action.payload,
          loadingP: false
        }
      case 'UPDATE_PORTADA':
        return {
          ...state,
          portada: action.payload,
          loadingP: false
        }
      case 'PORTADA_ERROR':
        return {
          ...state,
          error: action.payload
        }  
      case 'START_LOADING':
        return {
          ...state,
          loadingP: true
        }         
      default:
        return state;
    }
  }