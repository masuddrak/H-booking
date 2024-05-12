import HomeBanner from "../components/HomeBanner";
import MapHotel from "../components/MapHotel";
import ReviewSlider from "../components/ReviewSlider";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className="container mx-auto">
                <ReviewSlider></ReviewSlider>
            </div>
            <MapHotel></MapHotel>
        </div>
    );
};

export default Home;