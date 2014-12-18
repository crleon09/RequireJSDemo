/**
 * Created by rz101z on 12/18/2014.
 */
require.config({
    baseUrl: '.',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        hello: 'app/foo/hello',
        welcome: 'app/foo/welcome',
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/underscore/underscore'
    },
    shim: {
        backbone: {
            deps: ['underscore'],
            exports: 'backbone'
        },
        underscore: {
            deps: ['backbone'],
            exports: '_'
        }
    }
});

require(['app/main']);
