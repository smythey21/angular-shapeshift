module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        uglify: {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! angular-shapeshift <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            min: {
                files: [{
                    src: ['app/app.js', 'app/directives/shapeshift.js' ],
                    dest: 'dist/angular-shapeshift.min.js'
                }]
            }
        },
        cssmin: {
            combine: {
                files: {
                    'dist/angular-shapeshift.min.css': 'app/css/shapeshift.css'
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uglify', 'cssmin']);

};
