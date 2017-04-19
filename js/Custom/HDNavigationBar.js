import React, { Component ,PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Platform
} from 'react-native';

import {ScreenHeight,ScreenWidth,HDMainTextColor,HDThemeColor,theme} from '../CommonStyle/commonStyle';
import px2dp from '../Utils/px2dp';

export default class HDNavigationBar extends Component {

	static propTypes = {
	  title: PropTypes.string,
	  onPress: PropTypes.func
	};
	render(){
		return (
			<View style={styles.actionNavBar}>
					<TouchableOpacity onPress={this.props.onPress}><Image style={styles.backBtn} source={require('../resource/hd_back_icon.png')} /></TouchableOpacity>
                    <Text style={styles.text}>{this.props.title}</Text>
                </View>
		);
	};
}

var styles = StyleSheet.create({
	backBtn:{
		height:28,
		width:28,
		paddingBottom:8,
		marginLeft:10
	},
	actionNavBar: {
        height: (Platform.OS === 'android') ? px2dp(49) : px2dp(64),
        backgroundColor: HDThemeColor,
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: (Platform.OS === 'ios') ? px2dp(20) : 0
    },
    text:{
    	color: 'white', 
    	fontSize: px2dp(20),
    	marginRight:38,
    	textAlign:'center',
      flex:1
    }
})