module.exports = function (grunt) {

	require('time-grunt')(grunt);

	grunt.initConfig({

		eslint: {
			options: {
				configFile: 'eslint.json'
			},
			target: ['*.js']
		}

	});

	grunt.loadNpmTasks('grunt-eslint');

	grunt.registerTask('default', ['eslint']);

};
