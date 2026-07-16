import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.tsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { Header } from './shared/header/index.tsx';

const DefaultTemplate = () => {
  return (
    <>
      <Header />
      <div className="pt-24 md:pt-24 bg-[#0a0405]">
        <Outlet />
      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <DefaultTemplate />,
    children: [
      {
        path: "/",
        index: true,
        element: <App />
      },
      {
        path: "/canil-dos-condenados",
        index: true,
        element: <div>Canil dos Condenados</div>
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
