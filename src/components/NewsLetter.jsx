import subscribImage from "../assets/bannner3.jpg"

const NewsLetter = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${subscribImage})` }} className="min-h-[30vh]  bg-no-repeat  bg-cover flex justify-center items-center p-4 rounded-sm">

            <div className="text-gray-200 space-y-4">
                <div className="text-center space-y-3">
                    <h2 className="text-xl md:text-4xl font-bold">Get 20% OFF Your <br /> First Booking!</h2>
                    <p>Don’t Wanna Miss Somethings? Subscribe Right Now & Get The Special Discount & Monthly Newsletter</p>
                </div>
                <div className="md:grid grid-cols-3 justify-center  items-center">
                    <div className="col-span-2">
                        <input type="text" className="outline-0 p-4 w-full text-black" placeholder="Your Email Address" />
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <button className="p-4 bg-pink-500">Subscribe Now</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default NewsLetter;