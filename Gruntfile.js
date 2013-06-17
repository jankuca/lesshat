
module.exports = function (grunt) {
  grunt.loadNpmTasks('lesshat-dev');
  grunt.registerTask('default', [ 'build', 'test' ]);
};
