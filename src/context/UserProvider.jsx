import { auth } from '../helpers/firebase/firebase'
import { useUser } from '../hooks/useUser'
import { UserContext } from './UserContext'
import PropTypes from 'prop-types'

export function UserProvider({ children }) {
  const data = useUser(auth) // custom hook de la carga del formulario de login
  // console.log(data)
  return (
    <UserContext.Provider value={ data }> 
      {children} 
      {/* aqui dentro va todo lo que va a recibir las variables, funciones ... */}
    </UserContext.Provider>
  )
}
UserProvider.propTypes = {
  children: PropTypes.any,
}