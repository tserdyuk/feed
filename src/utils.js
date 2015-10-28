
export default {
	fetchJSON(url, result) {
		fetch(url).then(response =>
			response.json().then(json =>
				result(json)))
	}
}
