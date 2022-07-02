import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef} from 'react'
import useAppContext from '../hooks/useAppContext'
import logo from '../assets/tienda2.png'

const NavBar = () => {
    //constante que llama al hook usereft, el useref me devuelve el searchref
   const searchRef = useRef()
   const {handleFilterProducts} = useAppContext()

  //  ****
   const navigate = useNavigate()
 
  const handleSubmit = (event) => {
    event.preventDefault()
    //trim elimina espacios vacios
    const trimValue = searchRef.current.value.trim()
  if (trimValue !== '') {

    //hace el filtrado y lo pasa al contex global
    handleFilterProducts(trimValue)
    //cuando envie a esa ruta reemplaza el historial del navegador
    navigate('/products/search', {replace: true})
  }

    //metodo que vacia todos loa campos del FORMULARIO
    event.target.reset()
  }
   
   return (
    //   sticky-top usado PARA QUE EL BUSCADOR SEA FIJO
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary sticky-top">
      <div className="container">
        <img src={logo} alt="logo" className="nav-logo" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavBar"
          aria-controls="mainNavBar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavBar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/products'>    HOME   </Link>
            </li>       
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/products'>ABOUT</Link>
            </li>    
          </ul>
          {/* agrego un evento, lo coloco en el formulario ONSUBMIT evento para trabajar con form  y ejecuta el hadlesubmit*/}
          <form className="d-flex" onSubmit={handleSubmit}>
              {/* le paso la referencia que he creado   */}
              <input ref={searchRef} className="form-control me-2" type="search" placeholder="Search product"
                aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">
                Search 
              </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

