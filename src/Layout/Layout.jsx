import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../components/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';
const Layout = () => {
    return (
        <div>
            <div>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
            <ToastContainer />
           { Aos.init()}
        </div>
    );
};

export default Layout;