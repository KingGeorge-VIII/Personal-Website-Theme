module.exports = function(grunt) {

	// Project configuration. 
	grunt.initConfig({
		concat: {
			vendorJs: {
				src: ['js/jquery.min.js', 'js/bootstrap.min.js'],
				dest: 'build/js/vendor.js',
			},
			vendorCss: {
				src: ['css/bootstrap.min.css'],
				dest: 'build/css/vendor.css',
			},
			applicationJs: {
				src: ['js/scripts.js'],
				dest: 'build/js/application.js',
			},
			applicationCss: {
				src: ['style.css'],
				dest: 'build/style.css',
			}
		},
		watch: {
			js: {
				files: ['js/**/*.js'],
				tasks: ['concat'],
			},
			css: {
				files: ['css/**/*.css'],
				tasks: ['concat'],
			},
		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

}