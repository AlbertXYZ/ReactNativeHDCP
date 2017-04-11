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
  DeviceEventEmitter
} from 'react-native';

import {navStyles,NavigationBarRouteMapper} from './NavigationConfig';

export default class HomeComponent	extends Component {

	constructor(props) {
	  super(props);
	  this.state = {selectTitle:'首页'};
	}
	configureScene(route){
		return Navigator.SceneConfigs.PushFromRight;
	}
	renderScene(route, navigator) {
		  return <route.component navigator={navigator}  {...route.params} />;
	}
	render(){

		let defaultName = "HomeController";
		let defaultComponent = HomeController;

		return (
			<Navigator style = {{flex:1}}
	              initialRoute={{title: this.state.selectTitle, component: defaultComponent }}
	              configureScene={this.configureScene}
	              renderScene={this.renderScene}
				  navigationBar = {
				  	<Navigator.NavigationBar style = {navStyles.navContainer}
					routeMapper = {NavigationBarRouteMapper}
					/>
				}
			/>
		);
	};
}

class HomeController extends Component{

	onPressButton(){
		if (this.props.navigator) {
			this.props.navigator.push({title:'列表',name:'ListController',component:ListController,params:{message:'返回'}});
		}
	};
	render(){
		return (
			<ScrollView style={styles.contailer}>
				<TouchableOpacity onPress={this.onPressButton.bind(this)} style={styles.contentBtn}>
				<Text style={styles.content}>	
				这是第一页
				</Text>
				</TouchableOpacity>
			</ScrollView>
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
  	container: {  
        flex: 1  
    },  
    stateContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabText: {  
        color: 'rgb(105,105,105)',  
        fontSize: 13  
    },  
    selectedTabText: {  
        color: '#81c04d',  
        fontSize: 13  
    },  
    icon: {  
        width: 20,  
        height: 20  
    }  
});