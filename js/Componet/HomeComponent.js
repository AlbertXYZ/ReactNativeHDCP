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
import {HDHM01_URL,TabNames} from '../Utils/Const';
import {ScreenHeight,ScreenWidth,HDMainTextColor,theme,HDBGColor,HDThemeColor} from '../CommonStyle/commonStyle';
import px2dp from '../Utils/px2dp';
import HDNavigationBar from '../Custom/HDNavigationBar';
import BaseComponent from './BaseComponent'
import {PullView} from 'react-native-pull';

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
	  this.state = {
	  	tagList:[],
	  	wikiList:[],
	  	collectList:[]
	};
	}

	componentDidMount(){
        this.loadData()
    }

	onPressButton(){
		// if (this.props.navigator) {
		// 	this.props.navigator.push({title:'列表',name:'ListController',component:ListController,params:{message:'返回'}});
		// }
		//this.loadData()
	};
	loadData(){
		
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
					tagList: responseData.result.tag_list,
					wikiList:responseData.result.wiki_list,
					collectList:responseData.result.collect_list
				})
			}).done();
	}
	collectAction(flag){
		
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
	onPullRelease(resolve) {
	  //do something
	  loadData()
	  setTimeout(() => {
          resolve();
      }, 3000);
	}

	render(){
		return (
			<View style={theme.contailer}>
			<View style={theme.actionNavBar}>
                    <Text style={{color: 'white', fontSize: px2dp(20)}}>{TabNames[0]}</Text>
                </View>
            <PullView onPullRelease={this.onPullRelease}  >
			<ScrollView style={styles.contailer}>
				<Image source={require('../resource/home_bg.jpg')} style={{height: 200}} />
			    <MenuTag navigator = {this.props.navigator}/>
				<TagListView tagList = {this.state.tagList} navigator = {this.props.navigator}/>
				<CollectListView collectList={this.state.collectList} navigator = {this.props.navigator}/>
				<WikiListView wikiList={this.state.wikiList} navigator = {this.props.navigator}/>
			</ScrollView>
			</PullView>
			</View>
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
			<View style={{flexDirection: 'row'}}>
			    <TouchableOpacity onPress={this.collectAction.bind(this,'1')} style={styles.menuTag}>
			     <View >
					<Image source={require("../resource/Home/menu_ico_collect.png")} style = {styles.menuIcon}/>
					<Text style={styles.menuTitle}>排行榜</Text>
			     </View>
			     </TouchableOpacity>
			     <TouchableOpacity onPress={this.collectAction.bind(this,'2')} style={styles.menuTag}>
			     <View>
					<Image source={require("../resource/Home/menu_ico_recipe.png")} style = {styles.menuIcon}/>
					<Text style={styles.menuTitle}>营养餐桌</Text>
			     </View>
			     </TouchableOpacity>
			     <TouchableOpacity onPress={this.collectAction.bind(this,'3')} style={styles.menuTag}>
			     <View>
					<Image source={require("../resource/Home/menu_ico_publish.png")} style = {styles.menuIcon}/>
					<Text style={styles.menuTitle}>热门分类</Text>
			     </View>
			     </TouchableOpacity>
			     <TouchableOpacity onPress={this.collectAction.bind(this,'3')} style={styles.menuTag}>
			     <View>
					<Image source={require("../resource/Home/menu_ico_Camera.png")} style = {styles.menuIcon}/>
					<Text style={styles.menuTitle}>晒一晒</Text>
			     </View>
			     </TouchableOpacity>
			    </View>
		);
	};
}

class TagListView extends Component{

	static propTypes = {
	  tagList: React.PropTypes.array
	}

	tagAction(tagId){
		alert(tagId)
	}

	tagListItem(obj){
		return (<TouchableOpacity 
						style={{flex:1}} key={obj.Id} 
						onPress={this.tagAction.bind(this,obj.Id)}><View 
						style={styles.tagListItem}><Text 
						style={styles.tagListText}>{obj.Name}</Text></View></TouchableOpacity>);
	}

	render(){
		
		return (
			<View style={{flexDirection: 'column',marginTop:10}}>
			<View style={styles.tagListView}>
			{
				this.props.tagList.map((obj,i) => {
					if (i < 4) {
						return 	this.tagListItem(obj);
					}
				})
			}
			</View>
			<View style={{height:1,flex:1,backgroundColor:HDBGColor}}></View>
			<View style={styles.tagListView}>
			{
				this.props.tagList.map((obj,i) => {
					if (i >= 4) {
						return 	this.tagListItem(obj);
					}
				})
			}
			</View>
			</View>
		)
	};
}

class CollectListView extends Component {

	static propTypes = {
		collectList: React.PropTypes.array
	}

	collectAction(cid){
		alert(cid)
	}

	moreCollect(){
		alert('moreCollect')
	}
	render(){
		return (
			<View style={styles.collectView}>
				<Text style={styles.collectText}>菜谱专辑</Text>
				{
					this.props.collectList.map((collect,i) => {
						return (<TouchableOpacity key={i} onPress = {this.collectAction.bind(this,collect.Cid)}><ShowPicTextView data = {collect}/></TouchableOpacity>);
					})
				}
				<ShowMoreView onPress={this.moreCollect.bind(this)} title={'查看全部菜谱'}/>
			</View>
		)
	};
}

class WikiListView extends Component {

	static propTypes = {
		wikiList: React.PropTypes.array
	}
	wikiAction(url){
		alert(url)
	}
	moreWiki(){
		alert('moreWiki')
	}
	render(){
		return (
			<View style={styles.wikiView}>
				<Text style={styles.wikiText}>厨房宝典</Text>
				{
					this.props.wikiList.map((wiki,i) => {
						return (<TouchableOpacity key={i} onPress = {this.wikiAction.bind(this,wiki.Url)}><ShowPicTextView data = {wiki}/></TouchableOpacity>);
					})
				}
				<ShowMoreView onPress={this.moreWiki.bind(this)} title='查看全部宝典'/>
			</View>
		)
	};
}

class ShowPicTextView extends Component{

	static propTypes = {
		data: React.PropTypes.object
	}
	render(){
		var data = this.props.data
		return (<View style={styles.showPicTextView}>
							<Image style={styles.showPic} source={{uri:data.Cover}}/>
							<View style={{flex:1,backgroundColor:'white',flexDirection:'column',}}>
								<Text style={styles.showTitle} numberOfLines={1}>{data.Title}</Text>
								<Text style={styles.showUserName} numberOfLines={2}>by {data.UserName}</Text>
								<Text style={styles.showContent} numberOfLines={2} >{data.Content}</Text>
							</View>
						</View>);
	};
}

class ShowMoreView extends Component {

	static propTypes = {
		title: React.PropTypes.string,
		onPress: React.PropTypes.func
	}

	render(){
		return (
			<View>
			<View style={styles.showMoreView}></View>
				<TouchableOpacity onPress={this.props.onPress}>
				<View style={styles.showMoreSub}>
					<Text style={styles.showMoreText}>{this.props.title}</Text>
					<Image style={styles.showMoreImage} source={require('../resource/ico_more_arrow_right.png')}/>
				</View>
			</TouchableOpacity>
			</View>
		);
	};
}


class ListController extends BaseComponent{
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
  			    <HDNavigationBar title={'列表'} onPress = {this.handleBack.bind(this)}/>
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
		flex:1,
		backgroundColor:HDBGColor,
		flexDirection: 'column',
		marginTop:0
	},
	contentBtn:{
		flex:1,
		height: px2dp(50),
  		marginTop: px2dp(10),
    	backgroundColor: '#ff1049',
    	alignItems: 'center'
	},
	content:{
		marginTop: px2dp(10),
		fontSize:px2dp(30),
		color:'white',
		justifyContent: 'center', // 内容居中显示
	},
	menuTag:{
		height: px2dp(90),
		backgroundColor:'white',
		flex: 1, 
		flexDirection: 'column',
		alignItems: 'center'
	},
	menuIcon:{
		width:px2dp(50),
		height:px2dp(50),
		marginTop:px2dp(10)
	},
	menuTitle:{
		alignItems: 'center',
		marginTop:px2dp(5),
		fontSize:px2dp(15),
		color:HDMainTextColor
	},
	tagListView:{
		backgroundColor:'white',
		height:px2dp(40),
		flex:1,
		flexDirection: 'row',
		alignItems:'center'
	},
	tagListItem:{
		flex:1,
		borderRightWidth:1,
		borderColor:HDBGColor,
		height:px2dp(40),
		justifyContent:'center'
	},
	tagListText:{
		textAlign:'center',
		marginLeft:1,
		marginRight:1,
		color:HDMainTextColor
	},
	collectView:{
		flexDirection:'column',
		marginTop:px2dp(10),
		flex:1,
		backgroundColor:'white',
		marginBottom:px2dp(10)
	},
	collectText:{
		color:HDThemeColor,
		fontSize:px2dp(18),
		marginLeft:px2dp(15),
		marginTop:px2dp(10),
		height:px2dp(20),
		backgroundColor:'white'
	},
	wikiView:{
		flexDirection:'column',
		marginTop:px2dp(10),
		flex:1,
		backgroundColor:'white',
		marginBottom:px2dp(10)
	},
	wikiText:{
		color:HDThemeColor,
		fontSize:px2dp(18),
		marginLeft:px2dp(15),
		marginTop:px2dp(10),
		height:px2dp(20),
		backgroundColor:'white'
	},
	showPicTextView:{
		flex:1,
		marginTop:px2dp(10),
		height:px2dp(100),
		flexDirection:'row'
	},
	showPic:{
		backgroundColor:'white',
		height:px2dp(100),
		width:px2dp(100),
		marginLeft:px2dp(15)
	},
	showTitle:{
		fontSize:px2dp(16),
		marginLeft:px2dp(5),
		marginRight:px2dp(15),
		marginTop:px2dp(5),
		height:px2dp(20),
		color:HDMainTextColor
	},
	showUserName:{
		fontSize:px2dp(16),
		marginLeft:px2dp(5),
		marginRight:px2dp(15),
		marginTop:px2dp(10),
		height:px2dp(20)
	},
	showContent:{
		fontSize:px2dp(16),
		marginLeft:px2dp(5),
		marginRight:px2dp(15),
		marginTop:px2dp(10),
		height:px2dp(40),
		color:HDMainTextColor
	},
	showMoreView:{
		marginLeft:px2dp(15),
		marginTop:px2dp(10),
		height:1,
		backgroundColor:HDBGColor
	},
	showMoreText:{
		flex:1,
		color:HDMainTextColor,
		fontSize:px2dp(15),
		marginLeft:px2dp(15),
		marginTop:px2dp(10),
		height:px2dp(30),
		backgroundColor:'white'
	},
	showMoreImage:{
		height:px2dp(20),
		width:px2dp(20),
		marginRight:px2dp(15)
	},
	showMoreSub:{
		flexDirection:'row',
		flex:1,
		alignItems:'center'
	}
});