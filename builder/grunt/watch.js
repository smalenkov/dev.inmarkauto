module.exports = {
	// Автоматизация
		concat: {
			files: ['../src/assets/js/*.js'],
			tasks: ['concat', 'uglify'],
			options: {
				spawn: false,
			}
		},
		jade: {
			files: ['../src/templates/*.jade'],
			tasks: ['jade'],
			options: {
				spawn: false,
			}
		},
		less: {
			files: ['../src/assets/less/*.less'],
			tasks: ['less'],
			options: {
				spawn: false,
			}
		},
		sass: {
			files: ['../src/assets/sass/*.sass'],
			tasks: ['sass'],
			options: {
				spawn: false,
			}
		},
		all: {
			files: ['../src/assets/less/*.less', '../src/templates/*.jade', '../src/assets/js/*.js'],
			tasks: ['less', 'jade', 'concat'],
			options: {
				spawn: false,
			}
		}
};