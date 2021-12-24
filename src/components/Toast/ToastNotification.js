import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToastNotification = ({msg}) => {
    toast.configure()
    const notify = () =>{
        toast.success('so easy', {position: toast.POSITION.TOP_RIGHT, autoClose: false})
        toast.error('msg', {position: toast.POSITION.TOP_RIGHT, autoClose: false})
        toast.warn(msg, {position: toast.POSITION.TOP_RIGHT, autoClose: false})
    }
    
    
    return (
        <div>
            <button onClick={notify}>Notify!</button>
        </div>
    )
}

export default ToastNotification
