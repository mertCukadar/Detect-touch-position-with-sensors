import React, { useState } from 'react';
import { View, TextInput, Text , StyleSheet , Button } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

export default function Home({navigation}) {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('first');


  const handleGenderChange = (value) => {
    setGender(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          value={userName}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAge}
          value={age}
          placeholder="Age"
          keyboardType="numeric"
        />
        <View style={styles.radioButtonWrapper}>
          <View style={styles.radioButtonContainer}>
            <RadioButton
              value="first"
              status={gender === 'first' ? 'checked' : 'unchecked'}
              onPress={() => handleGenderChange('first')}
            />
            <Text>Man</Text>
          </View>
          <View style={styles.radioButtonContainer}>
            <RadioButton
              value="second"
              status={gender === 'second' ? 'checked' : 'unchecked'}
              onPress={() => handleGenderChange('second')}
            />
            <Text>Woman</Text>
          </View>
        </View>
        <Button
          title="Submit"
          onPress={() => {
            console.log('Username:', userName);
            console.log('Age:', age);
            navigation.navigate('TestPage');

          }}
          color={'purple'}

        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputWrapper: {
      width: '90%',
      padding: 20,
    },
    input: {
      width: '100%',
      padding: 10,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 5,
      marginBottom: 5,
    },
    radioButtonWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });