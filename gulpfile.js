const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");

const includePaths = [
  "node_modules/foundation-sites/scss",
  "node_modules/motion-ui/src",
];

function sassBuild() {
  return gulp
    .src(["scss/app.scss"])
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: includePaths,
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("public/css")); // Output to public directory
}

function copyHtml() {
  return gulp.src("index.html").pipe(gulp.dest("public"));
}

function copyAssets() {
  return gulp
    .src(["images/**/*", "js/**/*", "webfonts/**/*"], { base: "./" })
    .pipe(gulp.dest("public"));
}

function serve() {
  browserSync.init({ server: "./public" });
  gulp.watch("scss/*.scss", gulp.series(sassBuild, reload));
  gulp.watch("index.html", gulp.series(copyHtml, reload));
  gulp.watch("js/*.js", gulp.series(copyAssets, reload));
}

function reload(done) {
  browserSync.reload();
  done();
}

gulp.task("sass", sassBuild);
gulp.task("html", copyHtml);
gulp.task("assets", copyAssets);
gulp.task("serve", gulp.series("sass", "html", "assets", serve));
gulp.task("default", gulp.series("sass", "html", "assets", serve));

gulp.task("build", gulp.series("sass", "html", "assets"));
