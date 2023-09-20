import React from "react";
import { Outlet } from "react-router-dom";
import AuthNavbar from "../components/NavBar";
const Auth = () => {
    return (
        <React.Fragment>
            <AuthNavbar />
            <Outlet />
        </React.Fragment>
    );
}
export default Auth;