import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  FlatList,
  Animated,
  TextInput,
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

export default class Chat extends React.Component {
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
              marginLeft: 10,
              height: 20,
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
              source={require('../../assets/Images/back.png')}
            />
            {/* <Icon name="dehaze" color="#fff" size={23} style={{padding: 5}}
       /> */}
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
              width: '80%',
              borderColor: 'white',
            }}>
            <TouchableOpacity
              style={{
                paddig: 10,
                marginLeft: 10,
                borderRadius: 50,
                borderColor: Colors.darkblue,
                height: 50,
                width: 50,
                borderColor: 'white',
              }}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  borderRadius: 40,
                }}
                source={require('../../assets/Image/image5.png')}
                resizeMode={'center'}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginLeft: 10,
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                {'Jack Morgan'}
              </Text>
              <Text style={{color: 'white'}}>{'02:20 PM'}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('VoiceCall');
              }}
              style={{
                marginLeft: 50,
                borderRadius: 50,
                borderColor: Colors.darkblue,
                height: 50,
                width: 50,
                backgroundColor: Colors.lightblue,
                borderColor: 'white',
              }}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  tintColor: 'white',
                }}
                source={require('../../assets/Images/call.png')}
                resizeMode={'center'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginLeft: 10,
                borderRadius: 50,
                height: 50,
                width: 50,
                backgroundColor: Colors.lightblue,
                borderColor: Colors.darkblue,
                borderColor: 'white',
              }}>
              <Image
                style={{
                  height: '100%',
                  width: '100%',
                  tintColor: 'white',
                }}
                source={require('../../assets/Images/video.png')}
                resizeMode={'center'}
              />
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.logo}>Whatsapp</Text> */}

          <TouchableOpacity
            style={{
              marginLeft: 10,
              height: 20,
              width: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: '100%',
                width: '100%',
                tintColor: 'white',
              }}
              source={require('../../assets/Images/menu1.png')}
            />
            {/* <Icon name="dehaze" color="#fff" size={23} style={{padding: 5}}
       /> */}
          </TouchableOpacity>
        </View>

        <View style={{width: '100%'}}>
          <FlatList
            data={arr}
            renderItem={({item}) => (
              <View
                style={{
                  margin: 10,
                }}>
                <View
                  style={{
                    marginVertical: 10,
                    borderRadius: 10,
                    paddingRight: 10,
                    paddingHorizontal: 10,
                    justifyContent: 'center',
                    borderWidth: 1,
                    width: '80%',
                    paddingVertical: 10,
                  }}>
                  <Text style={{fontSize: 18}}>{item.message}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        marginHorizontal: 5,
                        height: 15,
                        width: 15,
                        alignSelf: 'center',
                      }}
                      source={require('../../assets/Images/clock.png')}
                    />
                    <Text>{item.time}</Text>
                  </View>
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    alignSelf: 'flex-end',
                    justifyContent: 'center',
                    borderWidth: 1,
                    width: '80%',
                    backgroundColor: Colors.darkblue,
                    paddingVertical: 10,
                    borderRadius: 10,
                  }}>
                  <Text style={{fontSize: 18, color: 'white'}}>
                    {item.message}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      style={{
                        marginHorizontal: 5,
                        height: 15,
                        width: 15,
                        alignSelf: 'center',
                        tintColor: 'white',
                      }}
                      source={require('../../assets/Images/clock.png')}
                    />
                    <Text style={{fontSize: 14, color: 'white'}}>
                      {item.time}
                    </Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            width: '100%',
            bottom: 0,
            flexDirection: 'row',
            backgroundColor: 'transparent',
            borderColor: '#fff',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              width: '83%',
              borderRadius: 40,
              backgroundColor: 'white',
              flexDirection: 'row',
              paddingVertical: 5,
              shadowOpacity: 2,
              shadowRadius: 40,
              elevation: 10,
            }}>
            <Image
              style={{
                alignSelf: 'center',
                height: 30,
                width: 30,
                marginLeft: 10,
                tintColor: Colors.grey,
              }}
              source={require('../../assets/Images/smile.png')}
              resizeMode={'contain'}
            />
            <TextInput
              style={{width: '60%', paddingLeft: 10}}
              placeholder={'Type a message'}
            />

            <Image
              style={{
                marginLeft: 10,
                height: 30,
                width: 30,
                alignSelf: 'center',
                tintColor: Colors.grey,
              }}
              source={require('../../assets/Images/attachment.png')}
              resizeMode={'center'}
            />

            <Image
              style={{
                marginLeft: 10,
                height: 25,
                width: 30,
                alignSelf: 'center',
                tintColor: Colors.grey,
              }}
              source={require('../../assets/Images/camera.png')}
              resizeMode={'contain'}
            />
          </View>
          <TouchableOpacity
            style={{
              marginLeft: 10,
              borderRadius: 50,
              height: 60,
              width: 60,
              borderColor: Colors.darkblue,
              backgroundColor: Colors.darkblue,
              borderColor: 'white',
              elevation: 10,
            }}>
            <Image
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 50,
                tintColor: 'white',
              }}
              source={require('../../assets/Images/mic.png')}
              resizeMode={'center'}
            />
          </TouchableOpacity>
        </View>

        <Animated.View
          style={{
            position: 'absolute',
            bottom: 100,
            right: 20,
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 40,
            width: 60,
            height: 60,
            shadowRadius: 4,
            shadowOpacity: 1,
            borderRadius: 40,
            elevation: 10,
          }}>
          <TouchableWithoutFeedback onPress={() => Alert.alert('saveIconn')}>
            <Animated.View
              style={{
                backgroundColor: 'white',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                shadowRadius: 4,
                shadowOpacity: 1,
                borderRadius: 40,
                borderBottomColor: 12,
                width: '100%',
                height: '100%',
                elevation: 10,
              }}>
              <Image
                style={{
                  width: 40,
                  height: 40,
                  tintColor: Colors.darkblue,
                }}
                resizeMode="contain"
                source={require('../../assets/Images/arrow_down.png')}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    );
  }
}

// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   View,
//   Animated,
//   Image,
//   ImageBackground,
//   Text,
//   TouchableWithoutFeedback,
//   Alert,
// } from 'react-native';

// export default class ActionButton extends Component {
//   state = {
//     animation: new Animated.Value(0),
//   };
//   render() {
//     return (
//       <View style={styles.container}>
//         <Animated.View
//           style={{
//             position: 'absolute',
//             bottom: 20,
//             right: 20,
//             alignItems: 'center',
//             alignSelf: 'center',
//             borderRadius: 40,
//             width: 70,
//             height: 70,
//           }}>
//           <TouchableWithoutFeedback onPress={() => Alert.alert('saveIconn')}>
//             <Animated.View
//               style={{
//                 backgroundColor: 'grey',
//                 position: 'absolute',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 alignSelf: 'center',
//                 shadowRadius: 4,
//                 shadowOpacity: 1,
//                 borderRadius: 40,
//                 borderBottomColor: 12,
//                 width: '100%',
//                 height: '100%',
//               }}>
//               <Image
//                 style={{
//                   width: 40,
//                   height: 40,
//                 }}
//                 resizeMode="contain"
//                 source={require('../../assets/Images/arrow_down.png')}
//               />
//             </Animated.View>
//           </TouchableWithoutFeedback>
//         </Animated.View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
