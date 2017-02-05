module.exports = {
	// Сжимаем
	uglify: {
	    build: {
	        files: {
	            // Результат задачи concat
	            '../built/js/scripts.min.js': ['../built/js/scripts.js']
	        }
	    }
	}
};