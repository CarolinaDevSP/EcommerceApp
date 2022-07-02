import '../styles/App.css'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { ContextProvider } from '../context/AppContext'

function App() {

  return (
    <ContextProvider>
    <NavBar/>
    <div className='App container py-5'>
      {/* espera al otro elemento dentro, que cargue su informacion, encierra al componente que espera */}
      <Suspense fallback={<p>....loading suspense</p>}>
      {/* reemplaza un contenido por otro cuando hay un cambio */}
         <Outlet />
      </Suspense>
    </div>
    </ContextProvider>
  )
}

export default App
