import React,{useState, useEffect} from 'react'
import ReactDom from 'react-dom'
import {Overlay, ModalContainer, Button, Header, Logo} from './Elements'

const ModalCuenta = ({open, children,onClose }) => {
    const [afuera, setAfuera] = useState(false)

    useEffect(()=>{
        window.addEventListener('click', function(e) {
            const ele = document.querySelector('.afuera1');
            
            if(e.target.matches('.afuera1')){
                
                setAfuera(true)
            }else{
                setAfuera(false)
            }

          })
    },[])

    if(!open || afuera) return null
    return ReactDom.createPortal(
        
        <>
            <Overlay className={'afuera1'}/>
            <ModalContainer>
                    <Header>
                        <Button onClick={onClose}>X</Button>
                    </Header>
                    
                    {children}
            </ModalContainer>
        </>,
        document.getElementById('portal')

    )

}

export default ModalCuenta
