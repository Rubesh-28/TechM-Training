import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Greeting from './App.jsx'
import Gallery from './Gallery.jsx'
import Profile from './Profile.jsx'
import Toggle from './Toggle.jsx'
import TextField from './TextField.jsx'
import FruitBasket from './ListItems.jsx'
import Square from './Tic-Tac-Toe.jsx'
import Userage,{ Username } from './UserComponent.jsx'
import Markup from './Markup.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Username />
    <Userage />
    <Markup />
  </StrictMode>,
)