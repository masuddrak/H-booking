import { useEffect, useState } from "react";
import HomeBanner from "../components/HomeBanner";
import MapHotel from "../components/MapHotel";
import NewsLetter from "../components/NewsLetter";
import ReviewSlider from "../components/ReviewSlider";
import axios from "axios";
import FeacherRoom from "../components/FeacherRoom";
import SectionTitle from "../components/SectionTitle";

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
    if (loader) {
        return <h1>Loading.........</h1>
    }

    return (
        <div>
            <HomeBanner></HomeBanner>
            {/* feacher section */}
            <div className="bg-base-content glass ">
                <SectionTitle></SectionTitle>
                <div className="grid container  mx-auto py-10  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 ">
                    {
                        rooms.map(room => <FeacherRoom key={room._id} room={room}></FeacherRoom>)
                    }
                </div>
            </div>
            {/* feacher section  end*/}
            <div className="container mx-auto">
                <ReviewSlider></ReviewSlider>
            </div>
            <div className="my-6">
                <NewsLetter></NewsLetter>
            </div>
            <MapHotel></MapHotel>
        </div>
    );
};

export default Home;