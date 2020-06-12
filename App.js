import 'react-native-gesture-handler';
// The above line MUST be the initial like of code for this file.
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>
        Trelliss Home Screen
      </Text>
      <Image source={require('./assets/TrellissBackground.png')}/>
    </View>
  )
}

function DetailsScreen() {
  return(
    <View style={styles.container}>
      <Text style={styles.containerText}>
        Trelliss Details Screen
      </Text>
      <Image source={require('./assets/TrellissBackground.png')}/>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
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
  containerText:{
    fontWeight: 'bold',
    fontSize: 30,
  }
});
