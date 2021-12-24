import React, { useEffect, useContext } from 'react'
import { Container, Wrapper, Header, Titulo, Filtrar, PubliContainer, Categorias, Categoria, Wrap, Table, TableBody, TableD, TableFoot, TableH, TableHead, TableR } from './Elements'
import { PortadaContext } from '../../../Store/context/PortadaContext'

import { NotasContext } from '../../../Store/context/NotasContext'
import { Edit } from '../../NewsCards/CardPortada/Elements'
import Rows from './Rows'
import RowsSub from './RowsSub'

const Portadas = ({ portada, loading }) => {

    const { portadas, getPortadas, loadingP } = useContext(PortadaContext)
    const { populateNotas, notas } = useContext(NotasContext);
    useEffect(() => {
        getPortadas()
        populateNotas()
    }, [loadingP])
    console.log('portadas en el componente', portadas)
    if (loadingP) {
        return <div>Loading...</div>
    } else {
        return (
            <>
                <Container>
                    <Wrapper>
                        <Header>
                            <Titulo>Todas las Portadas</Titulo>
                            <Filtrar></Filtrar>
                        </Header>
                        <PubliContainer>
                            <Categorias />
                            <Table>
                                <TableHead>
                                    <TableR>
                                        <TableH>
                                            Categorias
                                        </TableH>
                                        <TableH>
                                            Portadas
                                        </TableH>

                                    </TableR>
                                </TableHead>
                                <TableBody>
                                    <Rows dato={portadas[0]} notas={notas} />


                                </TableBody>
                            </Table>
                        </PubliContainer>


                    </Wrapper>
                </Container>
            </>
        )
    }
}

/*
    
*/

export default Portadas
