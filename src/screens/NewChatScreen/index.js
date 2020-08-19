import React from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import Colors from '../../common/colors/index';
import ActionButton from 'react-native-action-button';

var arr = [
  {
    name: 'Scarlette',
    status: `Cant't talk WhatsApp only`,
    image: require('../../assets/Image/image1.png'),
    time: '02:34 PM',
  },
  {
    name: 'Robin',
    status: `Available`,
    image: require('../../assets/Image/image2.jpg'),
    time: '04:49 PM',
  },
  {
    name: 'Abigail',
    status: `Urgent calls only`,
    image: require('../../assets/Image/image3.jpg'),
    time: '05:30 PM',
  },
  {
    name: 'Jack',
    status: `Cant't talk WhatsApp only`,
    image: require('../../assets/Image/image4.jpg'),
    time: '05:04 AM',
  },
  {
    name: 'Robert',
    status: `Available`,
    image: require('../../assets/Image/image5.png'),
    time: '06:49 PM',
  },
  {
    name: 'Pamela',
    status: `Urgent calls only`,
    image: require('../../assets/Image/image4.jpg'),
    time: '05:44 PM',
  },
  {
    name: 'Nicolle',
    status: `Cant't talk WhatsApp only`,
    image: require('../../assets/Image/image5.png'),
    time: '10:55 AM',
  },
  {
    name: 'Tony',
    status: `Available`,
    image: require('../../assets/Image/image4.jpg'),
    time: '03:23 PM',
  },
  {
    name: 'Peter',
    status: `Cant't talk WhatsApp only`,
    image: require('../../assets/Image/image5.png'),
    time: '01:32 PM',
  },
];

export default class NewChat extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image
        style={{height: 30, width: 30, tintColor: 'white'}}
        source={require('../../assets/Images/stories.png')}
        resizeMode={'stretch'}
      />
    ),
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: Colors.darkGrey,
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
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
                height: 30,
                width: 30,
                paddingHorizontal: 10,
                tintColor: 'white',
              }}
              source={require('../../assets/Images/back.png')}
            />
            {/* <Icon name="dehaze" color="#fff" size={23} style={{padding: 5}} 
       /> */}
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                height: 40,
                width: 40,
                paddingHorizontal: 10,
                tintColor: 'white',
              }}
              source={require('../../assets/Images/whatsapp.png')}
            />
            <Text style={styles.logo}>WhatsApp</Text>
          </View>
          <TouchableOpacity>
            <Icon
              name="md-search-sharp"
              color="#fff"
              size={30}
              style={{padding: 5}}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 10,
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 40,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.lightblue,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                marginHorizontal: 10,
                tintColor: Colors.darkblue,
              }}
              source={require('../../assets/Images/group.png')}
            />
            <Text
              style={{fontSize: 18, fontWeight: 'bold', paddingHorizontal: 10}}>
              New Group
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 40,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.lightblue,
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                marginHorizontal: 10,
                tintColor: Colors.darkblue,
              }}
              source={require('../../assets/Images/contact.png')}
            />
            <Text
              style={{fontSize: 18, fontWeight: 'bold', paddingHorizontal: 10}}>
              New Contact
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={{
            marginVertical: 10,
            backgroundColor: '#FFFFFF',
            borderTopWidth: 0.5,
            borderBottomWidth: 0.5,
          }}
          data={arr}
          renderItem={({item}) => (
            <View
              style={{
                paddingHorizontal: 10,
                flexDirection: 'row',
                marginVertical: 10,
                width: '100%',
                backgroundColor: 'white',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  style={{
                    borderWidth: 2,
                    borderRadius: 40,
                    borderColor: Colors.darkblue,
                    height: 70,
                    width: 70,
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
                  }}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    {item.name}
                  </Text>

                  <Text>{item.status}</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 10,
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  style={{
                    height: 50,
                    width: 50,
                    padding: 10,
                    borderRadius: 40,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode={'contain'}
                    style={{
                      height: '100%',
                      width: '100%',
                      tintColor: Colors.darkblue,
                    }}
                    source={require('../../assets/Images/video.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 50,
                    width: 50,
                    padding: 10,
                    borderRadius: 40,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode={'center'}
                    style={{
                      height: '90%',
                      width: '100%',
                      tintColor: Colors.darkblue,
                    }}
                    source={require('../../assets/Images/chat.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
          ListFooterComponent={
            <TouchableOpacity
              style={{
                width: '60%',
                padding: 15,
                borderRadius: 40,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.lightblue,
              }}>
              <Image
                style={{
                  height: 30,
                  width: 30,
                  marginHorizontal: 10,
                  tintColor: Colors.darkblue,
                }}
                source={require('../../assets/sidebarImages/share.png')}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  paddingHorizontal: 10,
                }}>
                Invite Your Friends
              </Text>
            </TouchableOpacity>
          }
          ItemSeparatorComponent={this.FlatListItemSeparator}
          keyExtractor={(item, index) => index}
        />

        <ActionButton
          buttonColor={Colors.darkblue}
          size={70}

          // renderIcon={() => {
          //   <Image
          //     style={{
          //       height: 40,
          //       width: 40,
          //       tintColor: 'red',
          //       backgroundColor: 'yellow',
          //     }}
          //     source={require('../../assets/Images/plus.png')}
          //   />;
          // }}
        >
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
