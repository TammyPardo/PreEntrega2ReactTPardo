import { auth, db } from "../../services/firebase/firebaseConfig"
import { addDoc, collection } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"
import { useState } from "react"
import "./CrearUsuario.css"
import { useNavigate } from "react-router-dom"

const CrearUsuario = () => {
  document.title = "Libreria Koneko - Crear Usuario"

  const [nombre, setNombre] = useState(null)
  const [apellido, setApellido] = useState(null)
  const [telefono, setTelefono] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmacionPassword, setConfirmacionPassword] = useState(null)
  const [email, setEmail] = useState(null)
  const [confirmacionEmail, setConfirmacionEmail] = useState(null)
  const [direccion, setDireccion] = useState(null)

  const [errorVacio, setErrorVacio] = useState(null)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!nombre || !apellido || !email || !confirmacionEmail || !direccion || !password || !confirmacionPassword) {
      setErrorVacio("El campo esta vacio!")
      return;
    }

    if (email !== confirmacionEmail) {
      setErrorEmail("El email no coinciden!")
      return;
    }

    if (password !== confirmacionPassword) {
      setErrorPassword("La contraseña no coinciden!")
      return;
    }

    const nuevoUsuario = {
      nombre,
      apellido,
      email,
      telefono,
      direccion
    }
    const collectionRef = collection(db, "usuarios");
    const docRef = await addDoc(collectionRef, nuevoUsuario);
    console.log("The new ID is: " + docRef.id);

       await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => { 
        setDoc(doc(db, "usuarios", `${response.user.uid}`), nuevoUsuario)
        navigate(-1)
      })
      .catch(error => console.log(error))

  }

  return (
    <main className='CrearUsuario'>
      <h2>Crear Usuario</h2>
      <form onSubmit={handleSubmit}>
        <h3>Datos para crear un nuevo usuario</h3>

        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)}  />
          {!nombre ? <p>{errorVacio}</p> : ""}
        </div>

        <div>
          <label htmlFor="apellido">Apellido: </label>
          <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
          {!apellido ? <p>{errorVacio}</p> : ""}
        </div>

        <div>
          <label htmlFor="telefono">Telefono: </label>
          <input type="number" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
          {!telefono ? <p>{errorVacio}</p> : ""}
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          {email !== confirmacionEmail ? <p>{errorEmail}</p> : ""}
          {!email ? <p>{errorVacio}</p> : ""}
        </div>

        <div>
          <label htmlFor="confirmacionEmail">Confirmar email: </label>
          <input type="email" id="confirmacionEmail" onChange={(e) => setConfirmacionEmail(e.target.value)} />
          {email !== confirmacionEmail ? <p>{errorEmail}</p> : ""}
          {!confirmacionEmail ? <p>{errorVacio}</p> : ""}
        </div>

        <div>
          <label htmlFor="password">Contraseña: </label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          {password !== confirmacionPassword ? <p>{errorPassword}</p> : ""}
          {!password ? <p>{errorVacio}</p> : ""}
        </div>

        <div>
          <label htmlFor="confirmacionPassword">Confirmar contraseña: </label>
          <input type="password" id="confirmacionPassword" onChange={(e) => setConfirmacionPassword(e.target.value)} />
          {password !== confirmacionPassword ? <p>{errorPassword}</p> : ""}
          {!confirmacionPassword ? <p>{errorVacio}</p> : ""}
        </div>

        <div>
          <label htmlFor="direccion">Direccion: </label>
          <input type="text" id="direccion" onChange={(e) => setDireccion(e.target.value)} />
          {!direccion ? <p>{errorVacio}</p> : ""}
        </div>
        <button type="submit">Crear Usuario</button>
      </form>
    </main>
  )
}

export default CrearUsuario