import React, { Component } from "react";
// import Home from "./Home"
// import MyNav from "./MyNav";
// import StateCompoenent from "./StateComponent";
// import ComponentLife from "./ComponentLife";
// import SetStateDemo from "./setStateDemo";
// import IfDemo from "./ifDemo";
// import KeyDemo from "./KeyDemo";
// import FormDemo from "./FormDemo";
// import RefsAndDOM from "./RefsAndDOM";
// import RefsForm from "./RefsForm";
import Parent from "./components/parent";

// 用类的形式创建组件，Hook形式
class App extends React.Component{
  constructor(){
    super();
    this.state={
      title:"文本1"
    }
  }
  clickChange=(data)=>{
    this.setState({
      // title:"文本"+parseInt(Math.random()*10)
      title:data
    })
  }

  // 渲染函数
  render(){
    // const nav1=["首页","视频","学习"];
    // const nav2=["Web","Java","Node"];
    return (
      <div>
        {/* <h1>Hello React Component</h1>
        <h3>心态要好</h3>
        <Home/>
        <MyNav nav={nav1} title="学习导航"/>
        <MyNav nav={nav2} title="路径导航"/> */}

        {/* <StateCompoenent/> */}

        {/* <ComponentLife title={this.state.title} clickChanges={this.clickChange}></ComponentLife> */}
        {/* <button onClick={this.clickChange.bind(this)}>修改title</button> */}
        
        {/* <SetStateDemo/> */}
        
        {/* <IfDemo/> */}

        {/* <KeyDemo/> */}

        {/* <FormDemo/> */}

        {/* <RefsAndDOM/> */}

        {/* <RefsForm/> */}

        <Parent/>

      </div>
    )
    
  }
}
export default App