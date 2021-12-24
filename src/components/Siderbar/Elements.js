import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.div`
    min-width: 350px;
    min-height: 100vh; 

    left: 0px;
    top: 0px;
    position: fixed;
    background: #121317;


    
`

export const Wrapper = styled.div`
    height: 1234px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

   
`

export const Logo = styled(LinkR)`
    width: 198px;
    height: 44px;

    margin: 30px 0px 50px 0px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 44px;
    /* identical to box height */

    
    display: flex;
    align-items: center;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.1em;

    color: #FFFFFF;
`

export const Wrap = styled.div`
    width: 100%;

    display: flex;

    flex-direction: column;
`

export const Opcion = styled(LinkR)`
    width: 100%;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    letter-spacing: 0.2px;

    /* accent / light */

    color: #A4A6B3;

    

    &:focus {
        border-left: 3px solid #E80A40;
        background: #363740;
        color: #DDE2FF;
    }
`

export const Logout = styled.div`
    width: 100%;
    height: 56px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    letter-spacing: 0.2px;

    /* accent / light */

    color: #A4A6B3;

    

    &:focus {
        border-left: 3px solid #E80A40;
        background: #363740;
        color: #DDE2FF;
    }
`