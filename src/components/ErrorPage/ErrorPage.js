import React from 'react'
import Video from '../../Assets/Videos/404.mp4'
import { ErrorContainer, ErrorVideo, VideoBg, ErrorContent, ErrorType, ErrorP, Volver } from './Elements'

const ErrorPage = () => {
    return (
        <>
            <ErrorContainer>
                <VideoBg>
                    <ErrorVideo autoPlay loop muted src={Video} type="video/mp4" />
                </VideoBg>
                <ErrorContent>
                    <ErrorType>404</ErrorType>
                    <ErrorP>Disculpa, esta pagina no esta disponible :(.
                        <br />
                        Puedes volver a la pagina principal
                        haciendo click <Volver to='/' exact='true'>aqui</Volver>.

                    </ErrorP>
                </ErrorContent>
            </ErrorContainer>
        </>
    )
}

export default ErrorPage
