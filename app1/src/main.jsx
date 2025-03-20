import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greeting from './App.jsx'
import Gallery from './Gallery.jsx'
import Profile from './Profile.jsx'
import Toggle from './Toggle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Gallery />
    <Profile /> */}
    <Toggle />
  </StrictMode>,
)