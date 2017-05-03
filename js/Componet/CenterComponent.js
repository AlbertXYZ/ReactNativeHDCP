import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  ListView,
  Platform,
  PixelRatio
} from 'react-native';

import {theme,ScreenWidth,HDBGColor,HDMainTextColor} from '../CommonStyle/commonStyle';
import px2dp from '../Utils/px2dp';
import {TabNames} from '../Utils/Const';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CenterComponent extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			
		};
	}
	render(){
		return (
			<CenterController navigator = {this.props.navigator}/>
		);
	};
}

class CenterController extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  		items:[{'id':1,'title':'豆友',icon:'hd_dy_icon'},
	  		{'id':2,'title':'动态',icon:'hd_dt_icon'},
	  		{'id':3,'title':'话题',icon:'hd_ht_icon'},
	  		{'id':4,'title':'消息',icon:'hd_xx_icon'},
	  		{'id':5,'title':'设置',icon:'hd_sz_icon'}]
	  };
	}
	
	selectRows(item,rowID){
		
		if (rowID == 0) {
			
		}else if(rowID == 1){
			
		}else if(rowID == 2){
			
		}else if(rowID == 3){
			
		}else if(rowID ==4){

		}
	}

	renderRow(item, rowID) {
	 	console.log(item)
	 	return (
	 	<TouchableOpacity key={rowID} onPress={this.selectRows.bind(this,item,rowID)}>
	 	<View style={{flexDirection: 'row',alignItems:'center',backgroundColor:'white'}}>
	 	{
	 		rowID == 0 
	 		? <Image style = {styles.itemImage} source = {require('../resource/Center/豆友@2x.png')}/>
	 		: <Image />
	 	}
	 	{
	 		rowID == 1 
	 		? <Image style = {styles.itemImage} source = {require('../resource/Center/动态@2x.png')}/>
	 		: <Image />
	 	}
	 	{
	 		rowID == 2 
	 		? <Image style = {styles.itemImage} source = {require('../resource/Center/话题@2x.png')}/>
	 		: <Image />
	 	}
	 	{
	 		rowID == 3 
	 		? <Image style = {styles.itemImage} source = {require('../resource/Center/消息@2x.png')}/>
	 		: <Image />
	 	}
	 	{
	 		rowID == 4 
	 		? <Image style = {styles.itemImage} source = {require('../resource/Center/设置@2x.png')}/>
	 		: <Image />
	 	}
	 	<Text style={styles.itemText}>{item.title}</Text>
			</View>
			<View style={styles.cellLine}></View>
		</TouchableOpacity>
	 	);
	 }

	render() {
		return (
			< View style = {
				theme.contailer
			} >
			<View style={theme.actionNavBar}>
                    <Text style={theme.navBarText}>{TabNames[4]}</Text>
                </View>
            < ScrollView style = {
				styles.contailer
				} >
				<Image  source={require('../resource/home_bg.jpg')} style={styles.headerView}>
      			  <Image source={require('../resource/Center/header.jpg')} style={styles.headerIcon} />
     			 </Image>
     			 <View style={{marginTop:10}}>
				{
					this.state.items.map((item,i) => {
						return this.renderRow(item,i);
					})		
				}
				</View>
				< /ScrollView>
			< /View>
		);
	};
}

var styles = StyleSheet.create({
	contailer:{
		flex:1,
		backgroundColor:HDBGColor,
		flexDirection: 'column',
		marginTop:px2dp(0),	
	},
	headerView:{
		marginTop:px2dp(0),
		height: px2dp(200),
		flexDirection: 'column',
		justifyContent:'center',
		flex:1,
	},
	headerIcon:{
		height: px2dp(80),
		width: px2dp(80),
		marginLeft:(ScreenWidth-80)/2,
		borderColor: '#ff8447',
   		borderRadius: px2dp(40),
   		borderWidth: (Platform.OS==='ios' ? 1.0 : 1.5) / PixelRatio.get()
	},
	listView:{
		marginTop:px2dp(10)
	},
	itemImage:{
		height:px2dp(30),
		width:px2dp(30),
		marginLeft:px2dp(15),
		marginTop:px2dp(10),
		marginBottom:px2dp(10)
	},
	itemText:{
		color:HDMainTextColor,
		fontSize:px2dp(16),
		marginLeft:px2dp(10),
	},
	itemArrow:{
		height:px2dp(25),
		width:px2dp(25),
		marginRight:px2dp(15),

	},
	cellLine:{
		backgroundColor:'rgb(200,200,200)',
		height:px2dp(0.5),
		flex:1,
		marginBottom:px2dp(0),
		marginLeft:px2dp(15)
	}
});