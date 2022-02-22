import React from "react";

export default class KeyDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: [
        {
          name: "iwen",
          age: 20,
          sex: "男",
          jobs:["iwen","iwen","iwen"]
        },
        {
          name: "iwen2",
          age: 24,
          sex: "男",
          jobs:["iwen2","iwen2","iwen2"]
        },
        {
          name: "iwen3",
          age: 22,
          sex: "女",
          jobs:["iwen3","iwen3","iwen3"]
        },
      ],
    };
  }

  ckickHandler=()=>{
    this.setState({
      userInfo:this.state.userInfo.concat({
        name: "iwen4",
          age: 28,
          sex: "女",
          jobs:["iwen4","iwen4","iwen4"]
      })
    })
  }

  render() {
    return (
      <div>
        <ul>
        <li>11111</li>
          {
          this.state.userInfo.map((element,index)=>{
            return (<li key={index}>
              <span>{element.name}</span>
              <span>{element.age}</span>
              <span>{element.sex}</span>
              <div>
                {
                  element.jobs.map((childElement,childIndex)=>{
                    return (
                      <span key={index+'-'+childIndex}>{childElement}</span>
                    )
                  })
                }
              </div>
            </li>)
          })
          }
        </ul>
        <button onClick={this.ckickHandler}>添加数据</button>
      </div>
    );
  }
}
