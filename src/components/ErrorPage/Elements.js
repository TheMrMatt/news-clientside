import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom';

export const ErrorContainer = styled.div`
    height: 800px;
    
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
    position: relative;
    z-index: 1;

`

export const ErrorVideo = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const VideoBg = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.58));
        z-index: 2;
    }
`

export const ErrorContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ErrorType = styled.div`
    color: #fff;
    font-weight: bold;
    font-size: 144px;
    line-height: 176px;
    transform: rotate(-5.99deg);
    text-align: center;
`

export const ErrorP = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
`

export const Volver = styled(LinkR)`
    text-decoration: none;
    color: #E80A40;
    cursor: pointer;
`

