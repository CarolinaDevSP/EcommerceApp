import { BrowserRouter} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//ROUTER
import Paths from './routes'
//estilos
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/index.css'
//CONTEXT
import { ContextProvider } from './context/AppContext'
import { AuthProvider } from './context/AuthContext'


const root =document.getElementById('root')
const container = createRoot(root)
container.render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
          {/* <NavBar /> */}
          {/* //rutas de ROUTE */}
          <Paths />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
