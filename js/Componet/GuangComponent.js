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

import {theme} from '../CommonStyle/commonStyle';
import px2dp from '../Utils/px2dp';

export default class GuangComponent extends Component {

	render() {
		return (
			<GuangController/>
		);
	};
}

class GuangController extends Component {

	render() {
		return (
			< View style = {
				theme.contailer
			} >
			<View style={theme.actionNavBar}>
                    <Text style={{color: 'white', fontSize: 20}}>逛逛</Text>
                </View>
            < ScrollView style = {
				styles.contailer
				} >
				< /ScrollView>
			< /View>
		);
	};
}

var styles = StyleSheet.create({

	contailer: {
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'column',
		marginTop: 0,
	}
});