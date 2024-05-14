import { Link } from "react-router-dom";
import about1 from "../assets/banner1.jpg"
import about2 from "../assets/banner2.jpg"
import about3 from "../assets/bannner3.jpg"
import { Helmet } from "react-helmet";
const About = () => {
    return (
        <div className="conteiner mx-auto min-h-[60vh]  my-10">
             <Helmet>
                <title>About</title>
            </Helmet>
            <div className="hero">
                <div className="hero-content gap-24 flex-col lg:flex-row">
                    <div className="relative md:w-1/2 mb-10">
                        <img src={about1} className="  rounded-lg shadow-2xl" />
                        <img src={about2} className=" border-8 border-white rounded-lg shadow-2xl absolute w-1/2 top-2/3 right-0 md:-right-14" />
                        <img src={about3} className=" border-8 border-white rounded-lg shadow-2xl absolute w-1/2 -top-10 left-0 md:-left-14" />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl font-bold  mb-2"><span className="">About Us</span> <Link className="text-xl font-extrabold"><span className="text-pink-500">H-R</span>
                    adisson</Link></h3>
                        <h1 className="md:text-5xl text-3xl  font-bold">Where Every Stay is a Dream Come True</h1>
                        <p className="py-6">Welcome to Serenity Suites, where luxury meets tranquility. Nestled in the heart of [City Name], our boutique hotel offers a haven of comfort and sophistication for discerning travelers. From the moment you step through our doors, you'll be enveloped in a world of elegance and personalized service.</p>
                        <p className="py-3">Indulge in our meticulously designed rooms and suites, each adorned with plush furnishings and modern amenities to ensure your utmost relaxation. Whether you're traveling for business or leisure, our attentive staff is dedicated to exceeding your expectations, catering to your every need with warmth and professionalism.</p>
                        <button className="btn bg-pink-500 text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;