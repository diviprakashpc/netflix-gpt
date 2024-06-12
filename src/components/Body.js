import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ])


  return (
    <div>
        <RouterProvider router={appRouter}>
            
        </RouterProvider>
    </div>
  )
}

export default Body