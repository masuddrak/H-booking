import { useEffect, useState } from "react";
import HomeBanner from "../components/HomeBanner";
import MapHotel from "../components/MapHotel";
import NewsLetter from "../components/NewsLetter";
import ReviewSlider from "../components/ReviewSlider";
import axios from "axios";
import FeacherRoom from "../components/FeacherRoom";
import SectionTitle from "../components/SectionTitle";
import { BallTriangle } from "react-loader-spinner";
import { Helmet } from "react-helmet";
import ModalHome from "../components/ModalHome";

const Home = () => {
    const [rooms, setRooms] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        const fackData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allrooms`)
            const sliceData = data.slice(0, 6)
            setRooms(sliceData)
            setLoader(false)
        }
        fackData()
    }, [])
    // modal

    if (loader) {
        return <div className="h-[80vh] flex justify-center items-center">
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            {/* modal */}
           <ModalHome></ModalHome>
            {/* feacher section */}
            <div className="bg-base-content glass ">
                <SectionTitle></SectionTitle>
                <div className="grid container  mx-auto py-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {
                        rooms.map(room => <FeacherRoom key={room._id} room={room}></FeacherRoom>)
                    }
                </div>
            </div>
            {/* feacher section  end*/}
            <div className="md:w-1/2 mx-auto flex justify-center mt-10 pt-6">
                <div className="text-center space-y-2">
                    <h1 className="text-base-content text-xl md:text-4xl font-bold">Client Reviews</h1>
                    <p className="text-base-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta molestiae deleniti perspiciatis totam at quos est vero, dolore vel reiciendis consequatur magni, quasi aliquam qui. Illo dolorem quia consectetur magni!</p>
                </div>
            </div>
            <div className="container mx-auto">
                <ReviewSlider></ReviewSlider>
            </div>
            <div className="">
                <NewsLetter></NewsLetter>
            </div>
            <MapHotel></MapHotel>
        </div>
    );
};

export default Home;