//CREO ESTE CUSTOME HUKS PARA HACER ESA TAREA TANTAS VECES COMO LA NECESITE
import { useEffect, useState } from 'react'
import { getData } from '../services'
// *****
import useAppContext from './useAppContext'

//SI EL ID DEVUELV CON ALGO '' , VA A EJECUTAR LINEA 21 GETDATA(ID)
const useGetData = (_id='') => {
    // ****
    const { setListProducts } = useAppContext()
     //para manejar la carga esta en tru porque esta cargando
      const [loading, setLoading] = useState(true)
  
     const [error,setError] = useState('')
  
     useEffect(() => {
        const setData = async () =>{
            try {
                // hago referencia al servicio
                const {data} = await getData(_id)
                console.log(data)
                //setea el products en un arreglo vacio
                setListProducts(data)
                
            } catch ({message}) {
                setError(message)
                
            } finally {
                 setLoading(false)
            }
        }
      setData()
     }, [_id])
    //cuando se ejecute el useefect tengo que retornar el valor de los estados como arreglo u objeto
    return {loading, error}

}

export default useGetData