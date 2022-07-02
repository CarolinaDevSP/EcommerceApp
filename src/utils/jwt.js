import jwtDecode from 'jwt-decode'

// validar el token
const isValidToken = (token) => {
  if (!token) {
    return false
  }

  const { exp } = jwtDecode(token)
  const currentTime = Date.now() / 1000

  return exp > currentTime
}

// guardar la sesión
const setSession = (token) => {
  if (token) {
    window.localStorage.setItem('token', token)
  } else {
    window.localStorage.removeItem('token')
  }
}

export { isValidToken, setSession }