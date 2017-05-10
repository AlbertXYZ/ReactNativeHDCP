import React, {
	Component
} from 'react';
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

import px2dp from '../Utils/px2dp';
import {ScreenHeight,ScreenWidth,HDMainTextColor,theme,HDBGColor,HDThemeColor,HDHUDTextColor} from '../CommonStyle/commonStyle';
import {HDGG01_URL,TabNames,LoadingKey} from '../Utils/Const';
import {PullView} from 'react-native-pull';
import Spinner from 'react-native-loading-spinner-overlay';

export default class GuangComponent extends Component {

	render() {
		return (
			<GuangController/>
		);
	};
}

class GuangController extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {
	  		tagNames:['菜谱大全','APP推荐','厨房宝典','营养餐桌','食材百科','意见反馈'],
	  		list:[],
	  		visibleHud: true
	  };
	}

	componentDidMount(){
		this.loadData();
	}

	loadData(){

		fetch(HDGG01_URL, {
				method: 'GET',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
			})
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData)
				this.setState({
					list:responseData.result.list,
					visibleHud:false
				})
				
			}).done();
	}

	itemAction(flag){  

		switch(flag){
			case 1:
			alert('菜谱大全')	
			break;
			case 2:
			alert('APP推荐')	
			break;
			case 3:
			alert('厨房宝典')	
			break;
			case 4:
			alert('营养餐桌')	
			break;
			case 5:
			alert('食材百科')	
			break;
			case 6:
			alert('意见反馈')		
			break;
			default:
			return
		}
	}

	render() {

		return (
			< View style = {
				theme.contailer
			} >
			<View style={theme.actionNavBar}>
                    <Text style={theme.navBarText}>{TabNames[1]}</Text>
            </View>
            <Spinner visible={this.state.visibleHud} textContent={LoadingKey} textStyle={{color: HDHUDTextColor}} />
            < ScrollView style = {
				styles.contailer
				} >
				<View style={styles.item}>
					
					<View style={styles.itemView}>
					<TouchableOpacity onPress={this.itemAction.bind(this,1)}  >
						<View>
						<Image style={styles.itemImage} source={require('../resource/GG/interfix_ico_collect.png')}/>
						<Text style={styles.itemText}>{this.state.tagNames[0]}</Text>
						</View>
					</TouchableOpacity>
					</View>
					<View style={styles.itemView}>
					<TouchableOpacity onPress={this.itemAction.bind(this,2)}>
						<View>
						<Image style={styles.itemImage} source={require('../resource/GG/interfix_ico_app.png')}/>
						<Text style={styles.itemText}>{this.state.tagNames[1]}</Text>
						</View>
					</TouchableOpacity>
					</View>
					<View style={styles.itemView}>
					<TouchableOpacity onPress={this.itemAction.bind(this,3)}>
						<View>
						<Image style={styles.itemImage} source={require('../resource/GG/interfix_ico_recipe.png')}/>
						<Text style={styles.itemText}>{this.state.tagNames[2]}</Text>
						</View>
					</TouchableOpacity>
					</View>
					
				</View>
				<View style={styles.line} ></View>
				<View style={styles.item}>
					
					<View style={styles.itemView}>
					<TouchableOpacity onPress={this.itemAction.bind(this,4)}>
						<View>
						<Image style={styles.itemImage} source={require('../resource/GG/interfix_ico_effect.png')}/>
						<Text style={styles.itemText}>{this.state.tagNames[3]}</Text>
						</View>
					</TouchableOpacity>
					</View>
					
					
					<View style={styles.itemView}>
					<TouchableOpacity onPress={this.itemAction.bind(this,5)}>
						<View>
						<Image style={styles.itemImage} source={require('../resource/GG/interfix_ico_knowledge.png')}/>
						<Text style={styles.itemText}>{this.state.tagNames[4]}</Text>
						</View>
					</TouchableOpacity>
					</View>
					
					<View style={styles.itemView}>
					<TouchableOpacity onPress={this.itemAction.bind(this,6)}>
						<View>
						<Image style={styles.itemImage} source={require('../resource/GG/interfix_ico_suggestion.png')}/>
						<Text style={styles.itemText}>{this.state.tagNames[5]}</Text>
						</View>
					</TouchableOpacity>
					</View>
					
				</View>
				<View style={{flexDirection: 'column'}}>
					{
						this.state.list.map((object,i) => {
						return (<ImageTextView key={i} data={object} navigator = {this.props.navigator}/>);
					})
				}
				</View>
				< /ScrollView>
			< /View>
		);
	};
}

class ImageTextView extends Component {

	static propTypes = {
	  data: React.PropTypes.object
	}

	listItemSelectEvent(url){
		alert(url)
	}

	render(){
		return (
			<TouchableOpacity onPress={this.listItemSelectEvent.bind(this,this.props.data.Url)}>
			<View>
			<Image style={styles.ImageTextView} source={{uri:this.props.data.Image}}>
			<View style={styles.textView}>
			<Text  style={styles.ImageText}>{this.props.data.Title}</Text>
			</View>
			</Image>
			</View>
			</TouchableOpacity>
		);
	}
}


var styles = StyleSheet.create({

	contailer: {
		flex: 1,
		backgroundColor: HDBGColor,
		flexDirection: 'column',
		marginTop: 0
	},
	item:{
		flexDirection: 'row',
		backgroundColor:'white'
	},
	itemView:{
		flex:1,
		height:px2dp(90),
		flexDirection: 'column',
		alignItems: 'center',
		borderRightWidth:0.8,
		borderColor:HDBGColor,
	},
	itemImage:{
		marginTop:px2dp(15),
		marginLeft:px2dp(20),
		marginRight:px2dp(20),
		flex:1
	},
	itemText:{
		textAlign:'center',
		flex:1,
		height:px2dp(30),
		marginTop:px2dp(10),
		color:HDMainTextColor
	},
	line:{
		backgroundColor:HDBGColor,
		height:0.8,
		flex:1,
		marginLeft:px2dp(15),
		marginRight:px2dp(15)
	},
	ImageTextView:{
		flex:1,
		height:160,
		marginTop:8,
		backgroundColor:HDBGColor
	},
	textView:{
		height:30,
		backgroundColor:'rgba(129,192,77,0.3)',
		flex:1,
		marginTop:130,
		alignItems:'center',
		justifyContent:'center'
	},
	ImageText:{
		height:20,
		color:'white',
		textAlign:'center',
		backgroundColor:'rgba(129,192,77,0.3)',
		flex:1,
		marginTop:5,
		fontSize:18
	}
});