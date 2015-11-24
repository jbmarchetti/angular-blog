/**
@toc
2. load grunt plugins
3. init
4. setup variables
5. grunt.initConfig
6. register grunt tasks

*/

'use strict';

module.exports = function(grunt) {

	/**
	Load grunt plugins
	@toc 2.
	*/
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	/**
	Function that wraps everything to allow dynamically setting/changing grunt options and config later by grunt task. This init function is called once immediately (for using the default grunt options, config, and setup) and then may be called again AFTER updating grunt (command line) options.
	@toc 3.
	@method init
	*/
	function init(params) {
		/**
		Project configuration.
		@toc 5.
		*/
		grunt.initConfig({
			concat: {
				options: {
					separator: ';',
				},
				dist: {
					src: ['dist/all.min.js', 'dist/template.js'],
					dest: 'dist/blog.min.js',
				},
			},
			jshint: {
				options: {
					//force:          true,
					globalstrict:   true,
					//sub:            true,
					node: true,
					loopfunc: true,
					browser:        true,
					devel:          true,
					globals: {
						angular:    false,
						$:          false,
						moment:		false,
						Pikaday: false,
						module: false,
						forge: false
					}
				},
				beforeconcat:   {
					options: {
						force:	false,
						ignores: ['**.min.js']
					},
					files: {
						src: []
					}
				},
				//quick version - will not fail entire grunt process if there are lint errors
				beforeconcatQ:   {
					options: {
						force:	true,
						ignores: ['**.min.js']
					},
					files: {
						src: ['**.js']
					}
				}
			},
			uglify: {
				options: {
					mangle: false
				},
				build: {
					files:  {},
					src:    ['client/*.js', '/tmp/templates.js'],
					dest:   'dist/all.min.js'
				}
			},
			ngtemplates: {
				'jbm.angular-blog': {
					src:      'client/views/**/*.html',
					dest:     'dist/template.js'
				}
			},
			cssmin: {
				target: {
					files: {
						'dist/blog.min.css': ['client/styles/style.css']
					}
				}
			},
			clean: {
				dist: ["dist/*"],
				finish: ["dist/*.js", "!dist/blog.min.js"]
			},
		});

		/**
		register/define grunt tasks
		@toc 6.
		*/
		// Default task(s).
		grunt.registerTask('default',
		[
			'clean:dist',
			'jshint:beforeconcatQ',
			'ngtemplates',
			'uglify:build',
			'concat',
			'cssmin',
			'clean:finish'
		]);

	}
	init({});		//initialize here for defaults (init may be called again later within a task)

};
