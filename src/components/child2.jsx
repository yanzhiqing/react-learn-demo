import React from "react";

export default class Child2 extends React.Component {
  constructor() {
    super();
    // this.input2=React.createRef();
    this.state = {
    //   input2:0
    };
  }
  // componentDidMount(){
  //   this.setState({
  //     input2:this.props.money*7
  //   })
  // }
  // handleSubmit=(e)=>{
  //   e.preventDefault()
  //   console.log(this.state.value)
  // }

  // onChangeHandle=(e)=>{
    
  //   this.setState({
  //     input2:e.target.value
  //   })
  // }

  render() {
    return (
      <div>
        <p>{this.props.money*7}</p>
        {/* <input type="text" value={this.state.input2} ref={this.input1} onChange={this.onChangeHandle}/> */}
      </div>
      );
  }
}
