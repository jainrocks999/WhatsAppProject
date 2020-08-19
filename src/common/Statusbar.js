import React, {Component} from 'react';

import {StatusBar} from 'react-native';
export default function Status() {
  return (
    <StatusBar
      barStyle="dark-content"
      hidden={false}
      backgroundColor="transparent"
      translucent={true}
    />
  );
}
