import React from 'react'
import {Wrapper, Texto, Wrap, ButtonF, ButtonG, Wrap2, Text, Inicio, Email, Password,  Register} from './Elements'

const ModalLogin = () => {
    return (
        <>
                        <Wrapper>
                            <Texto>Ingresa con tu cuenta de Facebook o Google</Texto>
                            <Wrap>
                                <ButtonF>Facebook</ButtonF>
                                <ButtonG>Google</ButtonG>
                            </Wrap>
                            <Wrap2>
                                <Login />
                                <Register onClick={()=>setRegister(true)}>Registrate</Register>    
                            </Wrap2>
                        </Wrapper>
        </>
    )
}

export default ModalLogin
