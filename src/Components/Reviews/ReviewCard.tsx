import { Link } from "react-router";
import "../../Styles/ReviewCard.css";

type rcArgs = {
    image: string,
    rating: string,
    href: string,
    title: string,
}

export default function ReviewCard({ image, rating, href, title } : rcArgs) {
    return (
        <Link to={`/reviews/${href}`}>
        <button className="reviewCard">
            <div className="cardThing">
                <img src={image} alt="markeplier" className="rcImage" />
                <div className="rating">{rating}/10</div>
                <div className="bottomSection">
                    <div className="rcTitle">{title}</div>
                </div>

            </div>
            </button>
        </Link>
    )
}