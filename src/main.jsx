import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainPage from './Components/MainPage.jsx'
import GameReviews from './Components/GameReviews.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <GameReviews /> */}
    <MainPage />
  </StrictMode>,
)
