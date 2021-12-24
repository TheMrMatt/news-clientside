import React from 'react'
import { Eliminar, TagCont, TagTitulo } from './Elements'

const Tag = ({ children }) => {


    return (
        <>
            <TagCont>
                <TagTitulo>
                    {children}
                </TagTitulo>
                <Eliminar>x</Eliminar>
            </TagCont>
        </>
    )
}

export default Tag
