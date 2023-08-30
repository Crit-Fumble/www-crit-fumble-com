import React, { Suspense, useState } from 'react'

import {  useRoutes } from 'react-router-dom'

import routes from '~react-pages'

function App() {

  return (
    <div className='w-full m-0'>
      <Suspense fallback={<p>Loading...</p>}>
       {useRoutes(routes)}
      </Suspense>

    </div>
  )
}

export default App
