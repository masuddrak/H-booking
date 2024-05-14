import { Link } from 'react-router-dom';
import notfountimg from "../assets/404.jpg"
const NotFount = () => {
    return (
        <div className="flex justify-center min-h-[70vh] items-center">
        <div className="text-center">
            <div>
                <img src={notfountimg} alt="" />
            </div>
            <div>
                <Link to="/" className="btn bg-pink-500 text-white mt-10">Back To Home</Link>
            </div>
        </div>
    </div>
    );
};

export default NotFount;