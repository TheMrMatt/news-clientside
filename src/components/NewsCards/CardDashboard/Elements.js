import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;


    padding: 0px 30px 0px 30px;

    @media screen and (min-width: 320px) {
        width: 100%;
        height: 90px; 
    }

    @media screen and (min-width: 768px) {
        width: 100%;
        height: 90px; 
    }


    @media screen and (min-width: 993px) {
        width: 100%;
        height: 90px; 
    }

    @media screen and (min-width: 1200px) {
        width: 100%;
        height: 90px;  
    }

    border: 1px solid #DFE0EB;
`

export const Titulo = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    letter-spacing: 0.2px;

    /* grayscale / black */

    color: #252733;
`

export const Categoria = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    letter-spacing: 0.2px;

    /* grayscale / black */

    color: #252733;
`

export const FechaDePublicacion = styled.div`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    letter-spacing: 0.2px;

    /* grayscale / black */

    color: #252733;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 125px;


`

export const Edit = styled(LinkR)`
    width: 50px;
    height: 25px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    text-decoration: none;
    color: #000000;
    background: #E80A40;
    display: flex;
    justify-content: center;
    align-items: center;


    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: black;
        color: #E80A40;
    }
    cursor: pointer;

`

export const Delete = styled.button`
    width: 50px;
    height: 25px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;

    color: #000000;
    background: #E80A40;



    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: black;
        color: #E80A40;
    }
    cursor: pointer;
`