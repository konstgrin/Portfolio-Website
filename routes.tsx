import { hydrateRoot } from 'react-dom/client'
import MainPage from './src/Components/Portfolio/MainPage'
import Reviews from './src/Components/Reviews/Reviews'
import fetchReviews from './src/Components/Reviews/fetchReviews'
import ReviewPage from './src/Components/Reviews/ReviewPage'

const routes = [
  { index: true, element: <MainPage /> },
  {
    path: "/reviews",
    element: <Reviews />,
    loader: fetchReviews,
    HydrateFallback: () => <p>Loading shi...</p>,
    children: [
      {
        path: ":id",
        element: <ReviewPage />,
        loader: fetchReviews
      }
    ]
  }
]

export default routes