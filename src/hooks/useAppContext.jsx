//para importar el contexto en todos los componentes, reutilizar esa logica
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useAppContext = () => {
//   el hook de react (usecontext) va a recibir a Appcontext el contexto que cree
  const context = useContext(AppContext);
//si en algun caso no se llega a cargar el contexto
  if (!context) 
    throw new Error("NO HAY CONTEXTO ACTIVO");
    return context;

}

export default useAppContext;