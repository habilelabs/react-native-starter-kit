import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, TextInput, Animated, Easing, StyleSheet} from 'react-native';

import {nodeType, renderNode} from '../helpers';
import {ViewPropTypes, TextPropTypes} from '../../config';
import {Fonts, Colors} from '../../styles';

import Icon from './CIcon';

const renderText = (content, defaultProps, style) =>
    renderNode(Text, content, {
        ...defaultProps,
        style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
    });

class CInput extends React.Component {
    shakeAnimationValue = new Animated.Value(0);

    focus() {
        this.input.focus();
    }

    blur() {
        this.input.blur();
    }

    clear() {
        this.input.clear();
    }

    isFocused() {
        return this.input.isFocused();
    }

    setNativeProps(nativeProps) {
        this.input.setNativeProps(nativeProps);
    }

    shake = () => {
        const {shakeAnimationValue} = this;

        shakeAnimationValue.setValue(0);
        // Animation duration based on Material Design
        // https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
        Animated.timing(shakeAnimationValue, {
            duration: 375,
            toValue: 3,
            ease: Easing.bounce,
        }).start();
    };

    render() {
        const {
            containerStyle,
            inputContainerStyle,
            leftIcon,
            leftIconContainerStyle,
            rightIcon,
            rightIconContainerStyle,
            inputComponent: InputComponent = TextInput,
            inputStyle,
            errorProps,
            errorStyle,
            errorMessage,
            label,
            labelStyle,
            labelProps,
            ...attributes
        } = this.props;

        const translateX = this.shakeAnimationValue.interpolate({
            inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
            outputRange: [0, -15, 0, 15, 0, -15, 0],
        });

        return (
            <View style={StyleSheet.flatten([styles.container, containerStyle])}>
                {renderText(label, {style: labelStyle, ...labelProps}, styles.label())}

                <Animated.View
                    style={StyleSheet.flatten([
                        styles.inputContainer(),
                        inputContainerStyle,
                        {transform: [{translateX}]},
                    ])}
                >
                    {leftIcon && (
                        <View style={StyleSheet.flatten([styles.iconContainer, leftIconContainerStyle])}>
                            {renderNode(Icon, leftIcon)}
                        </View>
                    )}

                    <InputComponent
                        testID="RNE__Input__text-input"
                        underlineColorAndroid="transparent"
                        {...attributes}
                        ref={ref => {
                            this.input = ref;
                        }}
                        style={StyleSheet.flatten([styles.input, inputStyle])}
                    />

                    {rightIcon && (
                        <View style={StyleSheet.flatten([styles.iconContainer, rightIconContainerStyle])}>
                            {renderNode(Icon, rightIcon)}
                        </View>
                    )}
                </Animated.View>

                {!!errorMessage && (
                    <Text {...errorProps} style={StyleSheet.flatten([styles.error(), errorStyle && errorStyle])}>
                        {errorMessage}
                    </Text>
                )}
            </View>
        );
    }
}

CInput.propTypes = {
    containerStyle: ViewPropTypes.style,
    inputContainerStyle: ViewPropTypes.style,
    leftIcon: nodeType,
    leftIconContainerStyle: ViewPropTypes.style,
    rightIcon: nodeType,
    rightIconContainerStyle: ViewPropTypes.style,
    inputStyle: TextPropTypes.style,
    inputComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    // eslint-disable-next-line react/forbid-prop-types
    shake: PropTypes.any,
    errorProps: PropTypes.object,
    errorStyle: TextPropTypes.style,
    errorMessage: PropTypes.string,
    label: PropTypes.node,
    labelStyle: TextPropTypes.style,
    labelProps: PropTypes.object
};

const styles = {
    container: {
        width: '100%',
        paddingHorizontal: 10,
    },
    inputContainer: () => ({
        flexDirection: 'row',
        borderBottomWidth: 4,
        alignItems: 'center',
        borderColor: Colors.darkGray,
    }),
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    input: {
        alignSelf: 'center',
        color: 'black',
        flex: 1,
    },
    error: () => ({
        margin: 5,
        fontSize: 35,
        color: Colors.error,
    }),
    label: () => ({
        fontSize: 35,
        color: Colors.textBlack,
    }),
};

export default CInput;
