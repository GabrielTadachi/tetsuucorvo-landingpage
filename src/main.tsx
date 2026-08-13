import { createRoot } from 'react-dom/client'
import './style.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { AuthorHome } from './pages/AuthorHome'
import { WorkPage } from './pages/WorkPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthorHome />,
  },
  {
    path: '/:slug',
    element: <WorkPage />,
  },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
