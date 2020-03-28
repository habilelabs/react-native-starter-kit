import React from 'react';
import CText from "../components/atoms/CText";
import TouchableCenteredView from "../components/molecules/TouchableCenteredView";
import {useTranslation} from "react-i18next";
import CIcon from "../components/atoms/CIcon";
const ComponentScreen = ({navigation}) => {
    const {t} = useTranslation();
    return (
        <TouchableCenteredView onPress={() => navigation.navigate('HomeScreen')}>
            <CText h1 bold>{t('COMPONENT_SCREEN')}</CText>
            <CIcon
                size={19}
                type="font-awesome"
                name="heart"
            />
        </TouchableCenteredView>
    );
};

export default ComponentScreen;