
import { IoIosStar } from "react-icons/io";
const Review = ({ review }) => {
    const { rating, userName, reviewDate, comment } = review

    return (
        <div className="p-4 shadow-md">
            <p className="flex items-center">{rating}{[...Array(parseInt(rating))].map((rat, index) => <IoIosStar key={index} className="text-pink-500"></IoIosStar>)}</p>
            <p className="font-semibold">{userName}</p>
            <p>{reviewDate}</p>
            <p >{comment.length > 100 ?
                <p>{comment.slice(0, 100)}...</p> : comment
            }</p>

        </div>
    );
};

export default Review;