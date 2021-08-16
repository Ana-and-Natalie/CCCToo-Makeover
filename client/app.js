import React from 'react'

import {Navbar} from './components'
import Routes from './routes'

import {Button} from 'react-bootstrap'

const App = () => {
  return (
    <div>
      <Button>CLICK ME!</Button>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
