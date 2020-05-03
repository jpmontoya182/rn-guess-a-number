import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (props) => (
  <TextInput {...props} style={{ ...styles.inputStyle, ...props.style }} />
);

const styles = StyleSheet.create({
  inputStyle: {
    height: 40,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
