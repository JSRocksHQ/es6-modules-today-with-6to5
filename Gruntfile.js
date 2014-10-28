module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		clean: ['dist'],
		'6to5': {
			options: {
				modules: 'common'
			},

			build: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**/*.js'],
					dest: 'dist/',
				}],
			}
		},

		copy: {
			main: {
				cwd: './src/sample',
				src: 'index.html',
				dest: 'dist/',
				expand: true,
				flatten: true,
				filter: 'isFile'
			},
		}
	});

	grunt.registerTask('default', ['6to5','copy']);
}