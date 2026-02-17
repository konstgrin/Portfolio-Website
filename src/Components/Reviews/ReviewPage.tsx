import { Link, useOutletContext, useParams } from "react-router";
import { FaXmark } from "react-icons/fa6";
import "../../Styles/ReviewPage.css";

type reviewJson = {
    title: string,
    image: string,
    rating: string,
    id: string,
    description: string,
    tags: string[],
    mediaType: "Game" | "Movie" | "Anime/Manga",
}

export default function ReviewPage() {
    const id = useParams<{ id: string }>();
    const reviews = useOutletContext<reviewJson[]>() ?? [];
    const review: reviewJson = reviews.find((review: reviewJson) => review.id === id.id)!;
    console.log(reviews);
    console.log(review)

    return (
        <div className="reviewContainer">
            <img src={review.image} alt="markeplier" className="rcImage rpImage" />
            <Link to={"/reviews"} className="linkBack">
                <FaXmark size={"2.5rem"} />
            </Link>
            <div className="rpOtherBullshit">
                <div className="rpTitle">{review.title}</div>
                <div className="tagSection">
                    {review.tags.map((tag, idx) => <div className="rcTag" key={idx}>{tag}</div>)}
                    <div className="rcTag" key={"ololololololol"}>{review.mediaType}</div>
                </div>
                <div className="rpDescription">
                    {review.description}
                </div>
                <div className="rpRate">Rate: {review.rating}/10</div>
            </div>
        </div>
    )
}