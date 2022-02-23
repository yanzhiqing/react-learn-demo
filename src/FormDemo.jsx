import React from "react";

export default class FormDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      value:"1"
    };
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state.value)
  }

  onChangeHandle=(e)=>{
    
    this.setState({
      value:e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.onChangeHandle}/>
          <input type="submit" value="提交"></input>
        </form>
        
      </div>
      );
  }
}
