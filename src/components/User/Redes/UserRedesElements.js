import styled from 'styled-components'
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare} from 'react-icons/fa'

export const Container = styled.div`
    width: 100%;
    display: flex;

    justify-content: center;
`

export const Wrapper = styled.div`
    width: 1200px;
        
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;

    @media screen and (min-width: 320px) {
        width: 100%;
        min-height: 250px;
        flex-direction: column;
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        min-height: 250px;
        flex-direction: column;
    }


    @media screen and (min-width: 993px) {
        width: 993px;
        min-height: 300px;   
        
        flex-direction: column;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        min-height: 300px; 
         
        flex-direction: column;
    }

    border-top: 1px solid #FFF;
`

export const MisRedes = styled.div`
    font-size: 48px;
    line-height: 72px;
    /* or 150% */

    letter-spacing: -0.015em;

    color: #FFFFFF;

    @media screen and (min-width: 320px) {
        font-size: 24px;
        line-height: 72px;
    }

    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 72px;
    }


    @media screen and (min-width: 993px) {
        font-size: 36px;
        line-height: 72px;
    }

    @media screen and (min-width: 1200px) {
        font-size: 48px;
        line-height: 72px;
    }

`

export const RedesWrap = styled.div`
    width: 400px;     
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 320px) {
        width: 300px;    
    }
    
    @media screen and (min-width: 768px) {
        width: 400px;    
    }
    
    
    @media screen and (min-width: 993px) {
        width: 400px;    
    }
    
    @media screen and (min-width: 1200px) {
        width: 400px;    
    }

`

export const Redes = styled.a`
    width: 50px;     
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;


    
`

export const FaceIcon = styled(FaFacebookSquare)`
    width: 100%;     
    height: 100%;

    color: #fff;
`

export const InstaIcon = styled(FaInstagramSquare)`
    width: 100%;     
    height: 100%; 
    
    color: #fff;
`

export const TwitterIcon = styled(FaTwitterSquare)`
    width: 100%;     
    height: 100%;

    color: #fff;
`

export const YoutubeIcon = styled(FaYoutubeSquare)`
    width: 100%;     
    height: 100%;

    color: #fff;
`