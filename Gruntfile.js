module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        concat: {
            //"options": { "separator": ";" },
            css: {
                src: ["public/css/backend.css", "public/css/font-awesome.min.css", 'public/css/ionicons.min.css', 'public/css/adminDTE.css', 'public/css/datatables/dataTables.bootstrap.css', 'js/material/public/css/roboto.min.css', 'js/material/public/css/material-fullpalette.min.css', 'js/material/public/css/ripples.min.css', 'public/css/ripple.css', 'public/css/overide.css'],
                dest: "public/css/combined-all.css"
            },
            js: {
                src: [],
                dest: "public/js/combined-all.js"
            }
        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              "public/dist/css/combined-all.css" : ["public/css/backend.css", "public/css/font-awesome.min.css", 'public/css/ionicons.min.css', 'public/css/adminDTE.css', 'public/css/datatables/dataTables.bootstrap.css', 'js/material/public/css/roboto.min.css', 'js/material/public/css/material-fullpalette.min.css', 'js/material/public/css/ripples.min.css', 'public/css/ripple.css', 'public/css/overide.css']
            }
          }
        },
        uglify: {
            my_target: {
                files: {
                    'public/dist/combined-all.js': ['public/js/jquery/jquery.min.js', 'public/js/bootstrap/bootstrap.min.js', 'public/js/plugins/datatables/jquery.dataTables.js', 'public/js/plugins/datatables/dataTables.bootstrap.js', 'public/js/app.js', 'public/js/material/js/material.min.js', 'public/js/material/js/ripples.min.js', 'public/js/ripple.js']
                }
            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Task definitions
    grunt.registerTask('default', ['concat', 'min']);
};