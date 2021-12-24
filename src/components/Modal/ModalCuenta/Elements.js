import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .0);
    z-index: 10000000;

`

export const ModalContainer = styled.div`
    
    left: 80%;
    display: flex;
    align-items: center;
    justify-content-content: center;
    flex-direction: column;
    
    background: #FFFFFF;
    
    position: absolute;
    top: 58px;
    
    transform: translateX(-45%);

    border-radius: 0px 0px 30px 30px;
    z-index: 10000000;

    @media screen and (min-width: 320px) {
        transform: translateX(-65%);
        
    }

    @media screen and (min-width: 768px) {
        transform: translateX(-50%);
        
    }


    @media screen and (min-width: 993px) {
        transform: translateX(-50%);
    }

    @media screen and (min-width: 1200px) {
        transform: translateX(-60%);
    }

`

export const Logo = styled.div`
font-weight: bold;
font-size: 36px;
line-height: 44px;
/* identical to box height */
margin-right: 15px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.1em;

color: #121317;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    width: 300px;
    margin-bottom: 25px;
    @media screen and (min-width: 320px) {
        width: 40vw;
        
    }

    @media screen and (min-width: 768px) {
        width: 300px;
        
    }


    @media screen and (min-width: 993px) {
        width: 300px;
    }

    @media screen and (min-width: 1200px) {
        width: 300px;
    }
`

export const Button = styled.button`
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    /* identical to box height */
    
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
    background: #FFF;
    
   
`

export const Contenedor = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    padding: 10px;
    flex-direction: column;
    
` 

export const UserInfo = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    
`

export const Acciones = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    border-top: 1px solid grey;
`

export const Username = styled.div`
    width: 100%;
    height: 25px;
    font-weight: bold;
    font-size: 24px;
    line-height: 22px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;

    color: #000000;

    @media screen and (min-width: 320px) {
        font-size: 18px;
        
    }

    @media screen and (min-width: 768px) {
        font-size: 24px;
        
    }


    @media screen and (min-width: 993px) {
        font-size: 24px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 24px;
    }
`

export const EmailUser = styled.div`
    width: 100%;
    height: 25px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;

    color: #C4C4C4;
`

export const Micuenta = styled(LinkR)`
    width: 100%;
    height: 25px;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #E80A40;
    }
`

export const CerrarSesion = styled.div`
    width: 100%;
    height: 25px;
    cursor: pointer;
    &:hover {
        transition: all 0.2s ease-in-out;
        color: #E80A40;
    }
`

