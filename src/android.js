var React = require('react-native')
var { AppRegistry, StyleSheet, Text, View } = React

var Feed = React.createClass({
	render: function() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
				Welcome to React Native!
				</Text>
			</View>
		)
	}
})

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
		welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	}
})

module.exports = Feed
