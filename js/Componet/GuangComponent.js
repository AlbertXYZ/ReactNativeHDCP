import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Navigator,
	TouchableHighlight,
	TouchableOpacity,
	StatusBar,
	Image,
	ScrollView,
	DeviceEventEmitter
} from 'react-native';

import px2dp from '../Utils/px2dp';
import {ScreenHeight,ScreenWidth,HDMainTextColor,theme,HDBGColor,HDThemeColor} from '../CommonStyle/commonStyle';

export default class GuangComponent extends Component {

	render() {
		return (
			<GuangController/>
		);
	};
}

class GuangController extends Component {

	render() {
		return (
			< View style = {
				theme.contailer
			} >
			<View style={theme.actionNavBar}>
                    <Text style={{color: 'white', fontSize: 20}}>逛逛</Text>
                </View>
            < ScrollView style = {
				styles.contailer
				} >
				<View style={{flexDirection: 'row'}}>
					<View style={styles.itemView}>
						<Image style={styles.itemImage} source={require('../resource/GG/interfix_ico_collect.png')}/>
						<Text style={styles.itemText}>菜谱大全</Text>
					</View>
					<View style={styles.itemView}>
						<Image style={styles.itemImage} source={require('../resource/GG/interfix_ico_app.png')}/>
						<Text style={styles.itemText}>APP推荐</Text>
					</View>
					<View style={styles.itemView}>
						<Image style={styles.itemImage} source={require('../resource/GG/interfix_ico_recipe.png')}/>
						<Text style={styles.itemText}>厨房宝典</Text>
					</View>
				</View>
				<View style={{flexDirection: 'row'}}>
					<View style={styles.itemView}>
						<Image style={styles.itemImage} source={require('../resource/GG/interfix_ico_effect.png')}/>
						<Text style={styles.itemText}>营养餐桌</Text>
					</View>
					<View style={styles.itemView}>
						<Image style={styles.itemImage} source={require('../resource/GG/interfix_ico_knowledge.png')}/>
						<Text style={styles.itemText}>食材百科</Text>
					</View>
					<View style={styles.itemView}>
						<Image style={styles.itemImage} source={require('../resource/GG/interfix_ico_suggestion.png')}/>
						<Text style={styles.itemText}>意见反馈</Text>
					</View>
				</View>
				< /ScrollView>
			< /View>
		);
	};
}


var styles = StyleSheet.create({

	contailer: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'column',
		marginTop: 0
	},
	itemView:{
		flex:1,
		height:90,
		flexDirection: 'column',
		alignItems: 'center',
	},
	itemImage:{
		marginTop:15,
		marginLeft:20,
		marginRight:20,
		flex:1
	},
	itemText:{
		textAlign:'center',
		flex:1,
		height:30,
		marginTop:10,
		color:HDMainTextColor
	}
});