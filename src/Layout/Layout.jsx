import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    return (
        <div >
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Layout;