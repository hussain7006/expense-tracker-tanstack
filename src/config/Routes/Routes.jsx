import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../../components/Layout/MainLayout/MainLayout'
import { About, Home } from '../../Pages'

export default function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },

      ]
    }
  ])

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
}
