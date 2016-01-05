///<reference path="typeRefs.ts" />

require.config({
    //baseUrl: '../js',
    paths: {
        'jquery': 'https://code.jquery.com/jquery-2.1.4.min',
        'angular': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min',
        'domReady': '../content/scripts/domReady/domReady'
    },
    shim: {
        'jquery': { exports: 'jquery' },
        'angular': { exports: 'angular', deps: ['jquery', 'domReady'] }
    },
});

// startup the application
require(['angular', 'domReady!', 'app'],

    function (angular: ng.IAngularStatic, document) {
 
        // bootstrap the document, since we are loading asynchronously
        angular.bootstrap(document, ['app']);
    }
);
