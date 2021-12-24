import styled from 'styled-components'
import { FaFilter } from "react-icons/fa";

export const Container = styled.div`
    width: 80%;
    
    display: flex;
    align-items: center;
    justify-content: center;    
    flex-direction: column;
    margin-left: 20%;
`

export const Wrapper = styled.div`
    Width: 90%;
    

    display: flex;
        
    flex-direction: column;
    
    border-radius: 10px;
    border: 1px solid #DFE0EB;
    background: #FFF;
`

export const Header = styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-between;    
    flex-direction: row;
    border-bottom: 1px solid #DFE0EB;
    padding: 0px 30px 0px 30px;

    
`

export const Titulo = styled.div`
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.4px;

    /* grayscale / black */

    color: #252733;
`

export const Filtrar = styled(FaFilter)`
    width: 25px;
    height: 25px;
    
    cursor: pointer;
`

export const PubliContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;    
    flex-direction: column;
    
`

export const Categorias = styled.div`
    width: 100%;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: flex-start;    
    flex-direction: row;
    
    padding: 0px 30px 0px 30px;

    border-bottom: 1px solid #DFE0EB;
`

export const Categoria = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    margin-right: 200px;
`

export const Wrap = styled.div`
    width: 100%;

    margin-bottom: 70px;
    
`