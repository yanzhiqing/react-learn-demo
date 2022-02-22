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


