import React, { useContext } from 'react';

import { Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authentication/Provider/AuthProvider';
import Loader from './Loader';

const PrivateRoute = ({children}) => {

      const{user, loading}=useContext(AuthContext)
      const location = useLocation()
      
      // console.log(location);
      console.log(loading);

    if (user) {
        return children
    }

    if (loading) {
        return <Loader></Loader>
    }
   

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>


      // if(!user){
      //   return  <Navigate to="/signIn" state={{from: location}} replace/>
      // }
      
      // if(loading){
      //    return <progress className="progress w-56"></progress>
      // }

      // else{
      //   return children
      // }
     

};

export default PrivateRoute;