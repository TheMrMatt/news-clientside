import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    display: flex;
    
    justify-content: center;
`

export const Wrapper = styled.div`
    width: 1200px;
        
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: 320px) {
        width: 100%;
        min-height: 350px;
        flex-direction: column;
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        min-height: 350px;
        flex-direction: column;
    }


    @media screen and (min-width: 993px) {
        width: 993px;
        min-height: 354px;   
        
        flex-direction: column;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        min-height: 500px; 
         
        flex-direction: column;
    }

    
`

export const Titulo = styled.div`
    font-size: 48px;
    line-height: 72px;
    /* or 150% */

    letter-spacing: -0.015em;

    color: #FFFFFF;

    @media screen and (min-width: 320px) {
        font-size: 18px;
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

export const NotasWrapper = styled.div`
    display: flex;
    align-items: center;
    
    

    @media screen and (min-width: 320px) {
        width: 90%;
        min-height: 350px;
        justify-content: center;
        flex-direction: column;
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        min-height: 350px;
        justify-content: center;
        flex-direction: column;
    }


    @media screen and (min-width: 993px) {
        width: 993px;
        min-height: 354px;   
        justify-content: space-around;
        flex-direction: row;
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        min-height: 500px; 
        justify-content: space-around;    
        
        flex-direction: row;
    }
`