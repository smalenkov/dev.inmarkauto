// Обязательная обёртка
module.exports = function(grunt) {

    // var mozjpeg = require('imagemin-mozjpeg');

    // Задачи
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Склеиваем
        concat: {
            build: {
                src: [
                    '../src/assets/js/*.js'  // Все JS-файлы в папке
                ],
                dest: '../built/js/scripts.js'
            }
        },
        // Сжимаем
        uglify: {
            build: {
                files: {
                    // Результат задачи concat
                    '../built/js/scripts.min.js': ['../built/js/scripts.js']
                }
            }
        },
        // Сжимаем изображения
        // imagemin: {
        //     options: {
        //         use: [mozjpeg({ quality: '30'})]
        //     },
        //     dynamic: {
        //         files: [{
        //             expand: true,
        //             cwd: '../src/assets/images',
        //             src: ['**/*.{png,jpg,gif}'],
        //             dest: '../built/images'
        //         }]
        //     }
        // },
        // Jade
        jade: {
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
        },
        // Less препроцессор
        less: {
            build: {
                options: {
                    paths: ["../built/css"]
                },
                files: {
                    "../built/css/main.css": "../src/assets/less/source.less"
                }
            }
        },
        sass: {                              // Task
                dist: {                            // Target
                  options: {
                  paths: ["../built/css"],                       // Target options
                    style: 'expanded'
                  },
                  files: {                         // Dictionary of files
                    '../built/css/main.css': '../src/assets/scss/main.scss',
                    '../built/css/bootstrap.css': '../src/assets/scss/bootstrap.scss'
                  }
                }
              },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: '../src/templates',
                    src: ['*.html'],
                    dest: '../built'
                }]
            }
        },
        // Автоматизация
        watch: {
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
                files: ['../src/assets/scss/*.scss', '../src/assets/scss/*/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            copy: {
                files: ['../src/templates/*.html'],
                tasks: ['copy'],
                options: {
                    spawn: false,
                }
            },
            copysass: {
                files: ['../src/templates/*.html', '../src/assets/scss/*.scss'],
                tasks: ['copy', 'sass'],
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
        }
    });

    // Загрузка плагинов, установленных с помощью npm install
     require('load-grunt-tasks')(grunt);

    // Задача по умолчанию
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'jade', 'watch', 'less', 'sass']);
    grunt.registerTask('sassproc', ['sass']);
    grunt.registerTask('copyfile', ['copy']);
};