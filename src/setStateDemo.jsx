import React from "react";
export default class SetStateDemo extends React.Component{

  constructor(){
    super();
    this.state={
      count:0
    }
  }

  increment=async ()=>{
    this.setState({
      count:parseInt(Math.random()*10)
    },()=>{
      console.log(this.state.count)
    })
    await this.setStateAsync({count:parseInt(Math.random()*10)})
    console.log(this.state.count)
  }
  setStateAsync(state){
    return new Promise((resolve)=>{
      this.setState(state,resolve)
    })
  }

  render(){
    return(
      <div>
        <h3>setState同步还是异步问题</h3>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>修改</button>
      </div>
    )
  }
}