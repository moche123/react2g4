import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup'
import './login.css'

const Login = ({setStatus}:any) => {
  
  const [message, setMessage] = useState('');

  type Form = {
    email: string;
    password: string;
  } 

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Email invalid").required("Email is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: async(values:Form) => {
      const { email,password } = values

      try{

        console.log(email)
        console.log(password)

        localStorage.setItem('token','abc123')
        
        setMessage('Welcome')
        
        setTimeout(() => {
          setMessage('')
          setStatus('auth')

        },2000)


      }catch(error){
        console.log(error)
      }

    }
  })

  const showMessage = () => {
    return (
      <div className="superiorMessage">
        <p>{message}</p>
      </div>
    )
  }
  
  return (
    <div className='text-center login'>
      {message.length>0 && showMessage()}

      <h1>Login</h1>

      <form onSubmit={ formik.handleSubmit }>
          <div className='display-block'>
            <label className='display-block' htmlFor='email'/>
            <input 
              type="text"
              id="email"
              placeholder="User email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              />

              {
                formik.touched.email && formik.errors.email &&
                <div className="text-error">
                  <p>{formik.errors.email}</p>
                </div>
              }

          </div>
          
          <div className='display-block mt-2'>
            <label className='display-block'  htmlFor='password'/>
            <input 
              type="password"
              id="password"
              placeholder="User password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              />
              {
                formik.touched.password && formik.errors.password &&
                <div className="text-error">
                  <p>{formik.errors.password}</p>
                </div>
              }
          </div>

          <input type="submit" value="init session" className='mt-2'/>
      </form>

    </div>
  )
}

export default Login