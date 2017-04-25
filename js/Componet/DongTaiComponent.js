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

import {ScreenHeight,ScreenWidth,HDMainTextColor,theme,HDBGColor,HDThemeColor} from '../CommonStyle/commonStyle';
import px2dp from '../Utils/px2dp';
import {TabNames,HDDY01_URL} from '../Utils/Const';

export default class DongTaiComponent extends Component {

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

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	list:[],
	  	dataSource: new ListView.DataSource({
      	  rowHasChanged: (row1, row2) => row1 !== row2
        })
	  };
	}

	componentDidMount(){
		this.loadData();
	}

	loadData(){
		
		let formData = new FormData();  
		formData.append("sign","4864f65f7e5827e7ea50a48bb70f7a2a");  
		formData.append("limit","20"); 
		formData.append("offset","0"); 
		formData.append("uid","8752979"); 
		formData.append("timestamp","1493083021"); 
		fetch('http://api.haodou.com/index.php?appid=4&appkey=573bbd2fbd1a6bac082ff4727d952ba3&appsign=e746a91c3454fce7470904efc64a06c3&channel=appstore&deviceid=0f607264fc6318a92b9e13c65db7cd3c%7C65E9FB11-64B3-4B5C-A62C-4B53FD796AC4%7C97F90A81-F659-474D-B27E-BE58CDFF30C0&format=json&loguid=8752979&method=UserFeed.getFollowUserFeed&nonce=1458377095&sessionid=1458376760&signmethod=md5&timestamp=1458377095&uuid=7408f5dd81db1165cd1896e8175a75e4&v=2&vc=46&vn=v6.0.3', {
				method:'POST',
				body:formData,	
				headers: {},
			})
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData)
				this.setState({
					list:responseData.result.list,
					dataSource: this.state.dataSource.cloneWithRows(responseData.result.list)
				})
			}).done();
	}

	selectRows(cate,rowID){
		
		if (this.props.navigator) {
			this.props.navigator.push({title:'详情',name:'CategoryListController',component:CategoryListController,args:{tagList:cate.Tags,title:cate.Cate}});
		}
	}

	renderRow(object,sectionID, rowID) {
	 	console.log(object.userInfo)
	 	return (
	 	<TouchableOpacity key={rowID} onPress={this.selectRows.bind(this,object,rowID)}>
	 	<View style={{flexDirection: 'column'}}>
			<View style={{flexDirection: 'row'}}>
				<Image style={{height:50,width:50,marginTop:15,marginLeft:15,backgroundColor:'red'}} 
				source = {{uri:object.userInfo.Avatar}} />
				<Text style={{color:HDMainTextColor,marginLeft:15,marginTop:15}}>
				{object.userInfo.UserName}
				</Text>
	
			</View>
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
                    <Text style={{color: 'white', fontSize: 20}}>{TabNames[3]}</Text>
                </View>
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
		marginTop:0,	
	}
});