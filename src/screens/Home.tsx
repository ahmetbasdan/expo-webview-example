import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { LoadingOverlay } from "../components";

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <WebView
        style={styles.container}
        source={{ uri: "https://google.com/" }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      <LoadingOverlay loading={loading} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
