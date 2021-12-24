import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const Wrapper = styled.div`
    

    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
   margin-top: 125px;
    @media screen and (min-width: 320px) {
       width: 90%;
       
        
    }

    @media screen and (min-width: 768px) {
        width: 688px;
        
        
    }


    @media screen and (min-width: 993px) {
        width: 993px;
        
       
    }

    @media screen and (min-width: 1200px) {
        width: 1200px;
        
        
    }

    
`

export const NombreUsuario = styled.div`
   
    min-height: 50px;

    font-weight: 500;
    
    text-align: center;
    letter-spacing: 0.23em;
    text-transform: uppercase;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #FFFFFF;

    

    @media screen and (min-width: 320px) {    
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 10px;;
     }
 
     @media screen and (min-width: 768px) { 
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 15px;
     }
 
 
     @media screen and (min-width: 993px) {
        font-size: 36px;
        line-height: 44px;
        margin-bottom: 25px;
     }
 
     @media screen and (min-width: 1200px) {
        font-size: 36px;
        line-height: 44px;
        margin-bottom: 50px;
     }

   
`

export const Descripcion = styled.div`
    
    min-height: 148px;

    margin-bottom: 25px;
    font-weight: 500;
    
    text-align: center;
    letter-spacing: 0.45em;
    text-transform: uppercase;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #FFFFFF;

    @media screen and (min-width: 320px) {
        font-size: 11px;
        line-height: 13px;
         
     }
 
     @media screen and (min-width: 768px) { 
        font-size: 12px;
        line-height: 15px;
     }
 
 
     @media screen and (min-width: 993px) {
        
        font-size: 14px;
        line-height: 17px;
        
     }
 
     @media screen and (min-width: 1200px) {
        
       
        font-size: 18px;
        line-height: 22px;
         
     }

    
`