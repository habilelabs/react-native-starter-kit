import React from 'react';

import PropTypes from 'prop-types';

import { StyleSheet, View } from 'react-native';

import ViewPropTypes from '../../config/ViewPropTypes';
import * as Colors from "../../styles/colors";

const ThemedView = ({ colorSecondary, isFullView, style, theme, ...restProps }) => {
  return (
    <View
      {...restProps}
      style={StyleSheet.flatten([
        {
          backgroundColor: colorSecondary ? Colors.secondaryBackground : Colors.background,
        },
        isFullView && { flex: 1 },
        style && style,
      ])}
    />
  );
};

ThemedView.propTypes = {
  colorSecondary: PropTypes.bool,
  isFullView: PropTypes.bool,
  style: ViewPropTypes.style,
};

ThemedView.defaultProps = {
  colorSecondary: false,
  isFullView: false,
};

export default ThemedView;
