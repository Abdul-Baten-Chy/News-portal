import { useContext } from "react";
import { MyContex } from "../contex/Contex";
import { Navigate, useLocation } from "react-router-dom";


const Private = ({children}) => {
    const location=useLocation();
    const {loading, user}=useContext(MyContex)

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
if(user){
return children;
}else{
return <Navigate state={location.pathname} to={'/login'}></Navigate>;
}
    
};

export default Private;