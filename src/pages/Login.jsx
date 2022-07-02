import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

const Login = () => {
  const { loginAuth } = useAuthContext()
  const [error, setError] = useState(null)

  const defaultValues = {
    email: 'danylo@gmail.com',
    password: 'gatito123'
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    
    try {
      await loginAuth(defaultValues)
    } catch (wrong) {
      setError(wrong.response.data.message)
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className='form-login border border-primary'>
      <div className='mb-3'>
        <h3 className='titulo'>BIENVENIDO</h3>
        {error && <p className='m-0 text-danger'>{error}</p>}
      </div>
      <div>
        <input className='form-control'
          name='email'
          placeholder='Email'
          type='text'
          autoComplete='off'
        />
      </div>
      <div className='mb-3'>
        <input
          name='password'
          placeholder='Password'
          type='password'
          className='form-control'
        />
      </div>
           
      <button type='submit' className='w-100 btn btn-primary'>Login</button>
    </form>
  )
}
export default Login