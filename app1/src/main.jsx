import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Greeting from './App.jsx'
import Gallery from './Task1.jsx'
import Profile from './Profile.jsx'
import Toggle from './Toggle.jsx'
import TextField from './TextField.jsx'
import FruitBasket from './ListItems.jsx'
import Square from './Tic-Tac-Toe.jsx'
import Userage, { Username } from './Task2.jsx'
import { Markup, WebsiteLink, BlogPost, Footer } from './Task3.jsx'
import { TodayDate, MathResult, MultiplyNumbers, WordCount, Quotes } from './Task4.jsx'
import { Movie, Button, Modal, UserProfile } from './Task5.jsx'
import { UserStatus, AgeCheck, Loading, Notification, FeedBack } from './Task6.jsx'
import { List, ProductList, ShoppingCart, TodoList, UserList } from './Task7.jsx'
import App from './Task8.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Gallery />
    <Profile />
    <Toggle />
    <TextField />
    <FruitBasket />
    <Square />
    <Userage />
    <Username />
    <Markup />
    <WebsiteLink />
    <BlogPost />
    <Footer />
    <TodayDate />
    <MathResult />
    <MultiplyNumbers />
    <WordCount />
    <Quotes />
    <Movie />
    <Button />
    <Modal />
    <UserProfile name='Rubesh' email='rubeshkk28@gmail.com' age='21' />
    <UserStatus />
    <AgeCheck />
    <Loading />
    <Notification />
    <FeedBack />
    <List items={['Item 1', 'Item 2', 'Item 3']} />
    <ProductList />
    <ShoppingCart />
    <TodoList />
    <UserList />
    <App />
  </StrictMode>,
)
