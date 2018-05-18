const initialState = {
    contacts: []
}

export default contactsReducer = (state = initialState, action) => {
    switch(action.type){
        case "ALL_CONTACTS":
            return {...state, contacts: action.payload}
        default:
            return state
    }
}