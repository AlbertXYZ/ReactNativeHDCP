import React, { Component } from 'react';
import {
  StyleSheet,
  Platform
} from 'react-native';

import px2dp from '../Utils/px2dp';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
var HDMainTextColor = 'rgb(105,105,105)'
var HDThemeColor = '#81c04d'
var HDBGColor = 'rgb(241,241,241)'

var theme = StyleSheet.create({
    actionNavBar: {
        height: (Platform.OS === 'android') ? px2dp(49) : px2dp(64),
        backgroundColor: HDThemeColor,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS === 'ios') ? px2dp(20) : 0
        },
    contailer:{
        flex:1,
         backgroundColor:HDBGColor
         },
    navBarText:{
        color: 'white',
        fontSize: px2dp(20)
    }
  })

module.exports = {
	ScreenWidth,
	ScreenHeight,
	ScreenScale,
	HDMainTextColor,
  HDThemeColor,
  theme,
  HDBGColor
}