export default (state, action) => {
    switch (action.type) {
        case 'GET_B':
            return {
                ...state,
                nota: action.payload,
                loadingB: false
            }
        case 'GET_BORRADOR':
            return {
                ...state,
                notas: action.payload,
                loadingB: false
            }
        case 'ADD_BORRADOR':
            return {
                ...state,
                notas: [action.payload, ...state.notas]
            }
        case 'START_LOADING':
            return {
                ...state,
                loadingB: true
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