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
import {TabNames} from '../Utils/Const';

export default class DongTaiComponent	extends Component {

	constructor(props) {
		super(props);
		this.state = {
		
		};
	}
	render(){
		return (
			<DongTaiController navigator = {this.props.navigator}/>
		);
	};
}

class DongTaiController extends Component {

	render() {
		return (
			< View style = {
				theme.contailer
			} >
			<View style={theme.actionNavBar}>
                    <Text style={{color: 'white', fontSize: 20}}>{TabNames[3]}</Text>
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
		marginTop:0,	
	}
});