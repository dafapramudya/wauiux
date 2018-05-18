const initialState = {
    msgs: []
}

export default chattingReducer = (state = initialState, action) => {
    if(action.type == "ALL_MSGS"){
        return {...state, msgs: action.payload}
    }
    else{
        return state
    }
}