import React, { ScrollView, Text, View } from 'react-native'
import api from './api'

export default class Feed extends React.Component {
	state = { all: [] }
	componentWillMount() {
		fetchJSON(api.getAll(), ({ items }) =>
			this.setState({ all: items }))
	}
	render() {
		const { all } = this.state
		return <ScrollView>
			<Text>{ all.length }</Text>
			<Items items={ all.slice(0, 100) } />
		</ScrollView>
	}
}

class Items extends React.Component {
	render() {
		return <View>
			{ this.props.items.map(this.renderRow) }
		</View>
	}
	renderRow({ date }, index) {
		return <Text key={index} >{ date }</Text>
	}
}

function fetchJSON(url, result) {
	fetch(url).then(response =>
		response.json().then(json =>
			result(json)))
}
