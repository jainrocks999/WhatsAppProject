import React from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {View, Text} from 'native-base';
import styles from './styles';
import Colors from '../../common/colors/index';
import {Container, Header, Button, Icon, Fab} from 'native-base';
import {FAB} from 'react-native-paper';

export default class VoiceCallScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode={'cover'}
          source={require('../../assets/Images/profile_pic.jpg')}>
          <View style={styles.header}>
            <TouchableOpacity
              style={{
                height: 30,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  tintColor: 'white',
                }}
                source={require('../../assets/Images/arrow_down1.png')}
              />
            </TouchableOpacity>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  tintColor: 'white',
                  backgroundColor: Colors.darkblue,
                }}
                source={require('../../assets/Images/whatsapp.png')}
              />
              <Text style={{color: 'white', marginLeft: 10}}>
                WhatsApp Voice Call
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: 'white',
              }}>
              <TouchableOpacity
                style={{
                  borderRadius: 50,
                  height: 30,
                  width: 30,
                }}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    tintColor: 'white',
                  }}
                  source={require('../../assets/Image/search.png')}
                  resizeMode={'center'}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                color: 'white',
                marginLeft: 10,
                fontSize: 40,
                fontWeight: 'bold',
              }}>
              Jack Morgan
            </Text>
            <Text style={{color: 'white', marginTop: 10, fontSize: 20}}>
              Ringing
            </Text>
          </View>

          <FAB
            style={{
              backgroundColor: Colors.darkblue,
              position: 'absolute',
              margin: 16,
              height: 70,
              width: 70,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            small
            icon={require('../../assets/Images/call_down.png')}
            onPress={() => console.log('Pressed')}
          />
        </ImageBackground>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="transparent"
          translucent={true}
        />
      </View>
    );
  }
}
