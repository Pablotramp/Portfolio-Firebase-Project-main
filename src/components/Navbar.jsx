import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"

export function Navbar() {
  const { uid, _signOut } = useContext(UserContext)

  return (<>
    <nav className="flex justify-between gap-2 ml-12 mr-12">
      <div>
        <Link to='/'>Inicio</Link>
      </div>
      {!uid && <div> <Link to='/login'>Login</Link> </div>}
      {uid && <button onClick={() => _signOut()} className='text-white ' type='button'> Cerrar sesión </button>}
    </nav>
  </>)
}

