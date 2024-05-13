import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { authContext } from "./AuthProvider";
import { BallTriangle } from "react-loader-spinner";


const PrivetRoute = ({ children }) => {
    const { user, loader } = useContext(authContext)
    const location = useLocation()
  
    // console.log(location)
    if (loader) {
        return <div className="h-[80vh] flex justify-center items-center">
         <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
    </div>
    }
    if (user) {
        return children
    }

    return (<Navigate to="/login" state={location.pathname}></Navigate>);
};

export default PrivetRoute;
PrivetRoute.propTypes = {
    children: PropTypes.node,
}