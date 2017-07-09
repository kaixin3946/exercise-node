var gulp=require("gulp");
var uglify=require("gulp-uglify");
var jshint = require("gulp-jshint");
var watch=require("gulp-watch");
var livereload=require("gulp-livereload");                  //browsersync
var browserSync=require("browser-sync");
var less=require("gulp-less");
var concat=require("gulp-concat");
var useref=require("gulp-useref");
var csso=require("gulp-csso");
//var sass=require("gulp-sass");
//var plugins=require("gulp-load-plugins")();
//使用时：jshint→plugins.jshint

gulp.task("minify-js",function(){
	gulp.src(["js/*.js","!js/*.min.js"])
        //.pipe(jshint())
        //.pipe(jshint.reporter("default"))                               //这里是检测有可能发生语法错误的部分
		.pipe(uglify())
		.pipe(gulp.dest("dest/js"))
})
gulp.task("minify-css",function(){
    gulp.src(["js/*.css"])
        .pipe(uglify())
        .pipe(gulp.dest("dest/css"))
})

gulp.task('default', function () {                                      //gulp启动时默认执行

});

gulp.task("watch",function(){
    var watcher=gulp.watch("js/*.js",["minify-js"]);
    watcher.on("change",function(event){
        console.log("事件类型:"+event.type);
        console.log(event.path);
    })
});

gulp.task("scss",function(){
    gulp.src('css/sass/*.scss')
        .pipe(watch('css/sass/*.scss'))
        .pipe(less())
        .pipe(gulp.dest('css'));
})



gulp.task("browsersync",function(){
    var config = {
        proxy: "http://localhost:63342/gulpProject/",
        files: ["*.html","css/*.scss"]
    };

    browserSync.init(config, {
        server: { baseDir: 'http://localhost:63342/gulpProject/' }
    });
})

gulp.task("concat",function(){
    //gulp.src('./js/*.js')
        //.pipe(concat('all.js'))                                       // 合并all.js文件
        //.pipe(gulp.dest('./dist'));
    gulp.src(['./css/test1.css','./css/test2.css'])
        .pipe(csso())
        .pipe(concat('testall.css')) // 按照[]里的顺序合并文件
        .pipe(gulp.dest('./css'));
})

gulp.task("useref",function(){
    gulp.src('html/test.html')
        .pipe(useref())
        .pipe(gulp.dest('./dest'));
})



