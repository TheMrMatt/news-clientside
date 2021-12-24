import React from 'react'

import OverlayLoad from '../../components/utils/OverlayLoad'
import ContextoSvg from '../../components/utils/ContextoSvg'

const LoadingScreen = () => {
    
    return(
        <div>
                <OverlayLoad/>
                <ContextoSvg />
        </div>
    )
}

export default LoadingScreen
