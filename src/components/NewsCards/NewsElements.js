    import styled from 'styled-components'
    import {Link as LinkR} from 'react-router-dom';



    export const ImgOverlay1 = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        
        
        transition-timing-function: cubic-bezier(.86,.01,.15,.99);
        
        transition-duration: 1s;

        :before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(232, 10, 64, 0.5) 10%, rgba(255, 255, 255, 0) 80%), rgba(0, 0, 0, 0) 0%;
            z-index: 2;
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
            -webkit-transform-origin: 50% 100%; 
            transform-origin: 0% 0%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.6s;
            transition-duration: 0.6s;
            -webkit-transition-timing-function: ease-in-out;
            transition-timing-function: cubic-bezier(.86,.01,.15,.99);
        }



    `

    export const Cover = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;

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

    export const ArticuloTitle = styled.h2`
        font-style: normal;
        font-weight: bold;
        font-size: 26px;
        line-height: 36px;
        transform: translateY(0px);
        transition: 0.5s;

        text-align: center;
        letter-spacing: -0.015em;
        
        color: #FFFFFF;
        @media screen and (min-width: 320px) {
            font-size: 14px;
            width: 100%;
        }
        @media screen and (min-width: 768px) {
            width: 70%;
        }
        @media screen and (min-width: 993px) {
            width: 65%;
        }
        @media screen and (min-width: 1200px) {
            width: 80%;
        }
    `    

    export const Desc = styled.div`
        
        width: 70%
        font-weight: 500;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.45em;
        text-transform: uppercase;
        font-feature-settings: 'tnum' on, 'lnum' on;
        transform: translateY(0px);    
        color: #FFFFFF;
        opacity: 0;
        visibility: hidden;
        margin-bottom: 50px;
        pointer-events: none;

        &.a{
            width: 80%;
            
            font-weight: normal;
            font-size: 12px;
            line-height: 20px;
            /* or 200% */

            text-align: center;
            letter-spacing: -0.015em;

            transform: translateY(0px);    
            color: #FFFFFF;
            opacity: 0;
            visibility: hidden;
            margin-bottom: 50px;
            
        }

        &.b{
            width: 100%;
            
            font-weight: normal;
            font-size: 12px;
            line-height: 20px;
            /* or 200% */

            text-align: center;
            letter-spacing: -0.015em;

            transform: translateY(0px);    
            color: #FFFFFF;
            opacity: 0;
            visibility: hidden;
            margin-bottom: 50px;
            
        }

        &.c{
            width: 80%;
            
            font-weight: normal;
            font-size: 12px;
            line-height: 20px;
            /* or 200% */

            text-align: center;
            letter-spacing: -0.015em;

            transform: translateY(0px);    
            color: #FFFFFF;
            opacity: 0;
            visibility: hidden;
            margin-bottom: 50px;
            
        }

    `    

    export const Portada1Container = styled(LinkR)`
        
        
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
        box-sizing: border-box;
        
        @media screen and (min-width: 320px) {
            width: 100%;
            height: 350px;
        }

        @media screen and (min-width: 768px) {
            width: 688px;
            height: 350px;
        }


        @media screen and (min-width: 993px) {
            width: 648px;
            height: 295px;
        }

        @media screen and (min-width: 1200px) {
            width: 750px;
            height: 300px;
        }


        &:hover {
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            
            ${ImgOverlay1}:hover:before{
                -webkit-transform: scaleY(1);
                transform: scaleY(1);
            }    


            ${ArticuloTitle} {
                
                transform: translateY(-50px);
                transition-delay: 0.20s;
                
            }
            ${ Desc} {
                opacity: 1;
                visibility: visible;
                transform: translateY(-20px);
                transition-delay: 0.5s;
                
                
            }
        }

    `

    export const ImgArticulo1 = styled.img`
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;

        background: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73),${props => props.url});
        background-size: cover;
    `

    export const ContenidoArticulo = styled.div`
        
        height: 80px;
        pointer-events: none;
        z-index: 3;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between; 
        @media screen and (min-width: 320px) {
            width: 90%;
            
        }

        @media screen and (min-width: 768px) {
            width: 688px;
            
        }


        @media screen and (min-width: 993px) {
            width: 648px;
            
        }

        @media screen and (min-width: 1200px) {
            width: 750px;
            
        }
        
    `

    export const ImgOverlay2 = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;

        transition-timing-function: cubic-bezier(.86,.01,.15,.99);
        
        transition-duration: 1s;

        :before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(232, 10, 64, 0.5) 10%, rgba(255, 255, 255, 0) 80%), rgba(0, 0, 0, 0) 0%;
            z-index: 2;
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
            -webkit-transform-origin: 50% 100%; 
            transform-origin: 0% 0%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.6s;
            transition-duration: 0.6s;
            -webkit-transition-timing-function: ease-in-out;
            transition-timing-function: cubic-bezier(.86,.01,.15,.99);
        }
    `

    export const ImgArticulo2 = styled.img`
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    `
    export const ContenidoArticulo2 = styled.div`
        
        height: 32px;
        pointer-events: none;
        z-index: 3;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        @media screen and (min-width: 320px) {
            width: 80%;
            
        }

        @media screen and (min-width: 768px) {
            width: 688px;
            
        }


        @media screen and (min-width: 993px) {
            width: 202px;
            
        }

        @media screen and (min-width: 1200px) {
            width: 230px;
           
        }
        
    `

    export const ArticuloTitle2 = styled.h2`
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 36px;
        transform: translateY(60px);
        transition: 0.5s;
        text-align: center;
        pointer-events: none;
        letter-spacing: -0.015em;

        color: #FFFFFF;

        @media screen and (min-width: 768px) {
            font-size: 24px;
        }


        @media screen and (min-width: 993px) {
            font-size: 12px;
        }

        @media screen and (min-width: 1200px) {
            font-size: 14px;
        }
    `
    export const Portada2Container = styled(LinkR)`
        width: 688px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
        box-sizing: border-box;

        @media screen and (min-width: 320px) {
            width: 100%;
            height: 350px;
        }

        @media screen and (min-width: 768px) {
            width: 688px;
            height: 350px;
        }


        @media screen and (min-width: 993px) {
            width: 202px;
            height: 253px;
        }

        @media screen and (min-width: 1200px) {
            width: 230px;
            height: 275px;
        }

        &:hover {
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            
            ${ImgOverlay2}:hover:before{
                -webkit-transform: scaleY(1);
                transform: scaleY(1);
            }    


            ${ArticuloTitle2} {
                
                transform: translateY(20px);
                transition-delay: 0.20s;
                
            }
            ${ Desc} {
                opacity: 1;
                visibility: visible;
                transform: translateY(-20px);
                transition-delay: 0.5s;
                
                &.a{
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(40px);
                    transition-delay: 0.5s;
                }
            }
        }
    `    
    
    export const ImgOverlayC = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;

        transition-timing-function: cubic-bezier(.86,.01,.15,.99);
        
        transition-duration: 1s;

        :before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(232, 10, 64, 0.5) 10%, rgba(255, 255, 255, 0) 80%), rgba(0, 0, 0, 0) 0%;
            z-index: 2;
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
            -webkit-transform-origin: 50% 100%; 
            transform-origin: 0% 0%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.6s;
            transition-duration: 0.6s;
            -webkit-transition-timing-function: ease-in-out;
            transition-timing-function: cubic-bezier(.86,.01,.15,.99);
        }
    `

    export const ImgArticuloC = styled.img`
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    `
    export const ContenidoArticuloC = styled.div`
        width: 233px;
        height: 32px;
        pointer-events: none;
        z-index: 3;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media screen and (min-width: 320px) {
            width: 90%;
            
        }

        @media screen and (min-width: 768px) {
            width: 688px;
            
        }


        @media screen and (min-width: 993px) {
            width: 202px;
            
        }

        @media screen and (min-width: 1200px) {
            width: 230px;
            
        }
    `

    export const ArticuloTitleC = styled.h2`
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        pointer-events: none;
        text-align: center; 
        line-height: 36px;
        transform: translateY(60px);
        transition: 0.5s;
           
        
        letter-spacing: -0.015em;

        color: #FFFFFF;

        @media screen and (min-width: 768px) {
            font-size: 24px;
        }


        @media screen and (min-width: 993px) {
            font-size: 12px;
        }

        @media screen and (min-width: 1200px) {
            font-size: 14px;
        }
    `
    export const PortadaCContainer = styled(LinkR)`
        width: 688px;
        height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
        box-sizing: border-box;

        @media screen and (min-width: 320px) {
            width: 100%;
            height: 350px;
        }

        @media screen and (min-width: 768px) {
            width: 688px;
            height: 350px;
        }


        @media screen and (min-width: 993px) {
            width: 202px;
            height: 253px;
        }

        @media screen and (min-width: 1200px) {
            width: 230px;
            height: 275px;
        }

        &:hover {
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            
            ${ImgOverlayC}:hover:before{
                -webkit-transform: scaleY(1);
                transform: scaleY(1);
            }    


            ${ArticuloTitleC} {
                
                transform: translateY(20px);
                transition-delay: 0.20s;
                
            }
            ${ Desc} {
                opacity: 1;
                visibility: visible;
                transform: translateY(-20px);
                transition-delay: 0.5s;
                
                &.a{
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(40px);
                    transition-delay: 0.5s;
                }
            }
        }
    `

    export const ImgOverlay3 = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;

        transition-timing-function: cubic-bezier(.86,.01,.15,.99);
        
        transition-duration: 1s;

        :before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(232, 10, 64, 0.5) 10%, rgba(255, 255, 255, 0) 80%), rgba(0, 0, 0, 0) 0%;
            z-index: 2;
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
            -webkit-transform-origin: 50% 100%; 
            transform-origin: 0% 0%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.6s;
            transition-duration: 0.6s;
            -webkit-transition-timing-function: ease-in-out;
            transition-timing-function: cubic-bezier(.86,.01,.15,.99);
        }
    `

    export const ImgArticulo3 = styled.img`
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    `
    export const ContenidoArticulo3 = styled.div`
        width: 284px;
        height: 36px;
        pointer-events: none;
        z-index: 3;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        @media screen and (min-width: 320px) {
            width: 90%;
            
        }

        @media screen and (min-width: 768px) {
            width: 688px;
            
        }


        @media screen and (min-width: 993px) {
            width: 295px;
            
        }

        @media screen and (min-width: 1200px) {
            width: 370px;
            
        }
    `

    export const ArticuloTitle3 = styled.h2`
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 36px;
        pointer-events: none;
        transform: translateY(30px);
        transition: 0.5s;
        
        letter-spacing: -0.015em;

        color: #FFFFFF;
    `
    export const Portada3Container = styled(LinkR)`
        width: 370px;
        height: 160px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
        box-sizing: border-box;

        @media screen and (min-width: 768px) {
            width: 688px;
            height: 350px;
        }


        @media screen and (min-width: 993px) {
            width: 295px;
            height: 150px;
        }

        @media screen and (min-width: 1200px) {
            width: 370px;
            height: 160px;
        }
        &:hover {
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            
            ${ImgOverlay3}:hover:before{
                -webkit-transform: scaleY(1);
                transform: scaleY(1);
            }    


            ${ArticuloTitle3} {
                
                transform: translateY(10px);
                transition-delay: 0.20s;
                
            }
            ${ Desc} {
                opacity: 1;
                visibility: visible;
                transform: translateY(-20px);
                transition-delay: 0.5s;
                
                &.b{
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(20px);
                    transition-delay: 0.5s;
                }
            }
        }
    `    
    

    export const ImgOverlay4 = styled.div`
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;

        transition-timing-function: cubic-bezier(.86,.01,.15,.99);
        
        transition-duration: 1s;

        :before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(232, 10, 64, 0.5) 10%, rgba(255, 255, 255, 0) 80%), rgba(0, 0, 0, 0) 0%;
            z-index: 2;
            -webkit-transform: scaleY(0);
            transform: scaleY(0);
            -webkit-transform-origin: 50% 100%; 
            transform-origin: 0% 0%;
            -webkit-transition-property: transform;
            transition-property: transform;
            -webkit-transition-duration: 0.6s;
            transition-duration: 0.6s;
            -webkit-transition-timing-function: ease-in-out;
            transition-timing-function: cubic-bezier(.86,.01,.15,.99);
        }
    `

    export const ImgArticulo4 = styled.img`
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    `
    export const ContenidoArticulo4 = styled.div`
        
    pointer-events: none;
        z-index: 3;
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
       
        @media screen and (min-width: 320px) {
            width: 90%;
            
        }

        @media screen and (min-width: 768px) {
            width: 688px;
            
        }


        @media screen and (min-width: 993px) {
            width: 555px;
            
        }

        @media screen and (min-width: 1200px) {
            width: 679px;
            
        }
    `

    export const ArticuloTitle4 = styled.h2`
        font-style: normal;
        font-weight: bold;
        pointer-events: none;
        line-height: 36px;
        transform: translateY(30px);
        
        transition: 0.5s;

        text-align: center;
        letter-spacing: -0.015em;

        color: #FFFFFF;

        @media screen and (min-width: 320px) {
            font-size: 14px;
        }

        @media screen and (min-width: 768px) {
            font-size: 20px;
        }


        @media screen and (min-width: 993px) {
            font-size: 24px;
        }

        @media screen and (min-width: 1200px) {
            font-size: 26px;
        }
    `

    export const Portada4Container = styled(LinkR)`
        width: 679px;
        height: 275px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in-out;
        box-shadow: 0px 5px 10px rgba(0,0,0,0.5);
        box-sizing: border-box;

        @media screen and (min-width: 320px) {
            width: 100%;
            height: 350px;
        }

        @media screen and (min-width: 768px) {
            width: 688px;
            height: 350px;
        }


        @media screen and (min-width: 993px) {
            width: 555px;
            height: 254px;
        }

        @media screen and (min-width: 1200px) {
            width: 679px;
            height: 275px;
        }

        &:hover {
            transform: scale(1.02);
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            
            ${ImgOverlay4}:hover:before{
                -webkit-transform: scaleY(1);
                transform: scaleY(1);
            }    


            ${ArticuloTitle4} {
                
                transform: translateY(-20px);
                transition-delay: 0.20s;
                
            }
            ${ Desc} {
                opacity: 1;
                visibility: visible;
                transform: translateY(-20px);
                transition-delay: 0.5s;

                &.c{
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(20px);
                    transition-delay: 0.5s;
                }
                
            }
        }
    `