import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import { getDocuments } from "../helpers/firebase/CloudFirestore"


export function HomePage() {
  const {email} =useContext(UserContext)
  // console.log(email)
  
  //para obtener datos de firestore
  const [data, setData] = useState([])
  useEffect(() => { getDocuments('prueba').then(datos=>setData(datos)) 
    // los datos se guardan en el estado data de forma asincrona
  }, [])
  
  
  return (<>
  <h1 className="text-4xl">Página Home {email}</h1>
  
  {/* pintamos los datos de firestore */}
  {data.map((item) =>(<div key={item.idDoc}>{item.nombre}</div>))}
  </>)
}
