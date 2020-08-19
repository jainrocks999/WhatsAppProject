import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import Colors from '../common/Colors';

export const CustomButton = (props) => {
  const {title = 'Enter', style = {}, textStyle = {}, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    //justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    alignSelf: 'center',
    fontFamily: 'SourceSansPro',
    fontWeight: 'bold',
  },
});
