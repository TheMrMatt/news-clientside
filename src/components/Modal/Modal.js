import React,{useEffect,useRef, useState} from 'react'
import ReactDom from 'react-dom'
import {Overlay, ModalContainer, Button, Header, Logo} from './Elements'
import { motion, AnimatePresence } from "framer-motion"

const Modal = ({open, children,onClose }) => {
    const [afuera, setAfuera] = useState(false)

    useEffect(()=>{
        window.addEventListener('click', function(e) {
            const ele = document.querySelector('.afuera');
            
            if(e.target.matches('.afuera')){
                
                setAfuera(true)
            }else{
                setAfuera(false)
            }

          })
    },[])



    if(!open || afuera) return null
    return ReactDom.createPortal(
        
        <>  
            <Overlay className={'afuera'}/>
            <AnimatePresence>
              {
                  open && (
                      <>
                            <ModalContainer
                                initial={{ y: -700, x: "-50%" }}
                                animate={{
                                y: "-50%",
                                }}
                                exit={{ y: 700, x: "-50%"}}
                                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                                
                            >
                                    <Header>
                                        <Logo>Contexto</Logo>
                                        <Button onClick={onClose}>X</Button>
                                    </Header>
                                    
                                    {children}
                            </ModalContainer>
                      </>
                  )
              }  
            
            </AnimatePresence>
        </>,
        document.getElementById('portal')

    )
}

export default Modal
