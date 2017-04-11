import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;
var HDMainTextColor = 'rgb(105,105,105)'

module.exports = {
	ScreenWidth,
	ScreenHeight,
	ScreenScale,
	HDMainTextColor,
}