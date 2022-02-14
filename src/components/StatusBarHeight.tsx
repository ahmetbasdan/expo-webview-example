import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import Constants from "expo-constants";

interface IProps extends ViewProps {
  style?: ViewStyle;
}

const StatusBarHeight: React.FC<IProps> = ({ style = {}, ...rest }) => {
  return (
    <View {...rest} style={{ height: Constants.statusBarHeight, ...style }} />
  );
};

export default StatusBarHeight;
