import React from 'react';
import {ActivityIndicator, StyleSheet, View} from "react-native";
import * as Colors from "../../styles/colors";

const Loader = props => {
    return (
        <View style={styles.activityIndicator}>
            <ActivityIndicator
                color={Colors.white}
                size="large"/>
        </View>
    );
};

const styles = StyleSheet.create({
    activityIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.lightGray,
        opacity:0.7,
        zIndex: 9999
    }
});

export default Loader;