import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import ActionButton from 'react-native-action-button';
import Colors from '../../common/colors/index';

var arr = [
  {
    name: 'Scarlette',
    message: 'hey, How are you ?',
    image: require('../../assets/Image/image1.png'),
    time: '02:34 PM',
  },
  {
    name: 'Robin',
    message: 'hey, How are you ?',
    image: require('../../assets/Image/image2.jpg'),
    time: '04:49 PM',
  },
  {
    name: 'Abigail',
    message: 'hey, How are you ?',
    image: require('../../assets/Image/image3.jpg'),
    time: '05:30 PM',
  },
  {
    name: 'Jack',
    message: 'hey, How are you ?',
    image: require('../../assets/Image/image4.jpg'),
    time: '05:04 AM',
  },
  {
    name: 'Robert',
    message: 'hey, How are you ?',
    image: require('../../assets/Image/image5.png'),
    time: '06:49 PM',
  },
  {
    name: 'Pamela',
    message: 'hey, How are you ?',
    image: require('../../assets/Image/image4.jpg'),
    time: '05:44 PM',
  },
  {
    name: 'Nicolle',
    message: 'hey, How are you ?',
    image: require('../../assets/Image/image5.png'),
    time: '10:55 AM',
  },
  {
    name: 'Tony',
    message: 'hey, How are you ?',
    image: require('../../assets/Image/image4.jpg'),
    time: '03:23 PM',
  },
  {
    name: 'Peter',
    message: 'hey, How are you ?',
    image: require('../../assets/Image/image5.png'),
    time: '01:32 PM',
  },
];

export default class ChatList extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image
        style={{height: 25, width: 25, tintColor: 'white'}}
        source={require('../../assets/Images/chat.png')}
      />
    ),
  };

  clickHandler = () => {
    //function to handle click on floating Action Button
    Alert.alert('Floating Button Clicked');
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

        <View>
          <FlatList
            data={arr}
            horizontal={true}
            renderItem={({item}) => (
              <View
                style={{
                  margin: 10,
                  borderWidth: 1,
                  borderRadius: 40,
                  height: 70,
                  width: 70,
                }}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    borderRadius: 40,
                    borderColor: 'black',
                  }}
                  source={item.image}
                  resizeMode={'center'}
                />
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View style={{width: '100%'}}>
          <FlatList
            style={{height: '78%'}}
            data={arr}
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  borderBottomWidth: 0.5,
                  width: '100%',
                }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: Colors.darkblue,
                    height: 70,
                    width: '15%',
                  }}
                  onPress={() => {
                    // Alert.alert('hy');
                    this.props.navigation.navigate({
                      routeName: 'Profile',
                      params: {
                        User: item.name,
                        UTime: item.time,
                      },
                    });
                  }}>
                  <Image
                    style={{
                      height: '100%',
                      width: '100%',
                      borderRadius: 40,
                    }}
                    source={item.image}
                    resizeMode={'center'}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    paddingLeft: 10,
                    justifyContent: 'center',
                    width: '80%',
                  }}
                  onPress={() => {
                    // Alert.alert('hy');

                    this.props.navigation.navigate({
                      routeName: 'Chatting',
                      params: {
                        User: item.name,
                        UTime: item.time,
                      },
                    });
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      {item.name}
                    </Text>
                    <Text>{item.time}</Text>
                  </View>
                  <Text>{item.message}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>

        <ActionButton buttonColor={Colors.darkblue}>
          <ActionButton.Item
            buttonColor="white"
            title="New Contact"
            onPress={() => console.log('notes tapped!')}>
            {/* <Icon name="md-create" style={styles.actionButtonIcon} /> */}
            <Image
              style={{height: 25, width: 25, tintColor: Colors.darkblue}}
              source={require('../../assets/sidebarImages/newcontact.png')}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="white"
            title="New Broadcast"
            onPress={() => console.log('notes tapped!')}>
            {/* <Icon name="md-create" style={styles.actionButtonIcon} /> */}
            <Image
              style={{height: 25, width: 25, tintColor: Colors.darkblue}}
              source={require('../../assets/sidebarImages/broadcast.png')}
            />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor="white"
            title="New Chat"
            onPress={() => console.log('notes tapped!')}>
            {/* <Icon name="md-create" style={styles.actionButtonIcon} /> */}
            <Image
              style={{height: 25, width: 25, tintColor: Colors.darkblue}}
              source={require('../../assets/sidebarImages/chat.png')}
            />
          </ActionButton.Item>

          <ActionButton.Item
            buttonColor="white"
            title="New Group"
            onPress={() => console.log('notes tapped!')}>
            {/* <Icon name="md-create" style={styles.actionButtonIcon} /> */}
            <Image
              style={{height: 25, width: 25, tintColor: Colors.darkblue}}
              source={require('../../assets/sidebarImages/group.png')}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}
