
import { IoIosStar } from "react-icons/io";
const RviwesSliderCard = ({ review }) => {
    const {rating,userName,reviewDate,comment}=review
    return (
       
            <div className="p-4 shadow-md">
                <p className="flex items-center">{rating}{[...Array(parseInt(rating))].map((rat, index) => <IoIosStar key={index}></IoIosStar>)}</p>
                <p className="font-semibold">{userName}</p>
                <p>{reviewDate}</p>
                <p>{comment}</p>
            </div>
      
    );
};

export default RviwesSliderCard;