import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Greeting from './App.jsx'
import Gallery from './Task1.jsx'
import Profile from './Profile.jsx'
import Toggle from './Toggle.jsx'
import TextField from './TextField.jsx'
import FruitBasket from './ListItems.jsx'
import Square from './Tic-Tac-Toe.jsx'
import Userage,{ Username } from './Task2.jsx'
import {Markup,WebsiteLink,BlogPost,Footer} from './Task3.jsx'
import { TodayDate,MathResult,MultiplyNumbers,WordCount,Quotes} from './Task4.jsx'
import { Movie,Button,Modal,UserProfile } from './Task5.jsx'
import { UserStatus,AgeCheck,Loading,Notification,FeedBack} from './Task6.jsx'
import {List, ProductList, ShoppingCart, TodoList,UserList} from './Task7.jsx'
import App from './Task8.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
