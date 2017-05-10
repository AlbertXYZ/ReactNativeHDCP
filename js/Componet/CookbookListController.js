import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  ListView,
  Image
} from 'react-native';

import HDNavigationBar from '../Custom/HDNavigationBar';
import BaseComponent from './BaseComponent';
import {ScreenHeight,ScreenWidth,HDMainTextColor,theme,HDBGColor,HDThemeColor} from '../CommonStyle/commonStyle';
import px2dp from '../Utils/px2dp';
import {TabNames,HDHM04_URL,LoadingKey} from '../Utils/Const';

export default class CookbookListController  extends BaseComponent{
    
  constructor(props) {
    super(props);
    this.state = { 
      title:'',
      tagObject:'',
      tagList:[],
      dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        })
    };
  }

  componentDidMount(){
    this.loadData();
    this.setState({
      title:this.props.title,
      tagObject:this.props.tagObject
    });
  }

  loadData(){
    
    let formData = new FormData();  
    formData.append("tagid",this.props.tagObject.Id);  
    formData.append("limit","20"); 
    formData.append("offset","0"); 
    fetch(HDHM04_URL, {
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

  selectRows(object,rowID){
    if (this.props.navigator) {
      alert(rowID)
    }
  }

  getTagString(Stuff){

    var tagString = ''
    for (var i = 0; i < Stuff.length; i++) {
      var stuff = Stuff[i];
      if(i == 0){
          tagString = stuff.name
      }else{
          tagString = tagString+'、'+stuff.name
      }
    }
    return tagString;
  }

  renderRow(object,sectionID, rowID) {
    console.log(object)
    console.log(this.getTagString(object.Stuff))
    var stuffStr = this.getTagString(object.Stuff);
    return (
      <TouchableOpacity key={rowID} onPress={this.selectRows.bind(this,object,rowID)}>
      <View style={{flexDirection: 'row',flex:1}}>
        <Image source={{uri:object.Cover}} style={styles.coverView}/>
          <View style={styles.contentView} >
            <Text style={styles.titleText}>{object.Title}</Text>
            <Text style={styles.viewCountText}>
            收藏{object.FavoriteCount}次  浏览{object.ViewCount}次</Text>
            <Text style={styles.tagText} numberOfLines={1}>
            {stuffStr}</Text>
          </View>
      </View>
      </TouchableOpacity>
    );
   }
    
  render(){
    return (
      <View style={styles.contailer}>
        <HDNavigationBar title={this.props.title} onPress = {this.handleBack.bind(this)}/>
        <ListView style = {styles.contailer}
           dataSource={this.state.dataSource}
           renderRow={this.renderRow.bind(this)}
            />
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
  coverView:{
    marginTop:px2dp(10),
    marginLeft:px2dp(15),
    marginBottom:px2dp(10),
    width:px2dp(100),
    height:px2dp(70)
  },
  contentView:{
    marginTop:px2dp(10),
    marginBottom:px2dp(10),
    marginLeft:px2dp(10),
    marginRight:px2dp(10),
    flex:1
  },
  titleText:{
    fontSize:px2dp(15)
  },
  viewCountText:{
    fontSize:px2dp(15),
    color:HDMainTextColor,
    marginTop:px2dp(10)
  },
  tagText:{
    fontSize:px2dp(15),
    color:HDMainTextColor,
    marginTop:px2dp(13)
  }
})