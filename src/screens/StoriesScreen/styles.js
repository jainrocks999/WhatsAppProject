import React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../common/colors/index';
export default styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: Colors.darkblue,
    borderColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  logo: {
    fontSize: 18,
    color: '#fff',
    margin: 10,
    fontWeight: '500',
  },
  container: {backgroundColor: '#F6F6F6', flex: 1},
  imageBackground: {flex: 1, height: '50%', width: '100%'},
  scrollView: {paddingHorizontal: 10, flex: 1},
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
