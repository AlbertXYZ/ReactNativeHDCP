import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView
} from 'react-native';

import {theme} from '../CommonStyle/commonStyle';
import px2dp from '../Utils/px2dp';

export default class CategoryComponent	extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		};
	}
	render(){
		return (
			<CategoryController navigator = {this.props.navigator}/>
		);
	};
}

class CategoryController extends Component {

	render() {
		return (
			< View style = {
				theme.contailer
			} >
			<View style={theme.actionNavBar}>
                    <Text style={{color: 'white', fontSize: px2dp(20)}}>分类</Text>
                </View>
            < ScrollView style = {
				styles.contailer
				} >
				< /ScrollView>
			< /View>
		);
	};
}

var styles = StyleSheet.create({
	
	contailer:{
		flex:1,
		backgroundColor:'white',
		flexDirection: 'column',
		marginTop:64,	
	}
});