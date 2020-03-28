/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {
    SafeAreaView,
    StatusBar,
} from 'react-native';
import {useTranslation} from "react-i18next";
import AppRouter from "./AppRouter";
import {AppLoader} from "./templates";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "./configStore";
import {Loader} from "./components/molecules";

const App: () => React$Node = () => {
    const {t} = useTranslation();
    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={{flex: 1}}>
                <Provider store={store}>
                    <PersistGate
                        loading={
                            <Loader/>
                        }
                        persistor={persistor}>
                        <AppRouter/>
                        <AppLoader/>
                    </PersistGate>
                </Provider>
            </SafeAreaView>
        </>
    );
};

export default App;
