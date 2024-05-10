import { Outlet } from "react-router-dom";
import Header from "../components/Header";


const Layout = () => {
    return (
        <div >
            <div>
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;