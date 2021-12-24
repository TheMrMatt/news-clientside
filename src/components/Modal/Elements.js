import styled from 'styled-components'
import { motion, AnimatePresence } from "framer-motion"

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .7);
    z-index: 10000000;


`

export const ModalContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content-content: center;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    
    border-radius: 31px;
    z-index: 10000000;

    &.modal{
        hidden:{
            y: -100vh;
            opacity: 0;
        }
        visible: {
            y: 200px;
            opacity: 1;
            transition: {delay: 0.2s}
        }
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
    justify-content: center;
    flex-direction: row;
    
    margin-bottom: 25px;

    @media screen and (min-width: 320px) {
        width: 80%;
        
    }

    @media screen and (min-width: 768px) {
        width: 600px;
        
    }


    @media screen and (min-width: 993px) {
        width: 600px;
    }

    @media screen and (min-width: 1200px) {
        width: 600px;

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

    color: #000000;
`