# react_entry
初学react
首先电脑有node。<br/>
<h3>初始工作</h3>
然后执行命令 npm init -y 在项目中建立package.json，
接下来 下载react相关js
1、npm install --save--dev react
2、npm install --save--dev react-dom
3、npm install --save--dev babel-core@5
//注意那个版本  必须是@5   因为后续版本已经没有browser的解析下载了
将这三个js引入到页面中
<script src="node_modules/react/dist/react.min.js"></script>
<script src="node_modules/react-dom/dist/react-dom.min.js"></script>
<script src="node_modules/babel-core/browser.min.js"></script>
