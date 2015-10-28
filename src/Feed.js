import React, { ListView, Text, View } from 'react-native'
import api from './api'

export default class Feed extends React.Component {
	state = { all: [] }
	componentWillMount() {
		fetchJSON(api.getAll(), ({ items }) =>
			this.setState({ all: items }))
	}
	render() {
		const { all } = this.state
		return <View>
			<Text>{ all.length }</Text>
			<Items items={ all.slice(0, 100) } />
		</View>
	}
}

class Items extends React.Component {
	static x = 1
	ds = new ListView.DataSource({
		rowHasChanged: (x, y) => x.id != y.id
	})
	render() {
		console.log(this.x)
		const items = this.ds.cloneWithRows(this.props.items)
		return <ListView dataSource={items} renderRow={this.renderRow} />
	}
	renderRow({ date }) {
		return <Text>{ date }</Text>
	}
}

function fetchJSON(url, result) {
	fetch(url).then(response =>
		response.json().then(json =>
			result(json)))
}
