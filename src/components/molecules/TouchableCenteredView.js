import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet} from "react-native";
import {Typography} from "../../styles";
import {ThemedView} from "../atoms";

const TouchableCenteredView = ({children, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <ThemedView isFullView style={Typography.centeredBox}>
                {children}
            </ThemedView>
        </TouchableOpacity>
    );
};

TouchableCenteredView.propTypes = {
    onPress: PropTypes.func
};

TouchableCenteredView.defaultProps = {
    onPress: ()=>{}
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default TouchableCenteredView;