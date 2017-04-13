import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import codePush from "react-native-code-push";
import {
  View,
  StyleSheet,
  Navigator,
  Alert
} from 'react-native';

import HDTabBar from '../tabBar/TabBar'

export default class MainComponent extends Component {

  renderScene(route, navigator) {
      return <route.component navigator={navigator}  {...route.args} />;
  }
  
  componentDidMount(){
    //访问慢,不稳定
    codePush.checkForUpdate('vFzaog5WoEOxhoYZ54YHjJr5J4AJVkWo_CPaG').then((update)=>{
        if(!update){
            Alert.alert("提示","已是最新版本--",[
                {text:"Ok", onPress:()=>{
                    console.log("点了OK");
                }}
            ]);
        }
        else{
             Alert.alert("提示","有新版本",[
                {text:"Ok", onPress:()=>{
                    console.log("点了OK");
                }}
            ]);
            codePush.sync({
                deploymentKey: 'vFzaog5WoEOxhoYZ54YHjJr5J4AJVkWo_CPaG',
                updateDialog: {
                    optionalIgnoreButtonLabel: '稍后',
                    optionalInstallButtonLabel: '后台更新',
                    optionalUpdateMessage: '有新版本了，是否更新？',
                    title: '更新提示'
                },
                installMode: codePush.InstallMode.IMMEDIATE
            });
        }
    });
  }

	render(){
    let defaultName = "MainPage";
    let defaultComponent = MainPage;
		return (
      <Navigator style = {{flex:1}}
                initialRoute={{component: defaultComponent }}
                renderScene={this.renderScene}
      />
		);
	};
}

class MainPage extends Component {
  render(){
        return(
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <HDTabBar navigator={this.props.navigator}/>
            </View>
        );
    }
}
