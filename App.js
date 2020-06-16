import 'react-native-gesture-handler';
// The above line MUST be the initial like of code for this file.
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, Button, } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>
        Trelliss Home Screen
      </Text>
      <Image source={require('./assets/TrellissBackground.png')}/>
      <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

function DetailsScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.containerText}>
        Trelliss Details Screen
      </Text>
      <Image source={require('./assets/TrellissBackground.png')}/>
      <Button 
        title="Go to Todo Page"
        onPress={() => navigation.navigate('Todo')}
      />
    </View>
  )
}

function TodoScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.containerText}>
        Trelliss Todo Screen
      </Text>
      <Image source={require('./assets/TrellissBackground.png')}/>
      <Button 
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Welcome!' }} />
        <Stack.Screen name='Details' component={DetailsScreen} />
        <Stack.Screen name='Todo' component={TodoScreen} />
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
