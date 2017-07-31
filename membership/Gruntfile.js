module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: ['library/**/*js', 'models/**/ *.js']
        },
        watch: {
            files: ['library/**/*js', 'models/**/ *.js'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
};