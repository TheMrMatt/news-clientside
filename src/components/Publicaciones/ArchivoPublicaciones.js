import React from 'react'
import { Container, Wrapper, Header, Titulo, Filtrar, PubliContainer, Categorias, Categoria, Wrap } from './Elements'
import CardDash from '../NewsCards/CardDashboard/CardDash'
import { Table, TableBody } from '../Dashboard/Portadas/Elements'
import RowsArchivo from '../Dashboard/Portadas/RowsArchivo'
import Buscador from '../Buscador/Buscador'

const ArchivoPublicaciones = ({ notas }) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Header>
                        <Titulo>Todas las Publicaciones</Titulo>
                        <Filtrar />
                    </Header>
                    <Buscador />
                    <PubliContainer>
                        <Table>
                            <TableBody>
                                {
                                    notas.map(nota => <RowsArchivo dato={nota} />)
                                }

                            </TableBody>
                        </Table>

                    </PubliContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default ArchivoPublicaciones
