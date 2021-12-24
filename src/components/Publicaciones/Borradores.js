import React from 'react'
import { Container, Wrapper, Header, Titulo, Filtrar, PubliContainer, Categorias, Categoria, Wrap } from './Elements'
import CardDash from '../NewsCards/CardDashboard/CardDash'
import { Table, TableBody } from '../Dashboard/Portadas/Elements'
import RowBorrador from '../Dashboard/Portadas/RowBorrador'


const Borradores = ({ notas }) => {
    return (
        <>
            <Container>
                <Wrapper>
                    <Header>
                        <Titulo>Tus Borradores</Titulo>
                        <Filtrar />
                    </Header>
                    <PubliContainer>
                        <Table>
                            <TableBody>
                                {
                                    notas.map(nota => <RowBorrador dato={nota} />)
                                }

                            </TableBody>
                        </Table>

                    </PubliContainer>
                </Wrapper>
            </Container>
        </>
    )
}

export default Borradores
