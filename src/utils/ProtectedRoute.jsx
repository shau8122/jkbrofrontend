import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



const ProtectedRoute = ({ role, children }) => {
    const { isLoading, isAuthenticated, user } = useSelector((state) => state.userState);
    
    return (
        <Fragment>
            {!isLoading && !isAuthenticated && <Navigate to="/loginsignup" />}
            {role !== 'admin' && !isLoading && isAuthenticated && children}
            {role === 'admin' && !isLoading && isAuthenticated && user.role === 'admin' && children}
            {role === 'admin' && !isLoading && isAuthenticated && user.role !== 'admin' && <Navigate to="/account" />}
            {isLoading }
        </Fragment>
    )
}
export default ProtectedRoute;