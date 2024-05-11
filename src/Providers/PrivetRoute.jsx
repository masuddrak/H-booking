import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { authContext } from "./AuthProvider";
import useUpateRoom from "../hooks/useUpateRoom";

const PrivetRoute = ({ children }) => {
    const { user, loader } = useContext(authContext)
    const { isPending } = useUpateRoom()

    const location = useLocation()
    if (isPending) {
        return <div className="min-h-[70vh] flex justify-center items-center">
            <h1 className="text-5xl"><span className="loading loading-ring loading-lg"></span></h1>
        </div>
    }
    // console.log(location)
    if (loader) {
        return <div className="min-h-[70vh] flex justify-center items-center">
            <h1 className="text-5xl"><span className="loading loading-ring loading-lg"></span></h1>
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