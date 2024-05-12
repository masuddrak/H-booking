import HomeBanner from "../components/HomeBanner";
import MapHotel from "../components/MapHotel";
import NewsLetter from "../components/NewsLetter";
import ReviewSlider from "../components/ReviewSlider";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
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