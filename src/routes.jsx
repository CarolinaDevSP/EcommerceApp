import {BrowserRouter,Routes, Route, Navigate, useRoutes } from 'react-router-dom'
import App  from './pages/App'
import Product from './pages/Product'
import Products from "./components/Products"
import Search from "./components/Search"
import NotFound from './components/NotFound'
import Login from "./pages/Login"

const Paths = () => {
    //usamos un hook de react-router-dom, crea un arreglo donde se pasa las rutas
    const element = useRoutes([
        
        { 
            path: '/', 
            element: <Navigate to='/products' replace /> 

        },
        {
            path : '/products',
            element : <App />,
            children: [
                {
                    element: <Products/>,
                    index: true
    
                },
                {
                    //cuando la ruta esta anidada evitar colocarle la linea invertida
                    path : 'product/:_id',
                    element : <Product />,
                },
                {
                    
                    path : 'search',
                    element : <Search />,
                }
            ]
           },
           {
            path : '/',
            element : <Navigate to='/login' />,
           },
           
           {
            path : '/login',
            element : <Login />,
           },
        
        { 

            path: '/404' ,
            element: <NotFound /> 
            

        },
        {   
            path: '*' , element: <Navigate to='/404' replace/>
        },
    ])
    return element
   }

export default Paths
