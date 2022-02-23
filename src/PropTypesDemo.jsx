import  React from "react"
import PropTypes from 'prop-types';

export default class PropTypesDemo extends React.Component{

  render(){
    return(
      <div>
        Hello：
        {this.props.title}
      </div>
    )
  }
}

// 验证传入的参数
PropTypesDemo.propTypes  = {
  // title: PropTypes.string     //验证类型string，number报错
  title: PropTypes.string.isRequired    //isRequired必须引入
};

// 指定 props 的默认值：
PropTypesDemo.defaultProps = {
  title: '我是默认标题'
};
