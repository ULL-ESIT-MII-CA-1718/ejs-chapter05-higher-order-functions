var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["test"]);

gulp.task("test", shell.task("./node_modules/mocha/bin/mocha --require should"));

gulp.task("docs", shell.task("asciidoctor docs/summary.adoc -o docs/index.html"));

gulp.task("pre-install", shell.task([
  "sudo gem install asciidoctor"
]));
