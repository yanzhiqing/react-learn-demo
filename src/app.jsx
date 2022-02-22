import React, { Component } from "react";
import Home from "./Home"
import MyNav from "./MyNav";
import StateCompoenent from "./StateComponent";

// 用类的形式创建组件，Hook形式
class App extends React.Component{
  // 渲染函数
  render(){
    const nav1=["首页","视频","学习"];
    const nav2=["Web","Java","Node"];
    return (
      <div>
        {/* <h1>Hello React Component</h1>
        <h3>心态要好</h3>
        <Home/>
        <MyNav nav={nav1} title="学习导航"/>
        <MyNav nav={nav2} title="路径导航"/> */}

        <StateCompoenent/>
      </div>
    )
    
  }
}
export default App