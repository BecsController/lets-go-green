import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

//Assets:
const logo = require('../../assets/logo.jpg')

export default class Firstscreen extends React.Component {
  render() {
    return (
      <React.Fragment>
       <View style={styles.container}>
         <View style={styles.insideContainer}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.title}>Are you new here?</Text>
          <Button style={styles.button} title="Sign Up" onPress={() => console.log('Pressed Sign Up')}/>
          <Button style={styles.button} title="Login" onPress={() => console.log('Pressed Login')}/>
         </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2365A3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideContainer: {
    width: 300,
    height: 525,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    marginVertical: 25,
    paddingVertical: 10,
    fontSize: 30,
  },
  button: {
    fontWeight: "700",
    backgroundColor: '#2365A3',
    margin: 25,
    fontSize: 25,
    padding: 10,
  },
  logo: {
    alignSelf: 'center',
    width: 250,
    height: 150,
    padding: 10,
  },
});
