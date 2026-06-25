import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout';
import HomePage from './pages/homepage/HomePage';
import Books from './pages/Books';

const router = createBrowserRouter([
 {
  path: "/",
  Component: MainLayout,
  children:
  [
    {
      index: true,
      element: <HomePage></HomePage>
    }, 
    {
      path: "/books",
      element: <Books></Books>
    }
  ]
 }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
