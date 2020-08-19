import React, {Component} from 'react';
import {Image, View, Text, TextInput, Alert} from 'react-native';
import styles from './style';
import Statusbar from '../../common/Statusbar';
import {CustomButton} from '../../component/Button1';

export default class RecoverPasswordScreen extends React.Component {
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
          Recover your Password
        </Text>
        <Text>Phone</Text>

        <View
          style={{
            borderBottomWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput />
        </View>
        <Text style={{marginTop: 20, marginBottom: 10}}>Enter 6 digit OTP</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <View style={styles.otpContainer}>
            <Text>8</Text>
          </View>
          <View style={styles.otpContainer}>
            <Text>9</Text>
          </View>
          <View style={styles.otpContainer}>
            <Text>6</Text>
          </View>
          <View style={styles.otpContainer}>
            <Text>4</Text>
          </View>
          <View style={styles.otpContainer}>
            <Text>8</Text>
          </View>
          <View style={styles.otpContainer}>
            <Text>9</Text>
          </View>
        </View>
        <Text style={{fontSize: 12, marginVertical: 5}}>
          You can send again, if you have not recieved OTP sent on your
          registered device. {'Send Request'}
        </Text>
        <CustomButton
          title="Verify"
          onPress={() => this.props.navigation.navigate('Drawer')}
          style={{
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: 20,
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
