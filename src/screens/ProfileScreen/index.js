import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  FlatList,
  Switch,
} from 'react-native';
import Colors from '../../common/colors/index';
import styles from './styles';

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

var group = [
  {
    groupName: "Club Can't Handle Me",
    groupMembers: 'Pamela,Robert,Jack,Scarlette,Antonio',
    image: require('../../assets/Image/image5.png'),
  },
  {
    groupName: 'Hardest Worker in the Room',
    groupMembers: 'Pamela,Robert,Jack,Scarlette,Antonio',
    image: require('../../assets/Image/image5.png'),
  },
];

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      switch1Value: false,
    };
  }
  toggleSwitch1 = (value) => {
    this.setState({switch1Value: value});
    console.log('Switch 1 is: ' + value);
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
        <ScrollView style={{flex: 1}}>
          <ImageBackground
            style={styles.imageBackground}
            resizeMode={'cover'}
            source={require('../../assets/Images/sunset.jpg')}>
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
                  source={require('../../assets/Images/back.png')}
                />
              </TouchableOpacity>

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
                    height: 40,
                    width: 50,
                  }}>
                  <Image
                    style={{
                      height: '100%',
                      width: '100%',
                      tintColor: 'white',
                    }}
                    source={require('../../assets/Images/camera.png')}
                    resizeMode={'center'}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginLeft: 10,
                    height: 20,
                    width: 10,
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
            </View>
          </ImageBackground>

          <View
            style={{
              marginTop: -80,
              paddingBottom: 80,
              backgroundColor: Colors.darkblue,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{
                marginTop: -50,
                height: 100,
                width: 100,
                borderRadius: 50,
                alignSelf: 'center',
                borderWidth: 2,
                borderColor: 'red',
              }}
              source={require('../../assets/Image/image2.jpg')}
            />
            <Text style={{color: 'white', fontSize: 22, marginTop: 15}}>
              Antonio Washington
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
                marginVertical: 5,
              }}>
              +91 987654321
            </Text>
            <Text style={{color: 'white', fontSize: 16, marginVertical: 10}}>
              Living Life in my own way!
            </Text>
          </View>

          <View
            style={{
              marginTop: -30,
              backgroundColor: '#F8F8F8',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}>
              <View
                style={{
                  marginTop: -35,
                  marginRight: 10,
                  height: 65,
                  width: 65,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  elevation: 5,
                }}>
                <Image
                  style={{
                    height: '100%',
                    width: '100%',
                    tintColor: Colors.darkblue,
                  }}
                  source={require('../../assets/Images/call.png')}
                />
              </View>
              <View
                style={{
                  marginTop: -35,
                  marginRight: 10,
                  height: 65,
                  width: 65,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  elevation: 5,
                }}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    alignSelf: 'center',
                    tintColor: Colors.darkblue,
                  }}
                  source={require('../../assets/Images/chat.png')}
                />
              </View>
              <View
                style={{
                  marginTop: -35,
                  marginRight: 10,
                  height: 65,
                  width: 65,
                  borderRadius: 50,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  elevation: 5,
                }}>
                <Image
                  style={{
                    height: 35,
                    width: 35,
                    alignSelf: 'center',
                    tintColor: Colors.darkblue,
                  }}
                  resizeMode={'contain'}
                  source={require('../../assets/Images/video.png')}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 10,
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: Colors.darkblue,
                }}>
                Media, Links and Docs
              </Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                  }}>
                  312
                </Text>
                <Image
                  style={{height: 20, width: 25}}
                  source={require('../../assets/Images/arrow_right.png')}
                />
              </View>
            </View>
            <FlatList
              data={arr}
              horizontal={true}
              renderItem={({item}) => (
                <View
                  style={{
                    paddingHorizontal: 10,
                    margin: 10,
                    borderWidth: 1,
                    borderRadius: 10,
                    height: 70,
                    width: 70,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{
                      height: '90%',
                      width: '90%',
                      borderColor: 'black',
                    }}
                    source={item.image}
                    resizeMode={'center'}
                  />
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <View
              style={{
                paddingHorizontal: 10,

                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: Colors.darkblue,
                }}>
                Groups in common
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginRight: 10,
                }}>
                2
              </Text>
            </View>

            <FlatList
              style={{
                marginVertical: 10,
                backgroundColor: '#FFFFFF',
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5,
              }}
              data={group}
              renderItem={({item}) => (
                <View
                  style={{
                    paddingHorizontal: 10,
                    flexDirection: 'row',
                    marginVertical: 10,
                    width: '100%',
                    backgroundColor: 'white',
                  }}>
                  <TouchableOpacity
                    style={{
                      borderWidth: 2,
                      borderRadius: 40,
                      borderColor: Colors.darkblue,
                      height: 70,
                      width: '15%',
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
                    }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      {item.groupName}
                    </Text>

                    <Text>{item.groupMembers}</Text>
                  </TouchableOpacity>
                </View>
              )}
              ItemSeparatorComponent={this.FlatListItemSeparator}
              keyExtractor={(item, index) => index}
            />

            <Text
              style={{
                marginVertical: 10,
                paddingHorizontal: 10,
                fontSize: 22,
                fontWeight: 'bold',
                color: Colors.darkblue,
              }}>
              Media,Notifications and Encryptions
            </Text>

            <View
              style={{
                backgroundColor: 'white',
                paddingHorizontal: 10,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                paddingVertical: 10,
                borderTopWidth: 0.5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    alignSelf: 'center',
                    tintColor: Colors.darkblue,
                  }}
                  source={require('../../assets/Images/media.png')}
                />
                <View style={{marginHorizontal: 10}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: Colors.darkblue,
                    }}>
                    Media Visibility
                  </Text>
                  <Text style={{color: Colors.darkGrey}}>
                    Yes, Download all media in device
                  </Text>
                </View>
              </View>
              <Switch
                trackColor={{false: Colors.lightblue, true: Colors.darkblue}}
                thumbColor={
                  this.state.switch1Value ? Colors.lightblue : Colors.darkblue
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={this.toggleSwitch1}
                value={this.state.switch1Value}
              />
            </View>

            <View
              style={{
                backgroundColor: 'white',
                paddingHorizontal: 10,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                paddingVertical: 10,
                borderTopWidth: 0.5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    alignSelf: 'center',
                    tintColor: Colors.darkblue,
                  }}
                  source={require('../../assets/Images/notification.png')}
                />
                <View style={{marginHorizontal: 10}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: Colors.darkblue,
                    }}>
                    Mute Notifications
                  </Text>
                  <Text style={{color: Colors.darkGrey}}>
                    Until I turn back on
                  </Text>
                </View>
              </View>
              <Switch
                trackColor={{false: Colors.lightblue, true: Colors.darkblue}}
                thumbColor={
                  this.state.switch1Value ? Colors.lightblue : Colors.darkblue
                }
                ios_backgroundColor="#3e3e3e"
                onValueChange={this.toggleSwitch1}
                value={this.state.switch1Value}
              />
            </View>

            <View
              style={{
                backgroundColor: 'white',
                paddingHorizontal: 10,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                paddingVertical: 10,
                borderTopWidth: 0.5,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    alignSelf: 'center',
                    tintColor: Colors.darkblue,
                  }}
                  source={require('../../assets/Images/lock.png')}
                />
                <View style={{marginHorizontal: 10, width: '85%'}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: Colors.darkblue,
                    }}>
                    Encription
                  </Text>
                  <Text style={{color: Colors.darkGrey}}>
                    Messages to this chat and calls are secured with end-to-end
                    encryption. Tap to verify
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={{
                marginTop: 10,
                marginVertical: 10,
                flexDirection: 'row',
                backgroundColor: Colors.darkblue,
                borderRadius: 30,
                height: 60,
                marginHorizontal: 10,
                paddingVertical: 10,
              }}>
              <View
                style={{
                  marginHorizontal: 20,
                  flexDirection: 'row',
                  width: '20%',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: 'white',
                  }}
                  source={require('../../assets/Images/block.png')}
                />
              </View>
              <View
                style={{
                  width: '40%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Block
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                marginBottom: 10,
                marginVertical: 10,
                flexDirection: 'row',
                backgroundColor: Colors.darkblue,
                borderRadius: 30,
                height: 60,
                marginHorizontal: 10,
                paddingVertical: 10,
              }}>
              <View
                style={{
                  marginHorizontal: 20,
                  flexDirection: 'row',
                  width: '20%',
                  alignItems: 'center',
                }}>
                <Image
                  style={{
                    height: 30,
                    width: 30,
                    tintColor: 'white',
                  }}
                  source={require('../../assets/Images/dislike.png')}
                />
              </View>
              <View
                style={{
                  width: '40%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Report Contact
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
