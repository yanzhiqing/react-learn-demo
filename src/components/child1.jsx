import React from "react";

export default class Child1 extends React.Component {
  constructor() {
    super();
    // this.input1=React.createRef();
    this.state = {
      // input1:0
    };
  }
  // componentDidMount(){
  //   this.setState({
  //     input1:this.props.money
  //   })
  // }

  // handleSubmit=(e)=>{
  //   e.preventDefault()
  //   console.log(this.state.value)
  // }

  // onChangeHandle=(e)=>{
    
  //   this.setState({
  //     input1:e.target.value
  //   })
  // }

  render() {
    return (
      <div>
        <p>{this.props.money}</p>
        {/* <input type="text" value={this.state.input1} ref={this.input1} onChange={this.onChangeHandle}/> */}
      </div>
      );
  }
}
