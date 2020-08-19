import React, {Component} from 'react';
import {SafeAreaView, View, Image, Text, StyleSheet} from 'react-native';
import {
  TouchableNativeFeedback,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {DrawerItems} from 'react-navigation-drawer';

export default class CustomDrawerContentComponent extends Component {
  render() {
    const {theme, user} = this.props;
    const ripple = TouchableNativeFeedback.Ripple('#adacac', false);

    return (
      <ScrollView style={{flex: 1, backgroundColor: '#001a33'}}>
        <SafeAreaView>
          <TouchableOpacity
            style={styles.DrawerHeader}
            onPress={() => {
              console.log('text');
            }}>
            <View style={styles.imageView}>
              <Image
                source={require('../../src/assets/Image/p1.jpg')}
                style={styles.image}
              />
            </View>
            <View style={{margin: 10}}>
              <Text style={{color: 'white', fontSize: 25}}>Deepain Jindal</Text>
              <Text style={{color: 'white'}}>Available</Text>
            </View>
          </TouchableOpacity>

          {/* <DrawerNavigatorItems {...props} /> */}
          <DrawerItems {...this.props} />

          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
            }}>
            <Image
              style={{height: 20, width: 20, tintColor: 'white'}}
              source={require('../assets/sidebarImages/share.png')}
            />
            <Text
              style={{
                color: 'white',
                paddingHorizontal: 30,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Invite a Friend
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}>
            <Image
              style={{height: 20, width: 20, tintColor: 'white'}}
              source={require('../assets/sidebarImages/logout.png')}
            />
            <Text
              style={{
                color: 'white',
                paddingHorizontal: 30,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Logout
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              paddingVertical: 20,
            }}>
            <Image
              style={{height: 40, width: 40, tintColor: 'white'}}
              source={require('../assets/Images/whatsapp.png')}
            />
            <Text
              style={{
                color: 'white',
                paddingHorizontal: 30,
                fontWeight: 'bold',
                fontSize: 22,
                textAlignVertical: 'center',
              }}>
              WhatsApp
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              paddingBottom: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 12,
                textAlignVertical: 'center',
              }}>
              2020 @ WhatsApp Inc.
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 12,
                textAlignVertical: 'center',
                paddingLeft: 10,
              }}>
              Privcay
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 12,
                textAlignVertical: 'center',
                paddingHorizontal: 10,
              }}>
              Terms of Use
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  DrawerHeader: {
    width: '100%',
    backgroundColor: '#001a33',
    padding: 10,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  imageView: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
});
