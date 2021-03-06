'use strict';
require.config({
    preserveLicenseComments: false,
    generateSourceMaps: false,
    waitSeconds: 30,
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',

        angular: 'bower_components/angular/angular',
        angularAnimate: './bower_components/angular-animate/angular-animate',
        angularSanitize: './bower_components/angular-sanitize/angular-sanitize',
        spin: './bower_components/spin.js/spin',
        angularSpinner: './bower_components/angular-spinner/angular-spinner',
        lodash: './bower_components/lodash/dist/lodash',

        uiRouter: 'bower_components/angular-ui-router/release/angular-ui-router',
        uiSelect: 'bower_components/angular-ui-select/dist/select',
        // angularBootstrap: './bower_components/angular-bootstrap/ui-bootstrap',
        uiBootstrapTpls: './bower_components/angular-bootstrap/ui-bootstrap-tpls',
        // uiDateTimePiker: './bower_components/bootstrap-ui-datetime-picker/dist/datetime-picker',
        moment: './bower_components/moment/moment',
        angularMoment: './bower_components/angular-moment/angular-moment',
        angularLoadingBar: './bower_components/angular-loading-bar/build/loading-bar'
    },
    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angularAnimate': {
            deps: ['angular']
        },
        'angularSanitize': {
            deps: ['angular']
        },
        'spin': {
            deps: ['angular']
        },
        'angularSpinner': {
            deps: ['angular']
        },
        'uiRouter': {
            deps: ['angular']
        },
        'uiSelect': {
            deps: ['angular']
        },
        'select2': {
            deps: ['jquery']
        },
        // 'angularBootstrap': {
        //     deps: ['angular']
        // },
        'uiBootstrapTpls': {
            deps: ['angular']
        },
        // 'uiDateTimePiker': {
        //     deps: ['angular']
        // },
        'angularMoment': {
            deps: ['angular', 'moment']
        },
        'angularLoadingBar': {
            deps: ['angular']
        }
    },
    exclude: [
        'jquery'
    ],
    include: [
        'angular',
        'ngAnimate',
        'ngSanitize',
        'angularSpinner',

        'uiRouter',
        'uiSelect',
        'uiBootstrapTpls',
        // 'angularBootstrap',
        // 'ui.bootstrap.datetimepicker',
        'moment',
        'angularMoment',
        'angularLoadingBar'
    ]
});
