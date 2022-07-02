// import useGetData from '../hooks/useGetData'
import {Link} from 'react-router-dom'
import useAppContext from '../hooks/useAppContext'
import  { useEffect} from 'react'
import useFetcher from '../hooks/useFetcher'
import '../styles/products.css'

const Products = () => {
    // ******
    const {setListProducts, filterProducts, sms} = useAppContext()
    const {data: products, error}= useFetcher('https://ecomerce-master.herokuapp.com/api/v1/item')
 
   //RESOLVEMOS ERRORES
   if (error) return <p>{error.message}</p>
//    ****
   useEffect(() => {
    setListProducts(products)
  }, [])


    //LLAMAMOS A LOS DATOS, hago un map para recorrer el arreglo de productos
    return (
            <section className="row gy-4">
                <h1>BIENVENIDOS A MI TIENDA VIRTUAL</h1>
                {products.map((index,key) => (
                    <div key={key} className='col-12 col-sm-6 col-md-6 col-lg-3'>
                        <Link to={`product/${index._id}`}>
                            <article className='card'>

                                <figure>
                                <img loading='lazy' className='card-img-top' src={index.image} alt={index.product_name}/>
                                </figure>
                                <div className='card-body'>
                                    <p className='card-title' >{index.product_name} </p>
                                    <p className='card-title' >{index.price} </p>
                                </div>
                            </article>
                        </Link>
                    </div>
                    ))
                }
            </section>
        
    )
}

export default Products