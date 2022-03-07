import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'

setTimeout(() => {
    ReactDOM.render(
        <React.StrictMode>
            <Routes />
        </React.StrictMode>,
        document.getElementById('root')
    )
}, 1500)