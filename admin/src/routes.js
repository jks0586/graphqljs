import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import CreateQuote from './components/createQuote'
import Home from './components/Home'
import OtherUserProfile from './components/OtherUserProfile'

export const routes = [
  {
    path: '/',
    element: <Home />
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/profile', element: <Profile /> },
  { path: '/profile/:userid', element: <OtherUserProfile /> },
  { path: '/create', element: <CreateQuote /> }
]
