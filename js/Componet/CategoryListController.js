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
import BaseComponent from './BaseComponent'
import {ScreenHeight,ScreenWidth,HDMainTextColor,theme,HDBGColor,HDThemeColor} from '../CommonStyle/commonStyle';
import px2dp from '../Utils/px2dp';

export default class CategoryListController  extends BaseComponent{
    
  constructor(props) {
    super(props);
    this.state = {
      title:'',
      tagList:[],
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount(){
    this.setState({
      title:this.props.title,
      tagList:this.props.tagList,
      dataSource: this.state.dataSource.cloneWithRows(this.props.tagList)
    });
  }

  selectRows(tag, rowID){

    alert(tag.Id)
  }

  renderRow(tag,sectionID, rowID){

      return (
      <TouchableOpacity onPress={this.selectRows.bind(this,tag,rowID)}>
        <View style = {{flexDirection: 'column',backgroundColor:'white'}}>
        <View style = {styles.tagView}>
          <Text style = {styles.tagText}>
            {tag.Name}
          </Text>
          <Image style={styles.tagImage} source = {require('../resource/ico_more_arrow_right.png')}/>
        </View>
        <View style={styles.cellLine}></View>
        </View>
      </TouchableOpacity>
      );
  }
  
  render(){
    return (
      <View style={styles.contailer}>
        <HDNavigationBar title={this.props.title} onPress = {this.handleBack.bind(this)}/>
        <ListView
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
  tagView:{
    height:px2dp(44),alignItems: 'center',flexDirection: 'row'
  },
  tagImage:{
    backgroundColor:'white',height:px2dp(25),width:px2dp(25),marginLeft:px2dp(15)
  },
  tagText:{
    flex:1,marginLeft:px2dp(15),color:HDMainTextColor
  },
  tagEvent:{
    backgroundColor:'white',height:px2dp(20),width:px2dp(20),marginRight:px2dp(15)
  },
  cellLine:{
    backgroundColor:'rgb(200,200,200)',marginLeft:px2dp(15),marginBottom:0,height:px2dp(0.6)
  }
})