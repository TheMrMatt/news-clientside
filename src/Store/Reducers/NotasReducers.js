export default (state, action) => {
  switch (action.type) {
    case 'GET_NOTA':
      return {
        ...state,
        nota: action.payload,
        loading: false
      }
    case 'GET_NOTAS':
      return {
        ...state,
        notas: action.payload,
        loading: false
      }
    case 'GET_RECIENTES':
      return {
        ...state,
        masRecientes: action.payload,
        loading: false
      }
    case 'ADD_NOTA':
      return {
        ...state,
        notas: [action.payload, ...state.notas]
      }
    case 'UPDATE_NOTA':
      return {
        ...state,
        nota: action.payload,
        loading: false
      }
    case 'START_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'DELETE_NOTA':
      return {
        ...state,
        notas: state.notas.filter(nota => nota.id !== action.payload)
      }
    case 'NOTA_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}