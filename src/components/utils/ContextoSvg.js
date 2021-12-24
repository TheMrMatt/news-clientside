import React from 'react'
import ReactDom from 'react-dom'
import './ContextoSvg.css'

const ContextoSvg = () => {
    return ReactDom.createPortal(
        <svg viewBox="0 0 1320 300" className="svg">
            <text x="50%" y="50%" dy=".35em" text-anchor="middle" className="text">
                Contexto
            </text>
        </svg>,
        document.getElementById('portal')
    )
}

export default ContextoSvg
