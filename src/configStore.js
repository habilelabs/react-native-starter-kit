import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import reducers from './reducers';

/**
 * Redux store.
 * @returns {(Store<any, Action> & Store<S & StateExt, A> & Ext) | (Store<any, Action> & Store<S & StateExt, A> & Ext) | (Store<any, Action> & Store<S & {}, A> & {dispatch: Dispatch<A>})}
 */
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: [],
};
const persistedReducers = persistReducer(persistConfig, reducers);
function configureStore() {
    return createStore(
        persistedReducers,
        compose(applyMiddleware(thunk))
    );
}
export const store = configureStore();
export const persistor = persistStore(store);