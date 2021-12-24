import styled from 'styled-components'
import { FaBell } from "react-icons/fa";

export const Container = styled.div`
    width: 80%;


    display: flex;
    align-items: center;
    justify-content: center;    
    
    margin-left: 20%;
    
    
`

export const Wrapper = styled.div`
    Width: 90%;
    Height: 128px;

    display: flex;
    align-items: center;
    justify-content: space-between;    
    flex-direction: row;

    
    
`

export const Wrap = styled.div`
    width: 250px;

    display: flex;
    align-items: center;
    justify-content: flex-end;    
    flex-direction: row;
    padding: 15px;
    
`

export const Title = styled.div`
    height: 34px;
    width: 771px;

    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.3px;
    color: #FFF;
`

export const Notificaciones = styled(FaBell)`
    width: 20px;
    height: 20px;
    color: #FFF;
`

export const Separador = styled.div`
    height: 32px;
    width: 1px;

    background: white;
    margin-right: 10px;
`

export const Usuario = styled.div`
    width: 180px;

    display: flex;
    align-items: center;
    justify-content: space-between;    
    flex-direction: row;

    
`

export const NombreUsuario = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */

    text-align: right;
    letter-spacing: 0.2px;
    color: #FFF;
`

export const PerfilUsuario = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    
`