module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            // Essa é a configuração Sass para a "dev" que será utilizada 
            // no comando "grunt watch"
            dev: {
                options: {
                    style: 'expanded',
                },
                files: {
                    // o primeiro path é o output e o segundo o input
                    'css/style.css': 'sass/style.sass'
                }
            },
            // essa é a configuração do Sass para a "prod" que será usada 
            // no comando "grunt buildcss"
            dist: {
                options: {
                    style: 'compressed',
                },
                files: {
                    'css/style.css':'sass/style.sass'
                }
            }
        },
        // configuração da tarefa "grunt watch"
        watch: {
            sass: {
                files: 'sass/*.sass',
                tasks: ['sass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // "grunt build" é o mesmo que rodar "grunt sass:dist".
    grunt.registerTask('build', ['sass:dist']);
};