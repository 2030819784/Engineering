import { useRoutes, } from 'react-router-dom'
import { route } from './router'
import * as React from 'react'

const App = () => {
    const elements = useRoutes(route)
    return (
        <>
            {elements}
        </>
    )
}
export default App