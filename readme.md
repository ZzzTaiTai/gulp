# gulp 是一个自动化构建工具
---
### 尝试使用 gulp 进行项目的开发和打包，实现项目自动处理重复性的工作
---
### 常用的 API

+ src 是 gulp 提供的一个从文件系统读取流	
+ dest 是 gulp 提供的一个写入流 api
+ watch 是一个 gulp 提供的一个监听文件变化的 api
+ series 是 gulp 提供的一个函数组合任务函数，它会按照顺序依次执行任务，可以称为串行任务
+ parallel 是 gulp 提供的一个函数组合任务函数，它和 series 的功能是一样的，但是没有执行循序的限制，可以称为并行任务
---
### scss文件的处理
```javascript
const style = () => {
    return (
        src("src/assets/styles/*.scss")
        .pipe(plugins.sass({outputStyle:"expanded"}))
        .pipe(dest("temp"));
    );
};
```
### js文件的处理
```javascript
const script = () => {
    return (
      src("src/assets/scripts/*.js", { base: "src" })
        .pipe(plugins.babel({ presets: ["@babel/preset-env"] }))
        .pipe(dest("temp"));
    );
  };
```
### 图片的处理
```javascript
const image = () => {
    return (
	src("src/assets/images/**", { base: "src" })
      .pipe(imagemin())
      .pipe(dest("dist"));
	);
  };
```