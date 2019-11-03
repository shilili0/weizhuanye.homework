import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
class Confirm extends Component{
    constructor(props){
        super(props);
        this.state = {
            flag: ''
        }
    }
    render() {
        const {
            message,onOk,onCancel
        } = this.props;
        return (
            <div className='confirm'>
                <div className='confirm__content'>
                   <p>{message}</p>
                </div>
                <div className='confirm__footer'>
                    <button type='button' className='ok' onClick={onOk}>确定</button>
                    <button type='button' className='cancel'  onClick={onCancel}>取消</button>
                </div>
            </div>
        )
    }
}
let node = null;
function confirms(message){
    return new Promise((resolve)=>{
        node = document.createElement("div");
        document.body.appendChild(node);
        function hideConfirm(flag){
            if(node){
                ReactDOM.unmountComponentAtNode(node);
                document.body.removeChild(node);
            } 
            resolve(flag)
           
        }
        ReactDOM.render(<Confirm message={message} onOk={()=> hideConfirm(true)} onCancel={()=> hideConfirm(false)}/>, node)
    })
}


export default confirms