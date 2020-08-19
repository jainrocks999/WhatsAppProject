import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,

    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
  logo: {
    height: '60%',
    width: '60%',
    tintColor: 'white',
  },
  text: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
