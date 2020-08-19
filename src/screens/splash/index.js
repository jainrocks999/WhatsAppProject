import React, {Component} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import styles from './style';
import Statusbar from '../../common/Statusbar';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Auth'), 500);
  }

  //background: linear-gradient(to right, #373b44, #4286f4);

  render() {
    return (
      <View style={styles.container}>
        <Statusbar />
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/Images/whatsapp.png')}
          />
          <Text style={styles.text}>WhatsApp</Text>
        </View>
      </View>
    );
  }
}
// Later on in your styles..
