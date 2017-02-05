module.exports = {
	// Склеиваем
	concat: {
	    build: {
	        src: [
	            '../src/assets/js/*.js'  // Все JS-файлы в папке
	        ],
	        dest: '../built/js/scripts.js'
	    }
	}
};