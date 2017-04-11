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
  ScrollView,
  DeviceEventEmitter,
  Platform,
  AsyncStorage
} from 'react-native';

import {RequestManager} from '../NetWork/RequestManager';
import {HDHM01_URL} from '../Utils/Const';
import {ScreenHeight,ScreenWidth,HDMainTextColor} from '../CommonStyle/commonStyle';

export default class HomeComponent	extends Component {

	render(){
		return (
			<HomeController navigator = {this.props.navigator}/>
		);
	};
}

class HomeController extends Component{

	constructor(props) {
	  super(props);
	  this.state = {homeObject:null};
	}
	onPressButton(){
		if (this.props.navigator) {
			this.props.navigator.push({title:'列表',name:'ListController',component:ListController,params:{message:'返回'}});
		}
		// this.loadData()
	};
	loadData(){
		//fetch请求
		fetch(HDHM01_URL, {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
			})
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData)
				console.log(responseData.result.collect_list[0])
				this.setState({
					homeObject: responseData
				})
			}).done();
	}
	collectAction(flag){

		// if (this.props.navigator) {
		// 	this.props.navigator.push({title:'列表',name:'ListController',component:ListController,params:{message:'返回'}});
		// }
		if (flag == '1') {
			//排行榜
		}else if(flag == '2'){
			//营养餐桌
		}else if(flag == '3'){
			//热门分类
		}else if(flag == '4'){
			//晒一晒
		}
	}
	render(){
		return (
			<ScrollView style={styles.contailer}>
				<Image source={require('../resource/home_bg.jpg')} style={{height: 200}} />
			    <MenuTag navigator = {this.props.navigator}/>
				<TouchableOpacity onPress={this.onPressButton.bind(this)} style={styles.contentBtn}>
				<Text style={styles.content}>	
				这是第一页
				</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	};
}

class MenuTag extends Component {
	
	collectAction(flag){
		if (this.props.navigator) {
			this.props.navigator.push({title:'列表',name:'ListController',component:ListController,params:{message:'返回'}});
		}
		if (flag == '1') {
			//排行榜
		}else if(flag == '2'){
			//营养餐桌
		}else if(flag == '3'){
			//热门分类
		}else if(flag == '4'){
			//晒一晒
		}
	}

	render(){
		return (
			<View style={{flex: 1, flexDirection: 'row'}}>
			    <TouchableOpacity onPress={this.collectAction.bind(this,'1')}>
			     <View style={styles.menuTag}>
					<Image source={require("../resource/Home/menu_ico_collect.png")} style = {styles.menuIcon}/>
					<Text style={styles.menuTitle}>排行榜</Text>
			     </View>
			     </TouchableOpacity>
			     <TouchableOpacity onPress={this.collectAction.bind(this,'2')}>
			     <View style={styles.menuTag} >
					<Image source={require("../resource/Home/menu_ico_recipe.png")} style = {styles.menuIcon}/>
					<Text style={styles.menuTitle}>营养餐桌</Text>
			     </View>
			     </TouchableOpacity>
			     <TouchableOpacity onPress={this.collectAction.bind(this,'3')}>
			     <View style={styles.menuTag} >
					<Image source={require("../resource/Home/menu_ico_publish.png")} style = {styles.menuIcon}/>
					<Text style={styles.menuTitle}>热门分类</Text>
			     </View>
			     </TouchableOpacity>
			     <TouchableOpacity onPress={this.collectAction.bind(this,'3')}>
			     <View style={styles.menuTag} >
					<Image source={require("../resource/Home/menu_ico_Camera.png")} style = {styles.menuIcon}/>
					<Text style={styles.menuTitle}>晒一晒</Text>
			     </View>
			     </TouchableOpacity>
			    </View>
		);
	};
}

class ListController extends Component{
	constructor(props) {
	  super(props);
	  this.state = {message:''};
	}
	componentDidMount(){
		this.setState({
			message:this.props.message
		});
	}
	pushAction(){
		if (this.props.navigator) {
			this.props.navigator.push({title:'详情',name:'DetailController',component:DetailController,params:{content:'页面二传过来的值'}});
		}
	}

	popAction(){

		if (this.props.navigator) {
			this.props.navigator.pop();
		}
	}

	render(){
		return (
			<View style={styles.contailer}>
				<TouchableHighlight style={styles.contentBtn} onPress={this.pushAction.bind(this)}>
				<Text style={styles.content}>	
				这是第二页
				</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.contentBack} onPress={this.popAction.bind(this)}>
				<Text style={styles.content}>	
				{this.props.message}
				</Text>
				</TouchableHighlight>
			</View>
		);
	};
}


class DetailController extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	content:null
	  };
	}
	
	componentDidMount(){
		this.setState({
			content:this.props.content
		});
	}

	popAction(){
		if (this.props.navigator) {
			this.props.navigator.pop();
		}
	}

	render(){
		return (
			<View style={styles.contailer}>
				<TouchableHighlight style={styles.contentBtn} onPress={this.popAction.bind(this)}>
				<Text style={styles.content}>	
				这是第三页,点击返回
				</Text>
				</TouchableHighlight>
				<TouchableHighlight style={styles.contentBtn} onPress={this.popAction.bind(this)}>
				<Text style={styles.content}>	
				{this.props.content}
				</Text>
				</TouchableHighlight>
			</View>
		);
	};
}

var styles = StyleSheet.create({

	contailer:{
		flex:4,
		backgroundColor:'white',
		flexDirection: 'column',
		marginTop:64,	
	},
	contentBtn:{
		height: 50,
  		marginTop: 10,
    	justifyContent: 'center', // 内容居中显示
    	backgroundColor: '#ff1049',
    	alignItems: 'center'
	},
	content:{
		fontSize:30,
		color:'white',
	},
	menuTag:{
		width: ScreenWidth/4, 
		height: 80,
		flex: 1, 
		flexDirection: 'column',
		alignItems: 'center'
	},
	menuIcon:{
		width:50,height:50,marginTop:10
	},
	menuTitle:{
		alignItems: 'center',marginTop:5,fontSize:15,color:HDMainTextColor
	}	
});