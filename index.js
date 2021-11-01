const displayAll = (array) => {
	if (typeof array !== 'array') {
		throw new Error(`This isn't an array!`)
	} else {
		return array.forEach((doc) => {
			console.log(doc)
		})
	}
}
