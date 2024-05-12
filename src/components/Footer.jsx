import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";


const Footer = () => {
    return (
        <div className="bg-base-200 ">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <Link className="text-xl font-extrabold">H-Radisson</Link>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">All Tourists Spot</a>
                    <a className="link link-hover">Add Tourists Spot</a>
                    <a className="link link-hover">My List</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Info</h6>
                    <a className="link link-hover">Email:masudranaacb@gmail.com</a>
                    <div className="flex gap-2 text-xl">
                        <a href="https://www.linkedin.com/in/masud-rana-98120923a/" className="link link-hover"><FaLinkedin></FaLinkedin></a>
                        <a href="https://www.facebook.com/mr864651" className="link link-hover"><ImFacebook2></ImFacebook2></a>
                    </div>
                </nav>
            </footer>
            {/* <hr className="text-gray-500  "></hr> */}
            <div className="flex justify-center mb-3 border-t-[0.2px] border-gray-300">
                <p>&copy; | Masud Rana. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;