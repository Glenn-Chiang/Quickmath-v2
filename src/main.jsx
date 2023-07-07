import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import Drill from './routes/drill/drill'
import SignUp from './routes/signUp/signUp'
import Stats from './routes/stats/stats'
import Leaderboard from './routes/leaderboard/leaderboard'
import SignIn from './routes/signIn/signIn'
import { action as signUpAction } from './routes/signUp/signUpAction'
import { action as signInAction } from './routes/signIn/action'
import { action as signOutAction } from './routes/signOut/action'
import SignOut from './routes/signOut/signOut'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Drill/>
      },
      {
        path: '/stats',
        element: <Stats/>
      },
      {
        path: '/leaderboard',
        element: <Leaderboard/>
      },
      {
        path: '/signup',
        element: <SignUp/>,
        action: signUpAction
      },
      {
        path: '/signIn',
        element: <SignIn/>,
        action: signInAction
      },
      {
        path: '/signOut',
        element: <SignOut/>,
        action: signOutAction
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
