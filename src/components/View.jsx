import React from 'react'
import { Card } from 'react-bootstrap'
import Edit from './Edit'
import Add from './Add'

const View = () => {
  return (
    <>
        <div className='w-100 rounded border shadow p-3'>
            <div className='d-flex justify-content-between align-items-center my-2'>
              <h5><i className="fa-solid fa-list-check"></i>Tasks</h5>
              <Add/>
            </div>
    
    
            {/* task card div starts*/}
    
            <div className='row w-100 '>
              <div className='col-md-3 mb-4'>
                <Card style={{ width: '100%' }} >
                  <Card.Body>
                    <Card.Title>Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <div className='d-flex justify-content-end'>
                      <Edit/>
                      <button className='btn ms-1 fs-5'><i className="fa-solid fa-trash-can" style={{ color: 'red' }}></i></button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
    
    
    
          </div>
        
    </>
  )
}

export default View