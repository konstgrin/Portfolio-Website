import { useState } from "react";
import "../../Styles/searchAndTags.css";
import ReviewCard from "./ReviewCard";
import { Outlet, useLoaderData, useMatch } from "react-router";

type MediaType = "Game" | "Movie" | "Anime/Manga" | "All";
type reviewJson = {
    title: string,
    image: string,
    rating: string,
    id: string,
    description: string,
    tags: string[],
    mediaType: "Game" | "Movie" | "Anime/Manga",
}

export default function SearchAndTags() {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [mediaSelect, setMediaSelect] = useState<MediaType>("All");
    const [genresSelect, setGenresSelect] = useState<string[]>([]);
    const [toShowTags, setToShowTags] = useState<boolean>(false);

    const reviews = useLoaderData();
    reviews.map((r: reviewJson) => console.log(r.title));
    const genres = {
        "Game": [
            "Action",
            "FPS",
            "Racing",
            "Platformer",
            "Fighting/Brawler",
            "Bullet Hell",
            "Beat 'em up",
            "Shoot 'em up",
            "Hack and slash",
            "Adventure",
            "Visual Novel",
            "Metroidvania",
            "Stealth",
            "Horror",
            "RPG",
            "Strategy",
            "Tower Defense",
            "Survival",
            "Sandbox",
            "Roguelike",
            "Vampire-like",
            "Simulator",
            "Rhythm",
            "Casual",
            "Puzzle",
            "Coop",
            "Online",
            "Overlay",
            "Extraction"
        ],
        "Anime/Manga": [
            "Action",
            "Adventure",
            "Fantasy",
            "Sci-Fi",
            "Mecha",
            "Isekai",
            "Shounen",
            "Seinen",
            "Slice of Life",
            "Romance",
            "Drama",
            "Comedy",
            "Psychological",
            "Horror",
            "Thriller",
            "Mystery",
            "Supernatural",
            "Sports",
            "Music",
            "Historical",
            "Ecchi",
            "Harem",
        ],
        "Movie": [
            "Action",
            "Gangster",
            "Adventure",
            "Drama",
            "Comedy",
            "Thriller",
            "Horror",
            "Sci-Fi",
            "Fantasy",
            "Mystery",
            "Crime",
            "Romance",
            "War",
            "Western",
            "Animation",
            "Documentary",
            "Biography",
            "Historical",
            "Musical",
            "Noir",
            "Psychological"
        ],
        "All": [
            "Action", "FPS", "Racing", "Platformer", "Fighting/Brawler",
            "Bullet Hell", "Beat 'em up", "Shoot 'em up", "Hack and slash",
            "Adventure", "Visual Novel", "Metroidvania", "Stealth", "Horror",
            "RPG", "Strategy", "Tower Defense", "Survival", "Sandbox",
            "Roguelike", "Vampire-like", "Simulator", "Rhythm", "Casual",
            "Puzzle", "Coop", "Online", "Overlay", "Extraction",
            "Fantasy", "Sci-Fi", "Mecha", "Isekai", "Shounen", "Seinen",
            "Slice of Life", "Romance", "Drama", "Comedy", "Psychological",
            "Thriller", "Mystery", "Supernatural", "Sports", "Music", "Historical",
            "Ecchi", "Harem", "Crime", "War", "Western", "Animation",
            "Documentary", "Biography", "Musical", "Noir"
        ]
    }

    const handleMediaSelection = (event: React.MouseEvent<HTMLButtonElement>) => {
        setMediaSelect(event.currentTarget.textContent === mediaSelect ? "All" : event.currentTarget.textContent as MediaType);
    };

    const match = useMatch("/reviews/:id");
    const reviewsElement = reviews.filter((review: reviewJson) =>
        review.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())).
        filter((review: reviewJson) => genresSelect.length === 0 || !genresSelect.some(tag => !review.tags.includes(tag))).
        filter((review: reviewJson) => mediaSelect === "All" || review.mediaType === mediaSelect).map((review: reviewJson, idx: number) => (
            <ReviewCard image={review.image} rating={review.rating} href={review.id} title={review.title} key={idx} />
        ));
    return (
        <div className="searchAndTags">
            <input name="queryInput" type="text" className="searchInput" value={searchQuery} placeholder="Media name" onChange={(event) => {
                setSearchQuery(event.target.value);
            }} />
            
            <section className="mediaSelect">
                <button className={`mediaSelectButton ${mediaSelect === "Game" ? "checkedTag" : ""}`} onClick={handleMediaSelection}>Game</button>
                <button className={`mediaSelectButton ${mediaSelect === "Movie" ? "checkedTag" : ""}`} onClick={handleMediaSelection}>Movie</button>
                <button className={`mediaSelectButton ${mediaSelect === "Anime/Manga" ? "checkedTag" : ""}`} onClick={handleMediaSelection}>Anime/Manga</button>
                <button className="toShowTags" onClick={() => {
                    setToShowTags(c => !c);
                }}>Genres</button>
            </section>


            {toShowTags && <div className="reviewTags">
                {genres[mediaSelect].map(
                    (genre) => <button className={`genreTag ${genresSelect.includes(genre) ? "checkedTag" : ""}`} onClick={(event) => {
                        setGenresSelect(genresSelect.includes(event.currentTarget.textContent) ? [...genresSelect.filter((nigga) => nigga !== event.currentTarget.textContent)] : [...genresSelect, event.currentTarget.textContent])
                    }} key={genre}>{genre}</button>
                )}
            </div>}
            
            <div className={`reviewsGrid ${match ? "rcExtended" : ""}`}>
                <div className="reviewsBody">
                    {reviewsElement.length > 0 ? reviewsElement : <h2>It's empty here...</h2>}
                </div>
                {match && <Outlet context={reviews} />}
            </div>
        </div>
    )
}