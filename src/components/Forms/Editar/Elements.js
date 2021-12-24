import styled from 'styled-components'
import { Form } from 'formik';

export const Container = styled.div`
    width: 80%;
    
    display: flex;
    align-items: center;
    justify-content: center;    
    flex-direction: column;
    margin-left: 20%;

    
    
`



export const Wrapper = styled.div`
    Width: 1122px;
    

    display: flex;
    align-items: center;
    justify-content: center;    
    flex-direction: column;

    border-radius: 1%;

    background: #FFF;

   
`

export const FormulatioTitular = styled.div`
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.4px;
    margin-bottom: 20px;
    /* grayscale / black */

    color: #252733;
`

export const Formulario = styled(Form)`
    width: 800px;

    display: flex;
    align-items: center;
        
    flex-direction: column;    
    margin-top: 50px;

    
`

export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;    
    flex-direction: row;
    margin-right: 50px;
`


export const ButtonSubmit = styled.button`
    width: 150px;
    height: 50px;

    cursor: pointer;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
    background: #E80A40;
    margin: 30px 0px 30px 15px;


    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: black;
        color: #E80A40;
    }

`

export const ButtonCancel = styled.button`
    width: 150px;
    height: 50px;

    cursor: pointer;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
    background: #E80A40;
    margin: 30px 0px 30px 15px;


    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: black;
        color: #E80A40;
    }
`

export const InputContainer = styled.div`
    width: 750px;
    
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const FileInput = styled.input`
    
`

export const FileLabel = styled.label`
    width: 100%;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */
    margin-bottom: 10px;

    /* Secondary/Base */

    color: #262626;
`

export const TagsContainer = styled.div`
width: 100%;
height:150px;        
display: flex;
justify-content: center
`

export const TagsWrapper = styled.div`
display: grid;
row-gap: 50px;
column-gap: 10px;
align-items: center;
width: 100%;
@media screen and (min-width: 320px) {
    
   
    column-gap: 10px;    
    min-height: 100px;
    row-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
}

@media screen and (min-width: 768px) {
    row-gap: 10px;
    min-height: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}


@media screen and (min-width: 993px) {
    column-gap: 10px;    
    min-height: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

@media screen and (min-width: 1200px) {
    column-gap: 5px;    
    min-height: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
    
`

export const EliminarTag = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    width: 15px;
    height: 15px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-left: 10px;
    color: #121317;

    &:hover{
        color: #FFF;
    }
`