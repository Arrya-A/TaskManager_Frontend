import React from 'react'

const Header = ({ insideTask }) => {
  return (
    <>
      <div className='bg-primary'>
        <div className='container p-3 '>
          <div className='d-flex justify-content-between align-items-center'>
            <h3 className='text-light'>TASK MANAGER</h3>
            {
              insideTask &&
              <button className='btn btn-outline-light'>Logout <i className='fa-solid fa-right-from-bracket'></i> </button>
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default Header