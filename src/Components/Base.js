import React from 'react'
import Comstomnav from './Comstomnav'

const Base = ({ title = "Wekcome to out website ", children }) => {
  return (
    <div className='container-fluid'>

      <Comstomnav></Comstomnav>



      {children}







    </div>
  )
}

export default Base
