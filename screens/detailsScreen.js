import 'react-native-gesture-handler';
// The above line MUST be the initial like of code for this file.
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Image, Button, } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return(
    <View style={styles.container}>
      <Text style={styles.containerText}>
        Trelliss Details Screen
      </Text>
      <Image source={require('./../assets/TrellissBackground.png')}/>
      <Button 
        title="Go to Todo Page"
        onPress={() => navigation.navigate('Todo')}
      />
    </View>
  )
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
