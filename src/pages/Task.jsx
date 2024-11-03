import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import View from '../components/View'

const Task = () => {
  return (
    <>
    <Header insideTask={true} />
      <div style={{height:'95vh'}}>
        <div className='container-fluid'>
          <h3 className='py-5'>Hello, Arrya</h3>
    
          <View/>
    
          
        </div>
      </div>
      <div className='text-center'><Footer/></div>
    </>
  )
}

export default Task