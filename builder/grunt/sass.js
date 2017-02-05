module.exports = {
	// sass препроцессор

  // dev: {
  //   options: {
  //     outputStyle: 'nested',
  //     sourceMap: true
  //   },
  //   files: [{
  //     expand: true,
  //     cwd: '../src/styles/assets/scss',
  //     src: ['*.scss'],
  //     dest: '../src/styles/assets/css',
  //     ext: '.css'
  //   }]
  // }

  sass: {                              // Task
                dist: {                            // Target
                  options: {
                    style: 'expanded'
                  },
                  files: {                         // Dictionary of files
                    '../src/assets/css/main.css': '../src/assets/scss/main.scss'
                  }
                }
              }
};