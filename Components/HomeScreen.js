import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={32} />
      <Text style={styles.home}>Home!</Text>
      <Text>Welcome!</Text>
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  home: {
    fontSize: 48,
    fontWeight: 'bold',
    margin: 20,
  }
})