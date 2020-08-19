import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import SplashPage from '../screens/splash/index';
import LoginScreen from '../screens/LoginScreen/index';
//import demo from '../screens/demo/demo';
import RecoverPasswordScreen from '../screens/RecoverPassword/index';
import DashboardScreen from '../screens/dashboard/index';
import WebScreen from '../screens/WebScreen/index';
import NewContact from '../screens/NewContact/index';
import NewGroupScreen from '../screens/NewGroupScreen/index';
import StarredMessages from '../screens/StarredMessages/index';
import NewChatScreen from '../screens/NewChatScreen/index';
import NewBroadcastScreen from '../screens/NewBroadcastScreen/index';
import SettingsScreen from '../screens/SettingsScreen/index';
import FeedbackScreen from '../screens/FeedbackScreen/index';
import HelpScreen from '../screens/HelpScreen/index';
import ProfileScreen from '../screens/ProfileScreen/index';
import ChatScreen from '../screens/ChatScreen/index';
import VoiceCallScreen from '../screens/VoiceCallScreen/index';

import TabNavigator from './tabNavigation';

import Registeration from '../screens/registeration/index';
import DemoScreen from '../screens/demo/index';
import DemoS from '../screens/demo/demo';

import Sidebar from '../component/SideBar';
import {Image} from 'react-native';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Recover: {
      screen: RecoverPasswordScreen,
    },
  },
  // {
  //   defaultNavigationOptions: ({navigation}) => {
  //     return {
  //       header: true,
  //       headerTitle: null,
  //     };
  //   },
  // },
);

const ProfileS = createStackNavigator(
  {
    Tab: TabNavigator,
    Chatting: {
      screen: ChatScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
    VoiceCall: {
      screen: VoiceCallScreen,
    },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    // Dashboard: {
    //   screen: DashboardScreen,
    //   navigationOptions: {
    //     drawerLabel: 'Home',
    //     drawerIcon: () => <Icon name="home" size={20} color={'white'} />,
    //   },
    // },
    Tab: {
      screen: ProfileS,
      navigationOptions: {
        drawerLabel: 'Tab',
        drawerIcon: ({tintColor}) => (
          <Icon name="home" size={20} color={tintColor} />
        ),
      },
    },

    Web: {
      screen: WebScreen,
      navigationOptions: {
        title: 'WhatsApp Web',
        drawerLabel: 'WhatsApp Web',
        drawerIcon: () => (
          <Image
            style={{height: 20, width: 20, tintColor: 'white'}}
            source={require('../assets/sidebarImages/barcode.png')}
          />
          //<Icon name="globe-outline" size={20} color={tintColor} />
        ),
      },
    },
    contact: {
      screen: NewContact,
      navigationOptions: {
        drawerLabel: 'New Contact',
        drawerIcon: () => (
          <Image
            style={{height: 20, width: 20, tintColor: 'white'}}
            source={require('../assets/sidebarImages/newcontact.png')}
          />
          //  <Icon name="star-outline" size={20} color={tintColor} />
        ),
      },
    },
    NewGroup: {
      screen: NewGroupScreen,
      navigationOptions: {
        drawerLabel: 'New Group',
        drawerIcon: () => (
          <Image
            style={{height: 20, width: 20, tintColor: 'white'}}
            source={require('../assets/sidebarImages/group.png')}
          />
          //  <Icon name="star-outline" size={20} color={tintColor} />
        ),
      },
    },
    Starred: {
      screen: StarredMessages,
      navigationOptions: {
        drawerLabel: 'Starred Messages',
        drawerIcon: () => (
          <Image
            style={{height: 20, width: 20, tintColor: 'white'}}
            source={require('../assets/sidebarImages/star.png')}
          />
          //  <Icon name="star-outline" size={20} color={tintColor} />
        ),
      },
    },
    NewChat: {
      screen: NewChatScreen,
      navigationOptions: {
        drawerLabel: 'New Chat',
        drawerIcon: () => (
          <Image
            style={{height: 20, width: 20, tintColor: 'white'}}
            source={require('../assets/sidebarImages/chat.png')}
          />
          //  <Icon name="star-outline" size={20} color={tintColor} />
        ),
      },
    },
    Broadcast: {
      screen: NewBroadcastScreen,
      navigationOptions: {
        drawerLabel: 'New Broadcast',
        drawerIcon: () => (
          <Image
            style={{height: 20, width: 20, tintColor: 'white'}}
            source={require('../assets/sidebarImages/broadcast.png')}
          />
          //  <Icon name="star-outline" size={20} color={tintColor} />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        drawerLabel: 'Settings',
        drawerIcon: () => (
          <Image
            style={{height: 20, width: 20, tintColor: 'white'}}
            source={require('../assets/sidebarImages/settings.png')}
          />
          //  <Icon name="star-outline" size={20} color={tintColor} />
        ),
      },
    },
    Feedback: {
      screen: FeedbackScreen,
      navigationOptions: {
        drawerLabel: 'Feedback',
        drawerIcon: () => (
          <Image
            style={{height: 20, width: 20, tintColor: 'white'}}
            source={require('../assets/sidebarImages/group.png')}
          />
          //  <Icon name="star-outline" size={20} color={tintColor} />
        ),
      },
    },
    Help: {
      screen: HelpScreen,
      navigationOptions: {
        drawerLabel: 'Help',
        drawerIcon: () => (
          <Image
            style={{height: 20, width: 20, tintColor: 'white'}}
            source={require('../assets/sidebarImages/help.png')}
          />
          //  <Icon name="star-outline" size={20} color={tintColor} />
        ),
      },
    },
  },
  {
    //contentComponent: (props) => <Sidebar {...props} />,
    contentComponent: Sidebar,
    contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'white',
    },
  },
);

const AuthStack = createSwitchNavigator(
  {
    Demo: DemoS,
    AuthLoading: SplashPage,
    Auth: AuthNavigator,
    Drawer: AppDrawerNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const RootApp = createAppContainer(AuthStack);
export default RootApp;
