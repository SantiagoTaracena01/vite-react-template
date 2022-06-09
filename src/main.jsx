import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/main.sass'

const root = document.getElementById('root')
const reactRoot = ReactDOM.createRoot(root)

reactRoot.render(
  <React.StrictMode>
    <App title="Vite + React" />
  </React.StrictMode>
)
