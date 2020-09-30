const path = require('path')
module.exports = {
	outputDir: path.resolve(path.join(__dirname, '../api/dist')),
	devServer: {
		proxy: {
			'^/api': {
				// FÖR ATT GÅ FRÅN DEV MODE TILL ATT PUSHA PÅ DOCKER/HEROKU BYT localhost TILL api
				target: 'http://api:5000'
			}
		}
	}
}