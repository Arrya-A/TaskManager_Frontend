import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
        <h3>Manage Your Tasks</h3>
        <Link to={'/login'} className='btn btn-primary' >Get Started</Link>
      </div>
    </>
  )
}

export default Home