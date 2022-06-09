import React from 'react'
import propTypes from 'prop-types'
import './styles/App.sass'

const App = ({ title }) => (
  <div className="app">
    <h1 className="title">{title}</h1>
  </div>
)

App.propTypes = {
  title: propTypes.string,
}

App.defaultProps = {
  title: 'React + Vite App',
}

export default App
