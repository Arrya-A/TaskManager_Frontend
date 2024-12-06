import React from 'react'

const Header = ({ insideTask }) => {
  return (
    <>
      <div className='bg-light'>
        <div className='container p-3 '>
          <div className='d-flex justify-content-between align-items-center'>
            <h3 className='text-primary title'>TaskTrack</h3>
            {
              insideTask &&
              <button className='btn btn-outline-primary'>Logout <i className='fa-solid fa-right-from-bracket'></i> </button>
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Header