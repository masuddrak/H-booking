import React from 'react';
import { Link } from 'react-router-dom';

const NotFount = () => {
    return (
        <div className="flex justify-center min-h-[70vh] items-center">
        <div className="text-center">
            <h1 className="text-7xl font-bold">OPPPS!!!</h1>
            <h1 className="text-7xl font-bold">Page Not Found</h1>
            <div>
                <Link to="/" className="btn bg-gray-800 text-white mt-10">Back To Home</Link>
            </div>
        </div>
    </div>
    );
};

export default NotFount;