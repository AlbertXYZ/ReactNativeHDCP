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


export default class MainController extends Component {
	
	
	configureScene(route){
		return Navigator.SceneConfigs.PushFromRight;
	};
	renderScene(route, navigator) {
  	  return <route.component navigator={navigator}  {...route.params} />;
 	 }

	render(){

		let defaultName = "HomeController";
		let defaultComponent = HomeController;

		return (
			<Navigator style = {{flex:1}}
              initialRoute={{ title:'首页',name: defaultName, component: defaultComponent }}
              configureScene={this.configureScene}
              renderScene={this.renderScene}
			  navigationBar = {
			  	<Navigator.NavigationBar style = {styles.navContainer}
				routeMapper = {NavigationBarRouteMapper}
				/>
				}
			/>
		);
	};
}

// 导航栏的Mapper
var NavigationBarRouteMapper = {
  // 左键
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      return (
        <View style={styles.navContainer}>
          <TouchableOpacity
            underlayColor='transparent'
            onPress={() => {if (index > 0) {navigator.pop()}}} style={styles.backButton}>
			<Image style={styles.back} source={require('../resource/white_back_icon.png')}/>
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
        <View style={styles.navContainer}>
          <TouchableOpacity
            onPress={() => route.onPress()}>
            <Text style={styles.rightNavButtonText}>
              {route.rightText || '右键'}
            </Text>
          </TouchableOpacity>
        </View>
      );
  },
  // 标题
  Title(route, navigator, index, navState) {
    return (
      <View style={styles.navContainer}>
        <Text style={styles.title}>
          {route.title}
        </Text>
      </View>
    );
  }
};

class HomeController extends Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}
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
	// 导航栏
	navContainer: {
		backgroundColor: '#81c04d',
		paddingTop: 12,
		paddingBottom: 10,
	},
  	// 导航栏文字
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
  	}
});


