import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }: any) {
  return <Text style={[estilos.padrao, style]}>{children}</Text>;
}

const estilos = StyleSheet.create({
  padrao: {
    fontSize: 16,
    color: '#000000',
  }
});