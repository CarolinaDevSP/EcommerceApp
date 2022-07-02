//EMPEZAMOS A CREAR EL CONTEXTO GLOBAL
import { createContext, useState } from 'react'

const AppContext = createContext(null)

// componente que se va hacer que la aplicacion se cominque en todos los componentes y estados
//recibe un componente hijo
const ContextProvider = ({children}) => {
    const [listProducts, setListProducts] = useState([])
    const [filterProducts, setFilterProducts] = useState([])
    //si busca alguno que no pertenece lo devuelve vacio el input
    const [sms, setSms] = useState({ type: ''})
  
    const handleFilterProducts = (value) => {
        const filtered = listProducts.filter(product => {
          return product.product_name.toLowerCase().match(value.toLowerCase())
        })

        console.log(filtered);
    
        if (filtered.length === 0) {
          setFilterProducts([])
          setSms({
            type: 'error',
            message: 'Search not found'
          })
        } else {
          setFilterProducts(filtered)
          setSms({
            type: 'success',
            message: 'Products found'
          })
        }
      }
  
    const initialValue = {
        // query,
        // setQuery
        setListProducts,
        handleFilterProducts,
        filterProducts,
        sms
    }

    return (
        <AppContext.Provider value={initialValue}>
        {/* Aqui va el componente que queremos que se renderice, el componente hijo será toda la app */}
        {children}
        </AppContext.Provider>
    )

}

export  {ContextProvider, AppContext}