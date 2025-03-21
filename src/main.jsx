import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './components/Navbar/Navbar'
import FlightSearch from './components/FlightSearch/FlightSearch'
import RecentSearches from './components/RecentSearches/RecentSearches'
import PrepareTrip from './components/PrepareTrip/PrepareTrip'
import CardOne from './components/CardOne/CardOne'
import CardTwo from './components/CardTwo/CardTwo'
import CardThree from './components/CardThree/CardThree'
import LogIn from './components/LogIn/LogIn'
import Footer from './components/Footer/Fotter'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Navbar/>
   <FlightSearch/>
   <RecentSearches/>
   <PrepareTrip/>
<CardOne/>
<CardTwo/>
<CardThree/>
<LogIn/>
<Footer/>
  </StrictMode>,
)
