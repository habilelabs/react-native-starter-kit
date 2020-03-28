import * as React from 'react';
import {useTranslation} from "react-i18next";
import {CText} from "../components/atoms";
import TouchableCenteredView from "../components/molecules/TouchableCenteredView";
import {setAppLoader} from "../modules/loader/actions";
import {useDispatch} from "react-redux";

/**
 * Main landing screen.
 * @param navigation
 * @returns {*}
 * @constructor
 */
function HomeScreen({navigation}) {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    function showLoaderAndNavigate() {
        dispatch(setAppLoader(true));
        setTimeout(()=>{
            dispatch(setAppLoader(false));
            navigation.navigate('ComponentScreen');
        }, 300);
    }
    return (
        <TouchableCenteredView onPress={showLoaderAndNavigate}>
            <CText h1 bold>{t('HOME_MAIN_LABEL')}</CText>
        </TouchableCenteredView>
    );
}

export default HomeScreen;