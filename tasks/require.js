module.exports = function (grunt) {

    // *************************************************************************
    // REQUIRE PATHS
    // Add any paths here you want shortened. Relative to the 'js' dir.
    // *************************************************************************

    var amdModulePaths = {
        'pubsub':      './lib/vendors/jquery/pubsub',
        'istats':      './lib/vendors/istats/istats',
        'bump-3':      './lib/vendors/bump-3/bump-3',
        // bump dependencies
        'swfobject-2': './lib/vendors/swf/swfobject-2'
    };

    // *************************************************************************
    // GRUNT CONFIG
    // You shouldn't need to edit anything below here
    // *************************************************************************

    var _ = require('lodash-node');

    var requirePathsForJqueryBuild = _.merge({
            'jquery-1.9': './lib/vendors/jquery/jquery-1.9.1-version_for_bump'
        }, amdModulePaths);
    
    grunt.config(['amdModulePaths'], amdModulePaths);

    grunt.config(['requirejs', 'jquery1'], {
        options: {
            baseUrl: './source/js',
            paths: requirePathsForJqueryBuild,
            optimize: 'uglify2',
            generateSourceMaps: true,
            preserveLicenseComments: false,
            name: './app',
            out: './content/<%= pkg.services.default %>/js/all.js'
        }
    });
    grunt.loadNpmTasks('grunt-contrib-requirejs');
};