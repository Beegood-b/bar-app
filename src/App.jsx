import { useState } from 'react'
import React from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Video from './components/VideoComponent/Video'
import Button from './components/Button/Button'

const App = () => {
  return (
    <div>
      <Header />
      <Video />
      <Button />
      <Footer />
    </div>
  )
}

export default App
