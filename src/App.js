import React from 'react';
import { StyleSheet,SafeAreaView } from 'react-native';
import Card from './components/Card';

const App = () => {
 

  return (
    <SafeAreaView style={styles.container}>
     <Card/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"black",
  height:"100%",
position:"relative"}
});

export default App;