var gulp = require('gulp');

var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var cssconcat =  require("gulp-concat-css");


var vendorBaseScripts = [
 "../../../assets/inspinia/js/jquery/jquery-2.1.1.min.js",
 "../../../assets/inspinia/js/plugins/jquery-ui/jquery-ui.js",
 "../../../assets/inspinia/js/bootstrap/bootstrap.min.js",
"../../../assets/inspinia/js/plugins/metisMenu/jquery.metisMenu.js",
"../../../assets/inspinia/js/plugins/slimscroll/jquery.slimscroll.min.js",
"../../../assets/inspinia/js/plugins/pace/pace.min.js",
 "../../../assets/inspinia/js/angular/angular.js",
 "../../../assets/inspinia/js/angular/angular-resource.js",
 "../../../assets/inspinia/js/angular/angular-sanitize.js",
 "../../../assets/inspinia/js/plugins/oclazyload/dist/ocLazyLoad.js",
 "../../../assets/inspinia/js/angular-translate/angular-translate.js",
 "../../../assets/inspinia/js/ui-router/angular-ui-router.js",
 "../../../assets/inspinia/js/bootstrap/ui-bootstrap-tpls-0.12.0.js",
 "../../../assets/inspinia/js/plugins/angular-idle/angular-idle.js",
 "../../../assets/inspinia/js/plugins/angular-notify/angular-notify.min.js",
 "../../../assets/inspinia/js/plugins/codemirror/codemirror.js",
 "../../../assets/inspinia/js/plugins/codemirror/mode/javascript/javascript.js",
 "../../../assets/inspinia/js/plugins/codemirror/addon/hint/show-hint.js",
 "../../../assets/inspinia/js/plugins/ui-codemirror/ui-codemirror.min.js",
 "../../../assets/inspinia/js/plugins/sweetalert/sweetalert.min.js",
 "../../../assets/inspinia/js/plugins/sweetalert/angular-sweetalert.min.js",
 "../../../assets/inspinia/js/plugins/uiTree/angular-ui-tree.min.js",
 "../../../assets/inspinia/js/bootstrap/ui-bootstrap-tpls-0.12.0.min.js",
"../../../assets/inspinia/js/angular/angular-bind-html-compile.js",
"../../../assets/clipboard/clipboard.min.js",
"../../../assets/clipboard/ngclipboard.min.js",
"../../../assets/clipboard/tooltips.js"
];

// SOURCES CONFIG
var source = {
	scripts: {
		app: ["config/inspinia.js",'config/app.js','config/service.js'
    		,'config/config.js'
    		 ,'components/ui/config.js','config/directives.js'
    		 ,'config/controllers.js','components/ui/ctrl.js'],
		vendor: vendorBaseScripts,
		watch: ['js/*.js', 'js/**/*.js']
	},
	styles: {
		app: {
			css: [
			 "../../../assets/inspinia/css/bootstrap.css",
			 "../../../assets/inspinia/font-awesome/css/font-awesome.css" ,
			"../../../assets/inspinia/css/animate.css" ,"../../../assets/inspinia/css/style.css" ,"../../../assets/inspinia/css/plugins/angular-notify/angular-notify.css" ,
			"../../../assets/inspinia/css/plugins/codemirror/codemirror.css" ,
			"../../../assets/inspinia/css/plugins/codemirror/ambiance.css" ,
			"../../../assets/inspinia/js/plugins/codemirror/addon/hint/show-hint.css" ,
			"../../../assets/inspinia/css/plugins/uiTree/angular-ui-tree.css" ,"../../../assets/clipboard/tooltipped.css"]
		}
	}
};

// BUILD TARGET CONFIG
var build = {
	scripts: {
		app: {
			main: 'app.js',
			dir: 'build/js/'
		},
		vendor: {
			main: 'vendor.js',
			dir: 'build/js/'
		}
	},
	styles: {
		main:'app.css',
		dir:'build/css'
	}
};

 
// TASK
gulp.task('scripts:app', function () {
	gulp.src(source.scripts.app) // path to your files
    .pipe(concat(build.scripts.app.main))
    .pipe(gulp.dest(build.scripts.app.dir));
});

gulp.task('scripts:vendor', function () {
	gulp.src(source.scripts.vendor) // path to your files
    .pipe(concat(build.scripts.vendor.main))
    .pipe(gulp.dest(build.scripts.vendor.dir));
});

gulp.task('styles:vendor', function () {
	gulp.src(source.styles.app.css) // path to your files
    .pipe(cssconcat(build.styles.main))
    .pipe(gulp.dest(build.styles.dir));
});

gulp.task('prod:scripts:app', function () {
	gulp.src(source.scripts.app) // path to your files
    .pipe(concat(build.scripts.app.main))
    .pipe(gulp.dest(build.scripts.app.dir));
});


gulp.task('build', ['styles:vendor','scripts:vendor','scripts:app']);

gulp.task('prod-build', [ 'prod:scripts:app']);

