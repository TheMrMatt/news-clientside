import styled from 'styled-components'


export const Container = styled.div`
    width: 750px;
    height: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    

    &.log{
        width: 250px;
        height: 50px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    &.reg{
        width: 250px;
        height: 85px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    &.regi{
        
        height: 85px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        
        @media screen and (min-width: 320px) {
            width: 80%;
            
        }
    
        @media screen and (min-width: 768px) {
            width: 515px;
            
        }
    
    
        @media screen and (min-width: 993px) {
            width: 515px;
        }
    
        @media screen and (min-width: 1200px) {
            width: 515px;
    
        }

    }

`

export const Label = styled.label`
    
    
    width: 100%;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */


    /* Secondary/Base */

    color: #262626;

    &.log{
        display: none;
    }
    
    &.reg{
        width: 100%;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */
    
    
        /* Secondary/Base */
       
        color: #262626;
    }
    &.regi{
        width: 100%;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        /* identical to box height */
    
    
        /* Secondary/Base */
        
        color: #262626;
    }
`

export const Span = styled.span`

`

export const Inp = styled.input`
    width: 100%;
    min-height: 50px;
    margin-top: 5px;   
    border: 1px solid #262626;
    border-width: thin;
    border-radius: 5px;
    padding: 5px;
    

    color: #262626;

    
`

export const Error = styled.div`
    color: red;
    margin-top: 5px;
`