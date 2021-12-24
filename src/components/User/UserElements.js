import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    max-height: 400px;
    display: flex;
    
    align-items: flex-end;
    justify-content: center;
`

export const ImgOverlay = styled.div`
    width: 100%;
    max-height: 400px;
    
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(232, 10, 64, 0.5) 0%, rgba(255, 255, 255, 0) 100%), rgba(0, 0, 0, 0.58);
        z-index: 2;
    }  

`

export const ImgPortada = styled.img`
    width: 100%;
    max-height: 400px;
    -o-object-fit: cover;
    object-fit: cover;
`



export const FotoPerfil = styled.img`
    width: 200px;
    height: 200px;
    position: absolute;
    border-radius: 50%;
    bottom: 0; 
    transform: translate(-50%,50%);
    left: 50%;

    z-index: 4;

    @media screen and (min-width: 320px) {
        
         
     }
 
     @media screen and (min-width: 768px) {
        
         
     }
 
 
     @media screen and (min-width: 993px) {
        
        
     }
 
     @media screen and (min-width: 1200px) {
        
         
     }


    
`