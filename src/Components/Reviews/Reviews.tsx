import '../../Styles/gameReviews.css';
import ThemeSwitch from '../Portfolio/ThemeSwitch';
import ReviewFooter from './ReviewFooter';
import SearchAndTags from './SearchAndTags';

export default function GameReviews() {
    return (
        <div className="gameReviewsDiv">
            <SearchAndTags />
            <ReviewFooter />
            <div style={{ display: "none" }}>
                <ThemeSwitch />
            </div>
        </div>
    )
}