import '../../Styles/gameReviews.css';
import ReviewFooter from './ReviewFooter';
import SearchAndTags from './SearchAndTags';

export default function GameReviews() {
    return (
        <div className="gameReviewsDiv">
            <SearchAndTags />
            <ReviewFooter />
        </div>
    )
}