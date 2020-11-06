module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  const sass = require('node-sass');
  require('load-grunt-tasks')(grunt);


  grunt.initConfig({

    concat: {
      dist: {
        src: ['intro.js', 'project.js'],
        dest: 'script.js',
      },
    },

    uglify: {
       my_target: {
         files: {
           'script.min.js': ['script.js']
         }
       }
     },


    sass: {
        options: {
            implementation: sass,
            sourceMap: true
        },
        dist: {
            files: {
                'style.css': 'style.scss'
            }
        }
    },

    cssmin: {
      target: {
        files: [{
          src: ['style.css'],
          dest: 'style.min.css'
        }]
      }
    },

    watch: {
      options: {
        spawn: false,
        interrupt: true
      },
      js: {
        files: ['intro.js', 'project.js'],
        tasks: ['concat', 'uglify']
      },

      sass: {
        files: ['style.scss'],
        tasks: ['sass']
      },

     css: {
       files: ['style.css'],
       tasks: ['cssmin']
     }
   }

  });

  grunt.registerTask('default', ['watch'])

}
