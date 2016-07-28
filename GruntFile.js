module.exports = function(grunt) {
	require('jit-grunt')(grunt);
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true,
				outputStyle: 'expanded', //Values: nested, expanded, compact, compressed
				precision : 5
            },
            dist: {
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
    grunt.registerTask('default', ['sass','postcss','watch']);
}
