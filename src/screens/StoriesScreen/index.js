import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default class Stories extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image
        style={{height: 30, width: 30, tintColor: 'white'}}
        source={require('../../assets/Images/stories.png')}
        resizeMode={'stretch'}
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
              source={require('../../assets/Images/bar.png')}
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
        <Text>Stories</Text>
      </View>
    );
  }
}
