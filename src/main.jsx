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
        element: <SignUp/>
      },
      {
        path: '/signIn',
        element: <SignIn/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
