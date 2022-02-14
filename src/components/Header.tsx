import { View, Text, ViewProps, ViewStyle, StyleSheet } from "react-native";
import React from "react";

interface IProps extends ViewProps {
  style?: ViewStyle;
  title: string;
}

const Header: React.FC<IProps> = ({ style = {}, title, ...rest }) => {
  return (
    <View {...rest} style={{ ...styles.container, ...rest }}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
    marginLeft: 8,
    letterSpacing: 1,
  },
});
