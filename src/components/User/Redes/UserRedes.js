import React from 'react'
import {Container, Wrapper, MisRedes, RedesWrap, Redes, FaceIcon, InstaIcon, TwitterIcon, YoutubeIcon} from './UserRedesElements'

const UserRedes = ({user}) => {


    return (
        <>
            <Container>
                <Wrapper>
                    <MisRedes>Mis Redes</MisRedes>
                    <RedesWrap>
                        {user.redes.facebook ? <Redes href={user.redes.facebook}><FaceIcon/></Redes> : null}
                        {user.redes.instagram ? <Redes href={user.redes.instagram}><InstaIcon/></Redes> : null}
                        {user.redes.twitter ? <Redes href={user.redes.twitter}><TwitterIcon/></Redes> : null}
                        {user.redes.youtube ? <Redes href={user.redes.youtube}><YoutubeIcon/></Redes> : null}
                        
                    </RedesWrap>
                </Wrapper>
            </Container>
        </>
    )
}

export default UserRedes
