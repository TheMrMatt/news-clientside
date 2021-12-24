import React from 'react'
import { useState } from 'react/cjs/react.development'
import { BuscadorInput, BuscarButton, Container, Wrapper } from './Elements'

const Buscador = () => {
    const [value, setValue] = useState('')

    const onChange = (e) => {

        setValue(e.target.value);
    };

    const mostrar = () => {
        console.log(value);
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <BuscadorInput label="Buscador"
                        name="buscador"
                        type="text"
                        placeholder="Busca una nota "
                        value={value}
                        onChange={onChange}
                    />
                    <BuscarButton onClick={() => mostrar()}>Buscar</BuscarButton>
                </Wrapper>
            </Container>
        </>
    )
}

export default Buscador
