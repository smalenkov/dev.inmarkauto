module.exports = {
	// Jade
		compile: {
			options: {
				pretty: true,
				data: {
					debug: false
				}
			},
			files: {
				"../built/index.html": "../src/templates/index.jade"
			}
		}
};