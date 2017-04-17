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
  ListView
} from 'react-native';

import {theme,HDMainTextColor} from '../CommonStyle/commonStyle';
import px2dp from '../Utils/px2dp';
import {HDCG01_URL} from '../Utils/Const';

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
					dataSource: this.state.dataSource.cloneWithRows(responseData.result.list)
				})
			}).done();
	}
	
	selectRows(){
		alert(11)
	}

	renderRow(cate,sectionID, rowID) {
	 	console.log(cate)
	 	return (
	 	<TouchableOpacity key={sectionID} onPress={this.selectRows}>
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
                    <Text style={{color: 'white', fontSize: px2dp(20)}}>分类</Text>
                </View>
            <ListView style = {styles.contailer}
         	 dataSource={this.state.dataSource}
         	 renderRow={this.renderRow}
      	    />
			< /View>
		);
	};
}

var styles = StyleSheet.create({
	
	contailer:{
		backgroundColor:'white',
		marginTop:0,	
	},
	cateView:{
		height:px2dp(50),justifyContent: 'center',alignItems: 'center',flexDirection: 'row'
	},
	cateImage:{
		backgroundColor:'white',height:px2dp(25),width:px2dp(25),marginLeft:px2dp(15)
	},
	cateText:{
		color:'white',flex:1,marginLeft:px2dp(15),color:HDMainTextColor
	},
	cateEvent:{
		backgroundColor:'white',height:px2dp(20),width:px2dp(20),marginRight:px2dp(15)
	},
	cellLine:{
		backgroundColor:'rgb(200,200,200)',height:px2dp(0.5),flex:1,marginBottom:0,marginLeft:px2dp(15)
	}
});