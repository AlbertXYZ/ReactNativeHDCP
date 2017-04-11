
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  Image,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

var navStyles = StyleSheet.create({

	// 导航栏样式
	navContainer: {
		backgroundColor: '#81c04d',
		paddingTop: 12,
		paddingBottom: 10,
	},
  	// 导航栏文字样式
  	headText: {
  		color: '#699500',
  		fontSize: 30
  	},
  	title: {
  		color:'white',
  		fontSize:21,
  	},
  	back:{
		height:20,
		width:10,
		paddingBottom:10,
		marginLeft:10,
  	},
  	backButton:{
		height:40,
		width:50,
		marginBottom:0,
		marginLeft:5,
  	},

})

// 导航栏的Mapper
var NavigationBarRouteMapper = {
  // 左键
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <View style={navStyles.navContainer}>
          <TouchableOpacity
            underlayColor='transparent'
            onPress={() => {if (index > 0) {navigator.pop()}}} style={navStyles.backButton}>
			<Image style={navStyles.back} source={require('../resource/white_back_icon.png')}/>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
  },
  // 右键
  RightButton(route, navigator, index, navState) {
    if (route.onPress)
      return (
        <View style={navStyles.navContainer}>
          <TouchableOpacity
            onPress={() => route.onPress()}>
            <Text style={navStyles.rightNavButtonText}>
              {route.rightText || '右键'}
            </Text>
          </TouchableOpacity>
        </View>
      );
  },
  // 标题
  Title(route, navigator, index, navState) {
    return (
      <View style={navStyles.navContainer}>
        <Text style={navStyles.title}>
          {route.title}
        </Text>
      </View>
    );
  }
};

module.exports = {
	navStyles,
	NavigationBarRouteMapper,
}