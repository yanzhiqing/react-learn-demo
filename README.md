# react-learn-demo

# 创建react项目
npx create-react-app my-app
cd my-app
npm start

## React基础
## jsx语法语法介绍
JSX语法：JavaScript+XML语法（HTML）
解读jsx语法：遇到<>按照HTML语法解析，遇到{}按照JavaScript解析

## 元素渲染

## 组件
罪案的后缀可以是js，可以使jsx
一个React项目，是有成千上万组件组成 

## props属性
组件的复用性很重要

## State

## React声明周期函数
随着我们对React理解和使用越来越多，声明周期的参考价值越来越高
函数列表：
    componentWillMount:在组件渲染之前执行
    componentMount：组件渲染之后执行
    shouldComponentUpdate：返回true和false，true代表允许改变，false代表不允许改变
    componentWillUpdate：数据在改变之前执行(state,props)
    componentDidUpdate：数据修改完成(state,props)
    componentWillUnmount:组件卸载钱执行
子传父！！！通过事件传值，调用父组件传递到子组件的方法改变父组件的值
父传子！！！props

## setState更新是同步还是异步
1.setState会引起视图的重绘
2.在可控的情况下是异步，在非可控的情况下是同步

## 条件渲染

## 列表渲染
主要问题是key：唯一标识
如果不加key，添加数据，list遍历的数据会全部重新渲染
添加key时，添加数据时，只渲染添加的数据，其他遍历的数据（有标识的）不会重新渲染，提高DOM渲染效率

## 表单
1. 受控组件
2. 非受控组件

## Refs and the DOM
1. 管理焦点，文本选择或媒体播放。
2. 触发强制动画。
3. 集成第三方 DOM 库。

## 状态提升
组件只见的数据交互



