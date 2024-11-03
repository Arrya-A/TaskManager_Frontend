import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI'

const Auth = ({ insideRegister }) => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    username: "", email: "", password: ""
  })
  console.log(userData);

  const handleRegister = async(e) => {
    e.preventDefault()
    if (userData.username && userData.email && userData.password) {
      try {
        const result = await registerAPI(userData)
        console.log(result);

        if (result.status == 200) {

          alert(`Welcome ${result?.data?.username}. Please login`)
          setUserData({ username: "", email: "", password: "" })
          navigate('/login')
        } else {
          if (result.response.status == 406) {
            alert(result.response.data)
            setUserData({ username: "", email: "", password: "" })
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please fill the form completely")
    }
  }


  const handleLogin = async(e)=>{
    e.preventDefault()
    if(userData.email && userData.password){
        //api call
        try{
            const result=await loginAPI(userData)
            console.log(result);
            
            if(result.status==200){
                sessionStorage.setItem("user",JSON.stringify(result.data.user))
                sessionStorage.setItem("token",result.data.token)
                setUserData({ firstname: "", lastname: "", phone: "", email: "", password: "" })
                navigate('/tasks')
            }else{
                if(result.response.status==404){
                    alert(result.response.data)
                }

            }
        }catch(err){

        }
    }else{
        alert("Please fill the form completely")

    }
  }
  return (
    <div className='d-flex justify-content-center align-items-center rounded shadow' style={{ height: '100vh', width: '100%' }}>
      <div className='container w-50 '>
        <div className="card shadow p-4">
          <h4 className='fw-bolder mb-3 text-center'>
            SIGN {insideRegister ? "UP" : "IN"}
          </h4>
          <Form>
            {
              insideRegister &&
              <FloatingLabel controlId="floatingInputUsername" label="Username" className="mb-3" >
                <Form.Control value={userData.username} onChange={e => setUserData({ ...userData, username: e.target.value })} type="text" placeholder="Username" />
              </FloatingLabel>
            }
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3" >
              <Form.Control value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control value={userData.password} onChange={e => setUserData({ ...userData, password: e.target.value })} type="password" placeholder="Password" />
            </FloatingLabel>
            {
              insideRegister ? <div className="mt-3 text-center">
                <button onClick={handleRegister} className='btn btn-primary mb-2'>Register</button>
                <p>Already have an account? Click here to <Link to={'/login'}>Login</Link></p>
              </div>
                :
                <div className="mt-3  text-center">
                  <button onClick={handleLogin} className='btn btn-primary mb-2'>Login</button>
                  <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
                </div>
            }
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Auth