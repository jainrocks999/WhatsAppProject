import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import ChatListScreen from '../screens/ChatListScreen/index';
import GroupScreen from '../screens/GroupScreen/index';
import CallScreen from '../screens/CallsScreen/index';
import StoriesScreen from '../screens/StoriesScreen/index';
import ChatScreen from '../screens/ChatScreen/index';
import ProfileScreen from '../screens/ProfileScreen/index';

import Colors from '../common/colors/index';
import {Image} from 'react-native';

const Chatting = createStackNavigator(
  {
    ChatList: {
      screen: ChatListScreen,
      navigationOptions: {
        tabBarLabel: 'Chatttttt',
        tabBarIcon: ({tintColor}) => (
          <Image
            style={{height: 25, width: 25, tintColor: 'white'}}
            source={require('../assets/Images/chat.png')}
          />
        ),
      },
    },
    // Chat: {
    //   screen: ChatScreen,
    // },
    // Profile: {
    //   screen: ProfileScreen,
    // },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Chat: {
      screen: ChatListScreen,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({tintColor}) => (
          <Image
            style={{height: 25, width: 25, tintColor: 'white'}}
            source={require('../assets/Images/chat.png')}
          />
        ),
      },
    },
    Groups: {
      screen: GroupScreen,
      navigationOptions: {
        tabBarLabel: 'GROUPS',
        tabBarIcon: ({tintColor}) => (
          <Image
            style={{height: 30, width: 30, tintColor: 'white'}}
            source={require('../assets/Images/group.png')}
          />
        ),
      },
    },
    Calls: {
      screen: CallScreen,
      navigationOptions: {
        tabBarLabel: 'CALLS',
        tabBarIcon: ({tintColor}) => (
          <Image
            style={{height: 40, width: 40, tintColor: 'white'}}
            source={require('../assets/Images/call.png')}
          />
        ),
      },
    },
    Stories: {
      screen: StoriesScreen,
      navigationOptions: {
        tabBarLabel: 'STORIES',
        tabBarIcon: ({tintColor}) => (
          <Image
            style={{height: 30, width: 30, tintColor: 'white'}}
            source={require('../assets/Images/stories.png')}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#fff',
      labelStyle: {
        fontSize: 14,
      },
      style: {
        backgroundColor: Colors.darkblue,
        height: 70,
      },
    },
  },
);

export default TabNavigator;
