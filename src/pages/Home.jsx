import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
    <Header/>
      <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '90vh', background: 'linear-gradient(135deg, #000000, #434343)', color:'white' }}>
        <h2>Welcome to TaskTrack, Your</h2>
        <h2>Task Manager</h2>
        <p className='mt-5'>Manage your tasks effortlessly with TaskTrack. Sign in to access your</p>
        <p>personalized dashboard or sign up to start organising your life today. Stay</p>
        <p>on top of your tasks with ease.</p>
        <div className='d-flex mt-3'>
          <Link to={'/login'} className='btn btn-light me-3 rounded-1' >Sign In</Link>
          <Link to={'/register'} className='btn btn-light rounded-1' >Sign Up</Link>
        </div>
      </div>
    </>
  )
}

export default Home