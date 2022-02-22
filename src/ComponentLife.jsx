import React from "react";

export default class ComponentLife extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      count: 10
    }
  }

  // 在组件渲染之前执行
  componentWillMount() {
    console.log("componentWillMount");
  }

  // 组件渲染之后执行
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 返回true和false，true代表允许改变，false代表不允许改变
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true
  }
  //将要更新数据时触发的函数
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  // 数据修改完成(state,props)
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  // 父组件中改变了props传值时触发的函数
  componentWillReceiveProps(){
    console.log("componentWillReceiveProps")
  }
  // 组件将要销毁时触发的函数
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }


  changeHandler() {
    this.setState({
      count: this.state.count+=1
    })
  }

  clickChange=()=>{
    this.props.clickChanges("我是儿子的数据"+parseInt(Math.random()*10));
  }

  render() {
    const { count } = this.state
    return (
      <div>
        声明周期函数:{count}-{this.props.title}
        <button onClick={this.changeHandler.bind(this)}>修改</button>
        <button onClick={this.clickChange}>修改title</button>
      </div>

    );
  }
}
