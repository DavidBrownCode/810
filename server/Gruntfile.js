module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        env : {
                dev : {
                    NODE_ENV : 'development'
                },
                production: {
                    NODE_ENV : 'production'
                }
        }
    });    
};