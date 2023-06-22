import { useContext } from 'react'
import { LoginForm } from '../components/login/LoginForm'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'
export function LoginPage() {
 const {  uid, error, isLoading } = useContext(UserContext)


  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='w-1/3 '>
          <LoginForm />
          {uid && <Navigate to="/" />}
          {error?.message}
          {isLoading && 'Cargando...'}
        </div>
      </div>
    </>
  )

}
