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
  ListView,
  PixelRatio,
  Platform
} from 'react-native';

import {ScreenHeight,ScreenWidth,HDMainTextColor,theme,HDBGColor,HDThemeColor,HDHUDTextColor} from '../CommonStyle/commonStyle';
import px2dp from '../Utils/px2dp';
import {TabNames,HDDY01_URL,LoadingKey} from '../Utils/Const';
import Spinner from 'react-native-loading-spinner-overlay';

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
	  	visibleHud: true,
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
		fetch(HDDY01_URL, {
				method:'POST',
				body:formData,	
				headers: {},
			})
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData)
				this.setState({
					visibleHud:false,
					list:responseData.result.list,
					dataSource: this.state.dataSource.cloneWithRows(responseData.result.list)
				})
			}).done();
	}

	selectRows(object,rowID){
		
		if (this.props.navigator) {
			alert(rowID)
		}
	}

	renderRow(object,sectionID, rowID) {
	 	console.log(object.data)
	 	return (
	 		<TouchableOpacity key={rowID} onPress={this.selectRows.bind(this,object,rowID)}>
	 			<DTCell object={object} navigator = {this.props.navigator}/>
	 		</TouchableOpacity>
	 	);
	 }

	render() {

		return (
			< View style = {
				theme.contailer
			} >
			<View style={theme.actionNavBar}>
                    <Text style={theme.navBarText}>{TabNames[3]}</Text>
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

class DTCell extends Component {

	static propTypes = {
	  object: React.PropTypes.object,
	}

	showBigImage(data){

		if (data.HasVideo == 1) {
			console.log(data)
			alert('播放视频')
		} else {
			alert('查看大图')	
		}
		
	}

	render (){
		var object = this.props.object
		return (
			
	 	<View style={{flexDirection: 'column'}}>
			<View style={{flexDirection: 'row'}}>
				<Image style={styles.headerIcon} 
				source = {{uri:object.userInfo.Avatar}} />
				<Text style={styles.userNameText}>
				{object.userInfo.UserName}
				</Text>
				{
					object.userInfo.Vip == 1 
					? <Image style={styles.flagVipIcon} source={require('../resource/DT/VIP@3x.png')}/> 
					: <Image/> 
				}
				{
					object.userInfo.Gender == 1 
					? <Image style={styles.flagGenderIcon} source={require('../resource/DT/女@3x.png')}/> 
					: <Image/> 
				}
			</View>
			<View style={styles.contentView}>
				<Text style={styles.contentTitle}>
					{object.data.Title}
				</Text>
				<Text style={styles.contentText}>
					{object.data.Content}
				</Text>
				<TouchableOpacity onPress = {this.showBigImage.bind(this,object.data)}>
				<Image style={styles.contentImage} source={{uri:object.data.Img}}>
				{
					object.data.HasVideo == 1 ?
					<Image style={{width:50,height:50}} source={require('../resource/DT/播放@3x.png')}></Image>
					:<Image></Image>
				}
				</Image>
				</TouchableOpacity>
				<View style={styles.flagView}>
				<Text style={styles.createTime}>
					{object.data.CreateTime}
				</Text>
				<Image style={styles.diggImage} source={require('../resource/DT/赞@3x.png')}/>
				<Text style={styles.diggText}>
					{object.data.DiggCnt}
				</Text>
				<Image style={styles.commentImage} source={require('../resource/DT/评论@3x.png')}/>
				<Text style={styles.commentText}>
					{object.data.CommentCnt}
				</Text>
				</View>
			</View>

			{
				object.data.CommentCnt > 0 
				? <View style={styles.commentView}>
				{
					object.data.CommentList.map((comment,i)=>{
						return (<Text key={i} style={styles.commentContent}>
						{comment.UserName}:{comment.Content}
						</Text>);
					})
				}
					<Text style={styles.commentAll}>
					查看全部{object.data.CommentCnt}条评论</Text>
					</View>
				: <View></View>
			}
			<View style={styles.cellLine}></View>
		</View>
		
		);
	};

}

var styles = StyleSheet.create({

	contailer:{
		backgroundColor:'white',
		marginTop:px2dp(0),	
	},
	userNameText:{
		color:HDMainTextColor,
		marginLeft:px2dp(15),
		marginTop:px2dp(25),
		fontSize:px2dp(16)
	},
	flagVipIcon:{
		height:px2dp(20),
		width:px2dp(20),
		marginTop:px2dp(20),
		marginLeft:px2dp(20)
	},
	flagGenderIcon:{
		height:px2dp(30),
		width:px2dp(30),
		marginTop:px2dp(16),
		marginLeft:px2dp(5)
	},
	headerIcon:{
		height:px2dp(50),
		width:px2dp(50),
		marginTop:px2dp(15),
		marginLeft:px2dp(15),
   		borderRadius: px2dp(25),
	},
	contentView:{
		flexDirection: 'column',
		marginLeft:px2dp(80),
		marginTop:px2dp(0),
		marginRight:px2dp(20),
	},
	contentTitle:{
		fontSize:18,
		color:'black'
	},
	contentText:{
		fontSize:px2dp(16),
		color:HDMainTextColor,
		marginTop:px2dp(15)
	},
	contentImage:{
		marginTop:px2dp(15),
		marginLeft:px2dp(0),
		marginRight:px2dp(0),
		height:px2dp(120),
		flex: 1,
		alignItems: 'center',
		justifyContent:'center'
	},
	flagView:{
		flexDirection:'row',
		marginTop:px2dp(10)
	},
	createTime:{
		color:HDMainTextColor,
		fontSize:px2dp(15)
	},
	diggImage:{
		width:20,height:px2dp(20),
		marginLeft:px2dp(60)
	},
	diggText:{
		textAlign:'right',
		height:px2dp(20),
		color:HDMainTextColor,
		marginTop:px2dp(3)
	},
	commentImage:{
		width:px2dp(20),
		height:px2dp(20),
		marginLeft:px2dp(10)
	},
	commentText:{
		textAlign:'right',
		height:px2dp(20),
		color:HDMainTextColor,
		marginTop:px2dp(3)
	},
	commentView:{
		flexDirection: 'column',
		marginLeft:px2dp(80),
		marginTop:px2dp(10),
		marginRight:px2dp(20),
		marginBottom:10,
		backgroundColor:'rgb(241,241,241)',
		borderRadius: px2dp(4)
	},
	commentContent:{
		marginLeft:px2dp(15),
		marginTop:px2dp(6),
		color:HDMainTextColor,
		fontSize:px2dp(15)
	},
	commentAll:{
		marginLeft:px2dp(15),
		marginTop:px2dp(10),
		color:HDMainTextColor,
		fontSize:px2dp(15),
		marginBottom:px2dp(6)
	},
	cellLine:{
		backgroundColor:HDBGColor,
		height:px2dp(10),
		flex:1,
		marginBottom:0,
		marginLeft:px2dp(0)
	}
});