/***
 * 请实现支持如下代码的InputNumber组件，可以受控和非受控。
 * function App(){
    const [value,setValue] = useState('aaa')
    return (
        <div>
        <InputNumber value={value} onChange={e=>{}}/>
        <InputNumber defaultValue={value} onChange={e=>{}}/>
        </div>
    )
}
useState 仿照react-3的demo1.js
受控组件和非受控组件
 */

import React, { Component, useState, useEffect } from 'react';
const InputNumber = (props) => {
    const [value, setValue] = useState('123')
    const {onChange, ...others } = props;
    return (
        <div>
            <input type='number' {...others}   onChange={(e) => {
               onChange&&  onChange(e.target.value)
            }
            } />
        </div>
    )

}

const App = (props) => {
    const [value, setValue] = useState('123')
    return (
        <div>
            受控组件：<InputNumber value={value} onChange={(value)=>
               setValue(value)
            } />
            非受控组件：<InputNumber defaultValue={value} />
        </div>
    )
   

}
export default App