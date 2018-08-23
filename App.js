import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

//Assets:
const logo = require('./assets/logo.jpg')

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
       <View style={styles.container}>
         <View style={styles.title}>
          <Image style={styles.logo} source={logo} />
          <Text>Lets Go Green</Text>
          <Button style={styles.button} title="Enter" onPress={() => console.log('Pressed')}/>
         </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EAD29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: 300,
    height: 525,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#3EAD29',
    alignSelf: 'center',
  },
  button: {
    fontWeight: "700",
    color: '#3EAD29',
  },
  logo: {
    alignSelf: 'center',
    width: 250,
    height: 150,
  },
});
