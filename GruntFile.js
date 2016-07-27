module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
				options:{
					includePaths: require('node-bourbon').includePaths
				},
                files: {
                    'css/layout.css': 'scss/layout.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')()
                ]
            },
            dist: {
                src: 'css/layout.css',
                dest: 'css/layout.css'
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass', 'postcss']
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.registerTask('default', ['watch']);
}
