import styled from "styled-components";
import { Form } from 'formik';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;    
    flex-direction: column;
    
    background: linear-gradient(180deg, rgba(232, 10, 64, 0.85) -38.92%, rgba(255, 255, 255, 0) 103.27%), #000000;
    
    
`

export const TextWrap = styled.div`
    height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    
`

export const Logo = styled.div`
    width: 198px;
    height: 44px;

    

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

    color: #000;
`

export const SubT = styled.div`
    width: 198px;
    height: 44px;

    

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 44px;
    /* identical to box height */

    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0.1em;

    color: #000;
`


export const Wrapper = styled.div`
    
    width: 600px;    
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;    
    flex-direction: column;
    background-color: #FFF;
    border-radius: 10%;
    color: #000;
    
    
   
`

export const FormulatioTitular = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1em;
    
    color: #000;
`

export const Formulario = styled(Form)`
    
    margin: 0px 0px 100px 0px;


    @media screen and (min-width: 320px) {
        width: 80%;
        
    }

    @media screen and (min-width: 768px) {
        width: 515px;
        
    }


    @media screen and (min-width: 993px) {
        width: 515px;

    }

    @media screen and (min-width: 1200px) {
        width: 515px;

    }
    
`

export const InputsWrapper = styled.div`
   
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin: 30px 0px 30px 0px;

    @media screen and (min-width: 320px) {
        width: 80%;
        
    }

    @media screen and (min-width: 768px) {
        width: 515px;
        
    }


    @media screen and (min-width: 993px) {
        width: 515px;

    }

    @media screen and (min-width: 1200px) {
        width: 515px;

    }
`

export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;    
    
    
`


export const ButtonSubmit = styled.button`
    cursor: pointer;
    border: none;
    
    width: 200px;
    height: 50px;
    background: #E80A40;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin-bottom: 15px;

    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: black;
        color: #E80A40;
    }

`