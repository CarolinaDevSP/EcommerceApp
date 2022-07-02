//es un customehooks, todo lo que no renderiza un componnete es un estado global, servicio
import axios from 'axios'
import useSWR from 'swr'
//no esta hecho para usarlo en fucniones, ni en condicionales
//se carga cuando se rendeiza el componente
const fetcher = (url) => axios.get(url).then(res => res.data).catch(err => err)

const useFetcher = (baseUrl) =>{
 return useSWR (baseUrl, fetcher, {suspense:true})
 
}

export default useFetcher