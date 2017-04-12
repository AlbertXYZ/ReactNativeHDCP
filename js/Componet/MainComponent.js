import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  View,
  StyleSheet,
  Navigator
} from 'react-native';

import HDTabBar from '../tabBar/TabBar'

export default class MainComponent extends Component {

  renderScene(route, navigator) {
      return <route.component navigator={navigator}  {...route.args} />;
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
