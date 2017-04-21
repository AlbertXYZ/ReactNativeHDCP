import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
import HomeComponent from '../Componet/HomeComponent'
import CategoryComponent from '../Componet/CategoryComponent'
import CenterComponent from '../Componet/CenterComponent'
import DongTaiComponent from '../Componet/DongTaiComponent'
import GuangComponent from '../Componet/GuangComponent'
import {TabNames} from '../Utils/Const';

export default class HDTabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab:'Home',
  };
  }
  render(){
    
    return (
       <View style={styles.container} >  
                <TabNavigator>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === 'Home'}  
                        title = {TabNames[0]}  
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        renderIcon={() => <Image style={styles.icon} source={require("../resource/tabIcon/main_ico_menu_home.png")} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../resource/tabIcon/main_ico_menu_home_on.png")} />}  
                        onPress={() => this.setState({ selectedTab: 'Home' })}>  
                        {<HomeComponent navigator = {this.props.navigator}/> } 
                    </TabNavigator.Item>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === 'Guang'}  
                        title = {TabNames[1]}  
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        renderIcon={() => <Image style={styles.icon} source={require("../resource/tabIcon/main_ico_menu_random.png")} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../resource/tabIcon/main_ico_menu_random_on.png")} />}  
                        onPress={() => this.setState({ selectedTab: 'Guang' })}>  
                        <GuangComponent navigator = {this.props.navigator}/>  
                    </TabNavigator.Item>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === 'Category'}  
                        title = {TabNames[2]} 
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        renderIcon={() => <Image style={styles.icon} source={require("../resource/tabIcon/main_ico_menu_category.png")} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../resource/tabIcon/main_ico_menu_category_on.png")} />}  
                        onPress={() => this.setState({ selectedTab: 'Category' })}>  
                        <CategoryComponent navigator = {this.props.navigator}/> 
                    </TabNavigator.Item>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === 'DongTai'}  
                        title = {TabNames[3]}  
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        renderIcon={() => <Image style={styles.icon} source={require("../resource/tabIcon/main_ico_menu_dongtai.png")} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../resource/tabIcon/main_ico_menu_dongtai_on.png")} />}  
                        onPress={() => this.setState({ selectedTab: 'DongTai' })}>  
                        <DongTaiComponent navigator = {this.props.navigator} /> 
                    </TabNavigator.Item>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === 'Center'}  
                        title = {TabNames[4]}  
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        renderIcon={() => <Image style={styles.icon} source={require("../resource/tabIcon/main_ico_menu_center.png")} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../resource/tabIcon/main_ico_menu_center_on.png")} />}  
                        onPress={() => this.setState({ selectedTab: 'Center' })}>  
                        <CenterComponent navigator = {this.props.navigator}/> 
                    </TabNavigator.Item>  
                </TabNavigator>  
            </View>
    );
  };
}

var styles = StyleSheet.create({
    
    container: {  
      flex: 1  
    },  
    stateContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',        
      backgroundColor: '#F5FCFF',
    },
    tabText: {  
      color: 'rgb(105,105,105)',  
      fontSize: 12  
    },  
    selectedTabText: {  
      color: '#81c04d',  
      fontSize: 12  
    },  
    icon: {  
      width: 20,          
      height: 20  
    }  
});