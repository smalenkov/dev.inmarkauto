var mozjpeg = require('imagemin-mozjpeg');

module.exports = {
	// Сжимаем изображения
	all: {
		options: {
			use: [mozjpeg({
				quality: '20'
			})]
		},
		files: [{
			expand: true,
			cwd: '../src/assets/images',
			src: ['**/*.{png,jpg,gif}'],
			dest: '../built/images'
		}]
	}
};