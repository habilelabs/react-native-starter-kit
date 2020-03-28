import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View,
  Text as TextRN,
  TouchableNativeFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  StyleSheet,
} from 'react-native';

import { ViewPropTypes } from '../../config';
import { renderNode, nodeType, conditionalStyle, color } from '../helpers';
import Icon from './CIcon';
import CText from './CText';
import * as Colors from "../../styles/colors";

const defaultLoadingProps = (type) => ({
  color: type === 'solid' ? Colors.primary : Colors.secondary,
  size: 'small',
});

class CButton extends Component {
  componentDidMount() {
    const { linearGradientProps, ViewComponent } = this.props;
    if (linearGradientProps && !global.Expo && !ViewComponent) {
      /* eslint-disable no-console */
      console.error(
        `You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}`
      );
    }
  }

  render() {
    const {
      TouchableComponent,
      containerStyle,
      onPress,
      buttonStyle,
      type,
      size,
      loading,
      loadingStyle,
      loadingProps: passedLoadingProps,
      title,
      titleProps,
      titleStyle,
      icon,
      iconContainerStyle,
      iconRight,
      disabled,
      disabledStyle,
      disabledTitleStyle,
      raised,
      linearGradientProps,
      ViewComponent = !disabled && linearGradientProps && global.Expo ? global.Expo.LinearGradient : View,
      ...attributes
    } = this.props;

    if (Platform.OS === 'android' && (buttonStyle.borderRadius && !attributes.background)) {
      if (Platform.Version >= 21) {
        attributes.background = TouchableNativeFeedback.Ripple('ThemeAttrAndroid', false);
      } else {
        attributes.background = TouchableNativeFeedback.SelectableBackground();
      }
    }

    const loadingProps = {
      ...defaultLoadingProps(type),
      ...passedLoadingProps,
    };
    const textProps = size === 'small' ? {
      h6: true,
      medium: false,
      ...titleProps,
    } : titleProps;
    const buttonClick = onPress && !loading ? onPress : () => console.log('Loading...');
    return (
      <View
        style={StyleSheet.flatten([
          styles.container,
          {
            borderRadius: buttonStyle.borderRadius || styles.container.borderRadius,
          },
          containerStyle,
          raised && !disabled && styles.raised(type),
        ])}
      >
        <TouchableComponent onPress={buttonClick} activeOpacity={0.3} disabled={disabled} {...attributes}>
          <ViewComponent
            {...linearGradientProps}
            style={StyleSheet.flatten([
              styles.button(type, size),
              buttonStyle,
              disabled && styles.disabled(type),
              disabled && disabledStyle,
            ])}
          >
            {loading && (
              <ActivityIndicator
                style={StyleSheet.flatten([styles.loading, loadingStyle])}
                color={loadingProps.color}
                size={loadingProps.size}
                {...loadingProps}
              />
            )}

            {!loading &&
              icon &&
              !iconRight &&
              renderNode(Icon, icon, {
                containerStyle: StyleSheet.flatten([styles.iconContainer, iconContainerStyle]),
              })}

            {!loading && !!title && (
              <CText
                style={StyleSheet.flatten([
                  styles.title(type),
                  titleStyle,
                  disabled && styles.disabledTitle(),
                  disabled && disabledTitleStyle,
                ])}
                medium
                {...textProps}
              >
                {title}
              </CText>
            )}

            {!loading &&
              icon &&
              iconRight &&
              renderNode(Icon, icon, {
                containerStyle: StyleSheet.flatten([styles.iconContainer, iconContainerStyle]),
              })}
          </ViewComponent>
        </TouchableComponent>
      </View>
    );
  }
}

CButton.propTypes = {
  title: PropTypes.string,
  titleStyle: TextRN.propTypes.style,
  titleProps: PropTypes.object,
  buttonStyle: ViewPropTypes.style,
  type: PropTypes.oneOf(['solid', 'clear', 'outline']),
  size: PropTypes.oneOf(['big', 'small']),
  loading: PropTypes.bool,
  loadingStyle: ViewPropTypes.style,
  loadingProps: PropTypes.object,
  onPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  icon: nodeType,
  iconContainerStyle: ViewPropTypes.style,
  iconRight: PropTypes.bool,
  linearGradientProps: PropTypes.object,
  TouchableComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  ViewComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
  disabledTitleStyle: TextRN.propTypes.style,
  raised: PropTypes.bool
};

CButton.defaultProps = {
  title: '',
  iconRight: false,
  TouchableComponent: Platform.select({
    android: TouchableNativeFeedback,
    default: TouchableOpacity,
  }),
  onPress: () => console.log('Please attach a method to this component'),
  type: 'solid',
  size: 'big',
  buttonStyle: {
    borderRadius: 5,    
  },
  disabled: false,
  raised: false,
  loading: false,
};

const styles = {
  button: (type, size) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    backgroundColor: type === 'solid' ? Colors.primary : 'transparent',
    minHeight: size === 'small' ? 34: 97,
    paddingHorizontal: 12,
    borderWidth: type !== 'clear' ? 1 : 0,
    borderColor: type === 'outline' ? Colors.darkPurple : type === 'red-outline' ? Colors.buttonEnable : Colors.button,
  }),
  container: {
    // borderRadius: 3,
  },
  disabled: (type) => ({
    ...conditionalStyle(type === 'solid', {
      backgroundColor: Colors.button,
    }),
    ...conditionalStyle(type !== 'clear', {
      borderColor: Colors.button,
    }),
  }),
  disabledTitle: () => ({
    color: color(Colors.button).darken(0.3),
  }),
  title: (type) => ({
    color: type === 'solid' ? Colors.white : Colors.black,
    textAlign: 'center',
  }),
  iconContainer: {
    marginHorizontal: 5,
  },
  raised: type =>
    type !== 'clear' && {
      backgroundColor: '#fff',
      ...Platform.select({
        android: {
          elevation: 4,
        },
        default: {
          shadowColor: 'rgba(230, 0, 0, 0.4)',
          shadowOffset: { height: 1, width: 1 },
          shadowOpacity: 1,
          shadowRadius: 1,
        },
      }),
    },
  loading: {
    marginVertical: 2,
  },
};

export default CButton;
