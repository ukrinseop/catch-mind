import gulp from "gulp";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import minifyCSS from "gulp-csso";

sass.compiler = require("node-sass");

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss" // scss의 모든 폴더안에 확장자가 scss인 모든 파일을 지켜볼것
    // 뭔가 이 안에서 변경되면 styles함수를 한번더 실행
    // 모든 파일의 변화는 체크하지만 컴파일은 하나의 파일만 (styles.scss)
  }
};

export function styles() {
  // 경로명을 지정하고, pipe란걸 해줄거임
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(minifyCSS())
    .pipe(gulp.dest(paths.styles.dest));
}
// pipe까지 해주고 pakage.json으로 가서 스크립트 하나 추가함
// 아무거나해도됨 gulp:styles:
// "build:styles" : "gulp styles" 여기서 style는 함수명
/*
"scripts": {
    "dev:server": "nodemon --exec babel-node src/server",
    "build:styles": "gulp styles"
  },
*/
// yarn build:styles

function watchFiles() {
  // scss폴더의 모든 파일을 모두 watch하고 싶음
  gulp.watch(paths.styles.watch, styles);
} // gulp.watch('경로명', fn())
// body.scss파일을 만들고 이 파일을 styles.scss에 import해줌

const dev = gulp.series([styles, watchFiles]);

//다른 명령어 없이 그냥 gulp 커맨드만 실행했을 때, 기본으로 dev를 실행하기 바라기 때문
export default dev;

// pakage.json의 script고침
// "dev:assets" : "gulp"
// yarn dev:assets
