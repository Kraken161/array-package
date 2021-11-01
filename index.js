const chalk = require('chalk')

module.exports = {
	displayAll(array) {
		if (typeof array !== 'object') {
			throw new Error(`This isn't an array!`)
		} else {
			try {
				console.log(chalk.red.bold('All array elements:'))
				console.log(array)
			} catch (e) {
				throw new Error(e)
			}
		}
	},

	displayAllReverse(array) {
		if (typeof array !== 'object') {
			throw new Error(`This isn't an array!`)
		} else {
			try {
				console.log(chalk.red.bold('All array elements reversed:'))
				console.log(array.reverse())
			} catch (e) {
				throw new Error(e)
			}
		}
	},

	reduceElements(array, number) {
		if (!number) {
			throw new Error('Enter how many items are to be deleted.')
		} else {
			if (typeof array !== 'object') {
				throw new Error(`This isn't an array!`)
			} else {
				try {
					console.log(chalk.red.bold('Array reduced elements:'))
					console.log(array.reverse().splice(number))
				} catch (e) {
					throw new Error(e)
				}
			}
		}
	},
}

// displayAll(['asdasdas', 'asdasd', 'sdf'])
// displayAllReverse(['asdasdas', 'asdasd', 'sdf'])
// reduceElements(['asdasdas', 'asdasd', 'sdf'], 2)
