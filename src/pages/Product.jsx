import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetcher from '../hooks/useFetcher'

const Product = () => {
    //useParamns un hook de react, devuelve un string, VA A DEVOLVER EL CAMPO INDICADO EN A RUTA DE routes en este caso _id
    //useParams devuelve un string para mostrar en el dom, USE PARAMS devuelve el nombre que yo devuelva por URL
  const {_id = ''} = useParams()

  const {data :listProducts, error}= useFetcher(`https://ecomerce-master.herokuapp.com/api/v1/item/${_id}`)

  if (error) return <p>{error}</p>

  return (
    <article>
       <p>Product</p>
       {/* llamamos al producto, ESTO VIENE DEL USEGETDATA*/}       
       <p>{listProducts.product_name}</p>
       <img width={200} height={200} src={listProducts.image} alt={listProducts.product_name}/>
       <p>{listProducts.category}</p>
       <button type="button" class="btn btn-primary">COMPRAR</button>
    </article>
  )
}

export default Product