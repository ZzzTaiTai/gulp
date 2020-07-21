const {src,dest,series} = require("gulp");
const del = require("del");
const plugins = require('gulp-load-plugins')();
/**
 * 删除dist目录
 */
const clean = () => {
    return del(["dist"]);
}
/**
 * html文件的处理
 * 读取src目录下所有的以html结尾的文件，写入到temp目录下。
 */
const page = () => {
    return src("src/*.html",{base:"src"}).pipe(dest("temp"));
}
/**
 * scss文件的处理
 * 读取src目录下的assets目录下的styles目录下的所有的以scss结尾的文件，使用sass插件进行转换压缩成css代码，并且写入到temp目录下。
 */
const style = () => {
    return (
        src("src/assets/styles/*.scss")
        .pipe(plugins.sass({outputStyle:"expanded"}))
        .pipe(dest("temp"))
    )
};
/**
 * js文件的处理
 * 读取src目录下的assets目录下的scripts目录下的所有的以js结尾的文件，使用babel插件并且使用"@babel/preset-env"这个规则，
 * 把代码中es6及以上版本的新特性，编译成es5,并且写入到temp目录下。
 */
const script = () => {
    return (
      src("src/assets/scripts/**.js", { base: "src" })
        // 需要安装babel对js进行处理，需要安装gulp-babel @babel/core @babel/preset-env 这3个插件
        .pipe(plugins.babel({presets: ['@babel/env']}))
        .pipe(dest("temp"))
    );
  };
  /**
 * 
 * 读取src目录下的assets目录下的images目录下的所有文件，使用imagemin插件进行高保真的压缩,并且写入到dist目录下。
 */
const image = () => {
    return (
        src("src/assets/images/**", { base: "src" })
        .pipe(plugins.imagemin())
        .pipe(dest("dist"))
      );
  };

exports.default = series(clean, page, style, script, image);