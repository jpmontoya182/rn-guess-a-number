import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors.js";

const NumberContainer = (props) => {
  const { numberToShow } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{numberToShow}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default NumberContainer;
