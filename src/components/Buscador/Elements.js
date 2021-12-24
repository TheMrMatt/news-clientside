import styled from "styled-components"


export const Container = styled.div`
width: 100%;
height: 100px;
display: flex;
align-items: center;
justify-content: flex-start;
padding: 10px;
`

export const Wrapper = styled.div`
    width: 650px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

export const BuscadorInput = styled.input`
    width: 500px;
    height: 50px;
    border: 1px solid grey;
    border-radius: 20px;
    padding:15px;
    margin-right: 15px;
`

export const BuscarButton = styled.button`
width: 100px;
    height: 50px;
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