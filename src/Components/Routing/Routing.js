import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Explore, Landing } from '../../Pages'

const Routing = () => {
  return (
    <div className='landing'>
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='explore' element={<Explore />}></Route>
      </Routes>
    </div>
  )
}

export default Routing
