import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../common/colors/index';
export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    flex: 1,
  },
  imageBackground: {
    height: 300,
    borderWidth: 2,
  },
  scrollView: {
    paddingHorizontal: 10,
    flex: 1,
  },
  header: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    tintColor: Colors.darkblue,
    resizeMode: 'contain',
    width: 60,
    height: 60,
    //backgroundColor:'black'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  logo: {
    fontSize: 18,
    color: '#fff',
    margin: 10,
    fontWeight: '500',
  },
  profile: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardStyle: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: 60,
    marginHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
  cardContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#b6b6b8',
    padding: 10,
    marginTop: 10,
  },
  cardContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cardItemContainer: {
    width: '25%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  cardItemComponent: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
});
