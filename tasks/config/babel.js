module.exports = function(grunt) {

  grunt.config.set('babel', {
    dev: {
      extend: '/.babelrc',
      files: [{
        expand: true,
        cwd: 'assets/js/',
        src: ['**/*.js', '!dependencies/**/*.js'],
        dest: '.tmp/public/js/',
        ext: '.js'
      }]
    },
    prod: {
      extend: '/.babelrc',
      files: [{
        expand: true,
        cwd: 'assets/js/',
        src: ['.tmp/public/concat/production.js'],
        dest: '.tmp/public/min/production.min.js',
        ext: '.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-babel');
};