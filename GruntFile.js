module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css',
                    environment: 'development'
                }
            }
        },
        autoprefixer: {
            options: {
                map: true
            },
            dist: {
                files: {
                    'css/layout.css': 'css/layout.css'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['compass', 'autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['watch']);
}
