module.exports = {
	// Less препроцессор
	build: {
		options: {
			paths: ["../built/css"]
		},
		files: {
			"../built/css/main.css": "../src/assets/less/source.less"
		}
	}
};