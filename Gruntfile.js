module.exports = function (grunt) {

	require('time-grunt')(grunt);

	grunt.initConfig({

		eslint: {
			options: {
				configFile: 'eslint.json'
			},
			target: ['*.js', 'lib/**/*.js', 'test/**/*.js']
		},

		mochaTest: {
			options: {
				reporter: 'spec',
				timeout: 2000
			},
			all: {
				src: ['test/**/*.js']
			}
		}

	});

	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.registerTask('default', ['eslint', 'mochaTest']);

};
