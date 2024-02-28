import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Test() {
  const [leftPressed, setLeftPressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);

  const handleLeftPress = () => {
    setLeftPressed(true);
    setRightPressed(false);
  };

  const handleRightPress = () => {
    setLeftPressed(false);
    setRightPressed(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.values}>
        <Text>X : </Text>
        <Text>Y : </Text>
        <Text>Z : </Text>
      </View>
      <View style={styles.push}>
        <Pressable
          style={[styles.Pressable, { backgroundColor: leftPressed ? "#E26EE5" : "#711DB0" }]}
          onPress={handleLeftPress}
        >
          <Text style={styles.textVal}>Left</Text>
        </Pressable>
        <Pressable
          style={[styles.Pressable, { backgroundColor: rightPressed ? "#E26EE5" : "#711DB0" }]}
          onPress={handleRightPress}
        >
          <Text style={styles.textVal}>Right</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: 'flex-end',
  },
  Pressable: {
    width: screenWidth / 2 - 10,
    height: screenHeight / 3 + 20,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 3
  },
  push: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    height: screenHeight / 2,
    width: screenWidth,
  },
  values: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  textVal: {
    color: "white",
    fontWeight: "bold"
  }
});
