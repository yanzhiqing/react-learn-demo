import React from "react";
import Child1 from "./child1";
import Child2 from "./child2";

export default class Parent extends React.Component {
  constructor() {
    super();
    this.money = React.createRef();
    this.state = {
      // money:7
    };
  }

  componentDidMount() {
    this.setState({
      money: 0,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.value);
  };

  onChangeHandle = (e) => {
    this.setState({
      money: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h3>parent</h3>
        <input type="text" ref={this.input1} onChange={this.onChangeHandle} />
        <div>
          人民币：
          <Child1 money={this.state.money} />
        </div>
        美元：
        <Child2 money={this.state.money} />
      </div>
    );
  }
}
