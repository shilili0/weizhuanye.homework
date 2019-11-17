---
date: 2019-11-17
tag: 
  - React
  - 工具
author: shilili
location: Hangzhou  
---
# React 安装

1、react的安装

```bash
cnpm install -g create-react-app
create-react-app my-app
cd my-app/
cnpm start
```
2、react的基础渲染

```javascript
// 方法式组件
class List extends Component{
    render() {
        return (
        )
    }
    componentDidMount() {
        console.log("list 组件被渲染完之后执行的方法")
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("list 组件即将更新的时候的方法")
    }
    componentWillUnmount() {
        console.log("list 组件即将被销毁执行的方法")
    }
}
// 函数式组件
const Filter = () =>{
    return (
        <div>filter</div>
   )
}

// js 与 html 混写
const Filter = () =>{
    return <input/>
}
const List = () =>{
    let name = 'demo List';
    let nodes = ['a','b','c','d'].map(
        item => <span key={item}>{item}</span>
    )
    return (
        <div>{name} {nodes} </div>
    )
}
```
3、生命周期<br />react 提供的概念只有生命周期和数据，其他的概念没有的.<br />componentWillMount 在渲染前调用,在客户端也在服务端。 (组件被挂载完才能证明该组件被挂载，然后才会往上继续调用component)<br />componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。<br />componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用。这个方法在初始化render时不会被调用。<br />shouldComponentUpdate 返回一个布尔值。在组件接收到新的props或者state时被调用。在初始化时或者使用forceUpdate时不被调用。  <br />可以在你确认不需要更新组件时使用。<br />componentWillUpdate在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。<br />componentDidUpdate 在组件完成更新后立即调用。在初始化时不会被调用。<br />componentWillUnmount在组件从 DOM 中移除之前立刻被调用。


![](https://cdn.nlark.com/yuque/0/2019/png/135789/1566640470878-d07e403f-d969-4840-96cc-3ed239b0dc50.png)
![](https://cdn.nlark.com/yuque/0/2019/png/135789/1566640470902-43840415-0e68-4106-8892-6bc5e6a9f7c0.png)

![](https://cdn.nlark.com/yuque/0/2019/png/135789/1566640470912-cabb49eb-0faf-4347-8b12-bdcb8fadd4eb.png)



