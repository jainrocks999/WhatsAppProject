import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {floor} from 'react-native-reanimated';
import styles from './styles';

class RegisterScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image
        style={{height: 25, width: 25, tintColor: 'white'}}
        source={require('../../assets/icons/plus.png')}
      />
    ),
    // drawerLabel: 'Hommme',
    // drawerIcon: ({tintColor}) => (
    //   <Image
    //     style={{
    //       height: 30,
    //       width: 20,
    //       paddingHorizontal: 10,
    //       tintColor: 'white',
    //     }}
    //     source={require('../../assets/Image/bar.png')}
    //   />
    // ),
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => this.props.navigation.toggleDrawer()}>
            <Image
              style={{
                height: 30,
                width: 20,
                paddingHorizontal: 10,
                tintColor: 'white',
              }}
              source={require('../../assets/Image/bar.png')}
            />
            {/* <Icon name="dehaze" color="#fff" size={23} style={{padding: 5}} 
       /> */}
          </TouchableOpacity>
          <Text style={styles.logo}>WhatsApp</Text>
          <TouchableOpacity>
            <Icon
              name="md-search-sharp"
              color="#fff"
              size={30}
              style={{padding: 5}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class StatusScreen extends React.Component {
  static navigationOptions = {
    title: 'Status',
    tabBarIcon: ({tintColor}) => (
      <Image
        style={{height: 25, width: 25, tintColor: 'white'}}
        source={require('../../assets/icons/plus.png')}
      />
    ),
  };

  render() {
    return (
      <View>
        <Text>Status</Text>
      </View>
    );
  }
}
class HearingScreen extends React.Component {
  static navigationOptions = {
    title: 'Hearing',
    tabBarIcon: ({tintColor}) => (
      <Image
        style={{height: 25, width: 25, tintColor: 'white'}}
        source={require('../../assets/icons/plus.png')}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{
              height: 20,
              width: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => this.props.navigation.toggleDrawer()}>
            <Image
              style={{
                height: 30,
                width: 20,
                paddingHorizontal: 10,
                tintColor: 'white',
              }}
              source={require('../../assets/Image/bar.png')}
            />
            {/* <Icon name="dehaze" color="#fff" size={23} style={{padding: 5}} 
       /> */}
          </TouchableOpacity>
          <Text style={styles.logo}>WhatsApp</Text>
          <TouchableOpacity>
            <Icon
              name="md-search-sharp"
              color="#fff"
              size={30}
              style={{padding: 5}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Navegador = createBottomTabNavigator(
  {
    Action: {
      screen: RegisterScreen,
    },
    status: {
      screen: StatusScreen,
    },
    hearing: {
      screen: HearingScreen,
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#fff',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#2D2E5C',
      },
    },
  },
);

export default Navegador;
