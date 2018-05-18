const initialState = {
    profile:""
}

export default settingReducer = (state = initialState, action) => {
    switch(action.type){
        case "ALL_PROFILE":
            return {...state, profile: action.payload}
        default:
            return state
    }
}