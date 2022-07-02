import { useContext } from 'react'

import { AppContext } from '../context/AppContext'

const useAuthContext = () => {
  const context = useContext(AppContext)

  if (!context) throw new Error('No hay un contexto para LOGIN')

  return context
}

export default useAuthContext