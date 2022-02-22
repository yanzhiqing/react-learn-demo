import React from 'react';
import ReactDOM from 'react-dom';

// 全家桶

// document.getElementById('root')获取要插入的容器
// jsx语法：<h1>Hellow React</h1>

// ()：如果存在标签结构，并且标签结构要换行，需要()括起来
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);