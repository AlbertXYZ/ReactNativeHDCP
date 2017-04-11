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
import {
	navStyles,
	NavigationBarRouteMapper
} from './NavigationConfig';

export default class CenterComponent	extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectTitle: '我的'
		};
	}
	configureScene(route) {
		return Navigator.SceneConfigs.PushFromRight;
	}
	renderScene(route, navigator) {
		return <route.component navigator = {
			navigator
		} {...route.params
		}
		/>;
	}
	render() {

		let defaultName = "CenterController";
		let defaultComponent = CenterController;

		return ( < Navigator style = {
				{
					flex: 1
				}
			}
			initialRoute = {
				{
					title: this.state.selectTitle,
					component: defaultComponent
				}
			}
			configureScene = {
				this.configureScene
			}
			renderScene = {
				this.renderScene
			}
			s navigationBar = { < Navigator.NavigationBar style = {
					navStyles.navContainer
				}
				routeMapper = {
					NavigationBarRouteMapper
				}
				/>
			}
			/>
		);
	};
}

class CenterController extends Component {

	render() {
		return (

			< ScrollView style = {
				styles.contailer
			} >
			< /ScrollView>
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
});