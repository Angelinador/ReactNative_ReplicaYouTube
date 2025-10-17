import React, { useState, useRef } from "react";
import { Pressable, Animated, StyleSheet } from "react-native";

import { useTheme } from "../contexts/theme.context";

const AnimatedToggleSwitch = () => {
  const [active, setActive] = useState(false);
  const offset = useRef(new Animated.Value(0)).current;
  const { theme, toggleTheme, isDark } = useTheme()

  const toggle = () => {
    toggleTheme()
    Animated.timing(offset, {
      toValue: active ? 0 : 24,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setActive(!active);
  };

  return (
    <Pressable
      onPress={toggle}
      style={[
        styles.switchContainer,
        { backgroundColor: active ? "#ff0000ff" : "#ffffffff" },
      ]}
    >
      <Animated.View
        style={[
          styles.circle,
          { transform: [{ translateX: offset }] },
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 56,
    height: 32,
    borderRadius: 16,
    padding: 4,
    justifyContent: "center",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#000",
  },
});

export default AnimatedToggleSwitch;
