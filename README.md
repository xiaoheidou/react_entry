# react_entry
初学react
首先电脑有node。<br/>
<h3>初始工作</h3>
然后执行命令 npm init -y 在项目中建立package.json，<br/>
接下来 下载react相关js<br/>
1、npm install --save--dev react<br/>
2、npm install --save--dev react-dom<br/>
3、npm install --save--dev babel-core@5<br/>
//注意那个版本  必须是@5   因为后续版本已经没有browser的解析下载了<br/>
将这三个js引入到页面中<br/>
```html
<script src="node_modules/react/dist/react.min.js"></script>
<script src="node_modules/react-dom/dist/react-dom.min.js"></script>
<script src="node_modules/babel-core/browser.min.js"></script>
```
