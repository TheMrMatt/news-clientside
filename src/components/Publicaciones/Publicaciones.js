import React from 'react'
import { Container, Wrapper, Header, Titulo, Filtrar, PubliContainer, Categorias, Categoria, Wrap } from './Elements'
import CardDash from '../NewsCards/CardDashboard/CardDash'
import { Table, TableBody } from '../Dashboard/Portadas/Elements'
import RowsNota from '../Dashboard/Portadas/RowsNota'

const Publicaciones = ({ notas }) => {

    return (
        <>
            <Container>
                <Wrapper>
                    <Header>
                        <Titulo>Todas tus Publicaciones</Titulo>
                        <Filtrar />
                    </Header>
                    <PubliContainer>
                        <Table>
                            <TableBody>
                                {
                                    notas.map(nota => <RowsNota dato={nota} />)
                                }

                            </TableBody>
                        </Table>

                    </PubliContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default Publicaciones
