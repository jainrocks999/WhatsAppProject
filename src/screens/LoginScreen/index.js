import React, {Component} from 'react';
import {Image, View, Text, TextInput, Alert} from 'react-native';
import styles from './style';
import Statusbar from '../../common/Statusbar';
import {CustomButton} from '../../component/Button1';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    headerTransparent: true,
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTitle: null,
  };
  //background: linear-gradient(to right, #373b44, #4286f4);

  render() {
    return (
      <View style={styles.container}>
        <Statusbar />
        <View style={[styles.logoContainer, {marginVertical: 40}]}>
          <Image
            style={styles.logo}
            source={require('../../assets/Images/whatsapp.png')}
            resizeMode={'center'}
          />
          <Text style={styles.text}>WhatsApp</Text>
        </View>

        <Text style={{textAlign: 'center', fontSize: 16}}>
          Login to Your Acoount
        </Text>
        <Text>Phone</Text>

        <View
          style={{
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16}}>+91</Text>
          <Image
            style={{
              height: 15,
              width: 10,
              alignSelf: 'center',
              marginHorizontal: 5,
            }}
            source={require('../../assets/Images/arrow.png')}
          />
          <TextInput />
        </View>
        <CustomButton
          title="Log In"
          onPress={() => this.props.navigation.navigate('Recover')}
          style={{
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginVertical: 40,
          }}
          textStyle={{
            fontSize: 20,

            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        />
      </View>
    );
  }
}
