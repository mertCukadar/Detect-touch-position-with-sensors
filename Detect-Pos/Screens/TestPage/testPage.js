import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { useSensor } from '../../Component/Sensors';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Test() {
  const [leftPressed, setLeftPressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);

  const sensorData = useSensor();


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
      <View style={styles.valuesWrapper}>
      <Text style={{fontWeight: "bold"}}>Accelerometer</Text>
      <View style={styles.values}>
        <Text>X : {sensorData.accelerometerData.x}</Text>
        <Text>Y : {sensorData.accelerometerData.y}</Text>
        <Text>Z : {sensorData.accelerometerData.z}</Text>
      </View>
      <Text style={{fontWeight: "bold"}}>Gyroscope</Text>
      <View style={styles.values}>
        <Text>X : {sensorData.gyroscopeData.x}</Text>
        <Text>Y : {sensorData.gyroscopeData.y}</Text>
        <Text>Z : {sensorData.gyroscopeData.z}</Text>
      </View>
      <Text style={{fontWeight: "bold"}}>Magnetometer</Text>
      <View style={styles.values}>
        <Text>X : {sensorData.magnetometerData.x}</Text>
        <Text>Y : {sensorData.magnetometerData.y}</Text>
        <Text>Z : {sensorData.magnetometerData.z}</Text>
      </View>
      </View>
      <View style={styles.push}>
        <Pressable
          style={[styles.Pressable, { backgroundColor: leftPressed ? "#711DB0" : "purple"}]}
          onPress={handleLeftPress}
        >
          <Text style={styles.textVal}>Left</Text>
        </Pressable>
        <Pressable
          style={[styles.Pressable, { backgroundColor: rightPressed ? "#711DB0" : "purple" }]}
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
    backgroundColor: "#F3F8FF",
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
    width: screenWidth - 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "black",
  },
  textVal: {
    color: "white",
    fontWeight: "bold"
  },
  valuesWrapper: {
    width: screenWidth,
    height: screenHeight / 3,
    justifyContent: "center",
    alignItems: "center",
  }
});
