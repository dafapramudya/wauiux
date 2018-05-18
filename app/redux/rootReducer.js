import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import nav from './nav';
import chattingReducer from '../Screens/Chats/reducers';
import settingReducer from '../Screens/Settings/reducers';
import contactsReducer from '../Screens/Contacts/reducers';

const rootReducers = combineReducers({
    nav: nav,
    chattingReducer,
    contactsReducer,
    settingReducer,
    form: formReducer
})

export default rootReducers