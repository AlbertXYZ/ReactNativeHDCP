import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  ListView
} from 'react-native';

import {theme,HDMainTextColor,HDThemeColor,HDHUDTextColor} from '../CommonStyle/commonStyle';
import px2dp from '../Utils/px2dp';
import {HDCG01_URL,TabNames,LoadingKey} from '../Utils/Const';
import CategoryListController from './CategoryListController';
import Spinner from 'react-native-loading-spinner-overlay';

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

	constructor(props) {
	  super(props);
	  
	  this.state = {
	  	visibleHud: true,
	  	dataSource: new ListView.DataSource({
      	  rowHasChanged: (row1, row2) => row1 !== row2
        })
	  };
	}

	componentDidMount(){
		this.loadData()
	}

	loadData(){

		fetch(HDCG01_URL, {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
			})
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData)
				console.log(responseData.result.list[0])
				this.setState({
					visibleHud:false,
					dataSource: this.state.dataSource.cloneWithRows(responseData.result.list)
				})
			}).done();
	}
	
	selectRows(cate,rowID){
		
		if (this.props.navigator) {
			this.props.navigator.push({title:'详情',name:'CategoryListController',component:CategoryListController,args:{tagList:cate.Tags,title:cate.Cate}});
		}
	}

	renderRow(cate,sectionID, rowID) {
	 	console.log(cate)
	 	return (
	 	<TouchableOpacity key={rowID} onPress={this.selectRows.bind(this,cate,rowID)}>
	 	<View style={{flexDirection: 'column'}}>
			<View style={styles.cateView}>
			<Image style={styles.cateImage} source = {{uri:cate.ImgUrl}}
			/><Text style={styles.cateText}>{cate.Cate}</Text>
			<Image style={styles.cateEvent} source = {require('../resource/ico_more_arrow_right.png')}/>
			</View>
			<View style={styles.cellLine}></View>
			</View>
		</TouchableOpacity>
	 	);
	 }

	render() {
		return (
			< View style = {
				theme.contailer
			} >
			<View style={theme.actionNavBar}>
                    <Text style={theme.navBarText}>{TabNames[2]}</Text>
                </View>
            <Spinner visible={this.state.visibleHud} textContent={LoadingKey} textStyle={{color: HDHUDTextColor}} />
            <ListView style = {styles.contailer}
         	 dataSource={this.state.dataSource}
         	 renderRow={this.renderRow.bind(this)}
      	    />
			< /View>
		);
	};
}

var styles = StyleSheet.create({
	
	contailer:{
		backgroundColor:'white',
		marginTop:px2dp(0),	
	},
	cateView:{
		height:px2dp(44),
		alignItems: 'center',
		flexDirection: 'row'
	},
	cateImage:{
		backgroundColor:'white',
		height:px2dp(25),
		width:px2dp(25),
		marginLeft:px2dp(15)
	},
	cateText:{
		flex:1,
		marginLeft:px2dp(15),
		color:HDMainTextColor
	},
	cateEvent:{
		backgroundColor:'white',
		height:px2dp(20),
		width:px2dp(20),
		marginRight:px2dp(15)
	},
	cellLine:{
		backgroundColor:'rgb(200,200,200)',
		height:px2dp(0.5),
		flex:1,
		marginBottom:0,
		marginLeft:px2dp(15)
	}
});