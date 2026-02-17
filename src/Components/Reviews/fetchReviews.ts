export default async function fetchReviews() {
    return await fetch("/misc/reviews.json").then(r => r.json());
}