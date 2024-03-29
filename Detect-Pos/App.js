import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/HomePage/home';
import Test from './Screens/TestPage/testPage';
import { AxiosProvider } from './Context/axiosContext';

const Stack = createNativeStackNavigator();

const AppWrapper = () => {
  return (
    <AxiosProvider>
      <App />
    </AxiosProvider>
  );
}

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TestPage" component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppWrapper;