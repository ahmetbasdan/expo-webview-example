import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import React from "react";

interface IProps {
  loading?: boolean;
  title?: string;
}

const LoadingOverlay: React.FC<IProps> = ({
  loading = false,
  title = "Yükleniyor...",
}) => {
  if (!loading) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={"large"}
        color={"#fff"}
        style={styles.activityIndicator}
      />
      <Text style={styles.loadingText}>{title}</Text>
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  activityIndicator: {
    marginBottom: 12,
    transform: [{ scale: 1.5 }],
  },
  loadingText: {
    color: "#fff",
    fontSize: 16,
  },
});
